"use client";
import React, { useCallback, useState, useRef, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionLineType,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";

import dagre from "dagre";

import { initialNodes } from "../constants/initialNodes";
import { initialEdges } from "../constants/initialEdges";

import Buttons from "./Buttons";
import ContextMenu from "../Components/ContextMenu";
import AddNode from "./AddNode";
import NodeDetails from "./NodeDetails";
import EditNode from "./EditNode";
import { nodeTypes } from "./NodeTypes";
import { useIfHorizontal } from "../constants/ifHorizontal";
import Cookies from "js-cookie";
import { useTheme } from "../../themeContext";

export { initialNodes, initialEdges };

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes, edges, direction = "TB") => {
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  let nodeWidth = null;
  let nodeHeight = null;

  if (mediaQuery.matches === true) {
    if (direction === "TB") {
      nodeWidth = 300;
      nodeHeight = 150;
    } else {
      nodeWidth = 270;
      nodeHeight = 200;
    }
  } else {
    if (direction === "TB") {
      nodeWidth = 600;
      nodeHeight = 160;
    } else {
      nodeWidth = 300;
      nodeHeight = 180;
    }
  }

  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  let currentY = 10; // Initial y position

  const layoutedNodes = nodes.map((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    return node;
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const updatedNodes = layoutedNodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);

    if (node.extent === "parent") {
      // Set x: 10 and increment y by 10 for nodes with extent: "parent"
      node.position = { x: 25, y: currentY };
      currentY += 60;
    } else {
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      // Shift the dagre node position to match React Flow node anchor point
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y + 60 - nodeHeight / 2,
      };
    }
    return node;
  });

  return { nodes: updatedNodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

function Flowchart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showNodeDetails, setShowNodeDetails] = useState(false);
  const [editNode, setEditNode] = useState(null);
  const { ifHorizontal, setIfHorizontal } = useIfHorizontal();

  const [isMinMap, setIsminMap] = useState(false);
  const [dark, setIsDark] = useState(false);

  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  const systemTheam = window.matchMedia("(prefers-color-scheme : dark").matches;
  console.log(systemTheam);

  const onNodeContextMenu = useCallback(
    (event, node) => {
      event.preventDefault();

      const pane = ref.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
    },
    [setMenu]
  );

  const onPaneClick = useCallback(() => {
    setMenu(null);
  }, [setMenu]);

  const onConnect = useCallback(
    (params) => {
      const edgeWithStyle = {
        ...params,
        type: ConnectionLineType.SmoothStep,
        animated: true,
        style: { stroke: "white", strokeWidth: 2 }, // Set the desired dark stroke color
      };
      setEdges((prevEdges) => addEdge(edgeWithStyle, prevEdges));
    },
    [setEdges]
  );

  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
      {
        direction === "LR" ? setIfHorizontal(true) : setIfHorizontal(false);
      }
    },
    [setNodes, setEdges, nodes, edges, ifHorizontal, setIfHorizontal]
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    setShowNodeDetails(true);
  };

  const onNodeDoubleClick = (event, node) => {
    setEditNode(node);
  };

  const onEditNodeCancel = () => {
    setEditNode(null);
  };

  const onEditNodeSave = (nodeId, editedLabel) => {
    setNodes((prevNodes) =>
      prevNodes.map((n) =>
        n.id === nodeId ? { ...n, data: { ...n.data, label: editedLabel } } : n
      )
    );
    setEditNode(null);
  };

  const edgeOptions = {
    animated: true,
  };

  useEffect(() => {
    const theam = Cookies.get("dark");

    let timer;

    if (showNodeDetails) {
      timer = setTimeout(() => {
        setShowNodeDetails(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [showNodeDetails]);

  return (
    <ReactFlowProvider>
      <div className="min-h-full w-full  dark:border-[#000] bg-red-500">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          // style={reactFlowStyle}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // onLoad={(instance) => setTimeout(() => instance.fitView(), 0)}
          onConnect={onConnect}
          snapToGrid={true}
          defaultEdgeOptions={edgeOptions}
          connectionLineStyle={{ stroke: "black", strokeWidth: 4 }}
          snapGrid={[32, 32]}
          ref={ref}
          onPaneClick={onPaneClick}
          onNodeContextMenu={onNodeContextMenu}
          onNodeClick={onNodeClick}
          onNodeDoubleClick={onNodeDoubleClick}
          className={
            theme === "dark"
              ? "bg-gradient-to-b from-[#030303] to-[#000000]"
              : "bg-gradient-to-b from-[#ffbebe] to-[#b7e0ff]"
          }
        >
          <Controls />
          <Panel position="top-right flex gap-1">
            <button
              className={`blue-button mr-3 text-[13px] ${
                theme === "dark" && "blue-button-dark"
              }`}
              onClick={() => onLayout("TB")}
            >
              vertical layout
            </button>
            <button
              className={`gray-button mr-3 text-[13px] ${
                theme === "dark" && "gray-button-dark"
              }`}
              onClick={() => onLayout("LR")}
            >
              horizontal layout
            </button>
            <button
              className={`blue-button md:hidden mr-3 text-[13px] ${
                theme === "dark" && "blue-button-dark"
              }`}
              onClick={() => setIsminMap(!isMinMap)}
            >
              Minmap
            </button>
          </Panel>
          <MiniMap
            style={{ backgroundColor: "#343435" }}
            className={isMinMap ? "md:flex" : "max-md:hidden"}
            nodeColor={(n) => {
              if (n.data.type === "input") return "blue";
              else if (n.data.type === "default") return "yellow";
              else if (n.data.type === "lime") return "yellow";
              else return "tomato";
            }}
          />
          <Background variant="dots" gap={12} size={1} />
          {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
        </ReactFlow>
        {showNodeDetails && selectedNode && (
          <NodeDetails
            selectedNode={selectedNode}
            setShowNodeDetails={setShowNodeDetails}
          />
        )}
        {editNode && (
          <EditNode
            node={editNode}
            onSave={onEditNodeSave}
            onCancel={onEditNodeCancel}
          />
        )}
        <Buttons />
        <div className={`h-auto ${theme === "dark" && "dark:bg-[#1e1e1e]"}`}>
          <AddNode setNodes={setNodes} />
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default Flowchart;
