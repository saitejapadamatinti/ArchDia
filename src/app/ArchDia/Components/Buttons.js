"use client";

import React from "react";
import { useStoreApi, useReactFlow, Panel } from "reactflow";
import { useTheme } from "../../themeContext";

const Buttons = () => {
  const store = useStoreApi();
  const { zoomIn, zoomOut, setCenter } = useReactFlow();

  const { theme, toggleTheme } = useTheme();

  const focusNode = () => {
    const { nodeInternals } = store.getState();
    const nodes = Array.from(nodeInternals).map(([, node]) => node);

    if (nodes.length > 0) {
      const node = nodes[0];

      const x = node.position.x + node.width / 2;
      const y = node.position.y + node.height / 2;
      const zoom = 1.85;

      setCenter(x, y, { zoom, duration: 1000 });
    }
  };

  return (
    <div
      position="top-left"
      className="absolute top-[68px] left-4 hidden lg:block"
    >
      <div
        className={`description text-[13px] ${
          theme === "dark" && "text-white"
        }`}
      >
        This is an example of how you can use the zoom pan helper hook
      </div>
      <div className="flex gap-2 mb-2">
        <button
          className={`blue-button ${theme === "dark" && "blue-button-dark"}`}
          onClick={focusNode}
        >
          focus node
        </button>
        <button
          className={`gray-button ${theme === "dark" && "gray-button-dark"}`}
          onClick={zoomIn}
        >
          zoom in
        </button>
        <button
          className={`blue-button ${theme === "dark" && "blue-button-dark"}`}
          onClick={zoomOut}
        >
          zoom out
        </button>
      </div>
    </div>
  );
};

export default Buttons;
