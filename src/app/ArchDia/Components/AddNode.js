"use client";

import React from "react";
import { useState } from "react";
import { useTheme } from "../../themeContext";

const AddNode = ({ setNodes }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const [addNode, setAddNode] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const addNote = () => {
    setNodes((prevNodes) =>
      prevNodes.concat({
        id: (prevNodes.length + 1).toString(),
        data: {
          label: `${name}`,
          type: `${type}`,
        },
        type: { type },
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        style:
          type === "input"
            ? {
                fontSize: "20px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "11px",
                backgroundColor: "white",
                borderBottom: "5px solid skyblue",
              }
            : type === "output"
            ? {
                fontSize: "20px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "11px",
                backgroundColor: "white",
                borderBottom: "5px solid tomato",
              }
            : type === "default"
            ? {
                fontSize: "20px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "11px",
                backgroundColor: "white",
                borderBottom: "5px solid lightgrey",
              }
            : {},
      })
    );
    setAddNode(false);
  };

  return (
    <div className="flex items-center justify-between p-4 ">
      <div
        className={`text-sm text-[#555] max-md:w-[60%] ${
          theme === "dark" && "text-white"
        }`}
      >
        To Delete a Component/Node Select it and press Backspace key
      </div>
      <button
        className={`gray-button mr-10 max-md:mr-2 ${
          theme === "dark" && "gray-button-dark"
        }`}
        onClick={() => setAddNode(true)}
      >
        Add Node
      </button>
      {addNode && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50 z-[1000]  ${
            theme === "dark" && "bg-black"
          }`}
        >
          <div className="w-[600px] p-6 rounded-xl flex flex-col justify-between content-between gap-5 bg-white   ">
            <div>
              <label htmlFor="component-name">Enter Component to Add:</label>
              <br />
              <input
                className="w-full p-2.5 border-[1px] border-[#ccc] rounded text-sm text-[#333]"
                type="text"
                id="component-name"
                name="title"
                placeholder="Enter Component Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="component-type">Enter Type of Component:</label>
              <br />
              <input
                className="w-full p-2.5 border-[1px] border-[#ccc] rounded text-sm text-[#333]"
                type="text"
                name="nodeType"
                id="component-type"
                placeholder="input / output / default"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                className={`blue-button mr-5 ${
                  theme === "dark" && "blue-button-dark"
                }`}
                type="button"
                onClick={addNote}
              >
                Add Component Button
              </button>
              <button
                onClick={() => setAddNode(false)}
                className={`gray-button mr-10 max-md:mr-2 ${
                  theme === "dark" && "gray-button-dark"
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNode;
