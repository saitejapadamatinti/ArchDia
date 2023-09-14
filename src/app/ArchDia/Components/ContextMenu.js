"use client"

import React, { useCallback } from "react";
import { useReactFlow } from "reactflow";

const ContextMenu = ({ id, top, left, right, bottom, ...props }) => {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const duplicateNode = useCallback(() => {
    const node = getNode(id);
    const position = {
      x: node.position.x + 50,
      y: node.position.y + 50,
    };

    addNodes({ ...node, id: `${node.id}-copy`, position });
  }, [id, getNode, addNodes]);

  const deleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes, setEdges]);

  return (
    <div
      style={{ top, left, right, bottom }}
      className="bg-white border-[2.4px] border-black shadow-md absolute z-10 p-[10px] rounded-[10px]"
      {...props}
    >
      <p style={{ margin: "0.5em" }}>
        <small>node: {id}</small>
      </p>
    <div className="flex flex-col gap-2">
    <button className="blue-button" onClick={duplicateNode}>
        duplicate
      </button>
      <button className="gray-button" onClick={deleteNode}>
        delete
      </button>
    </div>
    </div>
  );
};

export default ContextMenu;
