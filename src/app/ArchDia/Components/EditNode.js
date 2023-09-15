"use client";

import { useTheme } from "../../themeContext";
import React, { useState } from "react";

function EditNode({ node, onSave, onCancel }) {
  const [editedLabel, setEditedLabel] = useState(node.data.label);
  const { theme, toggleTheme } = useTheme();

  const handleLabelChange = (event) => {
    setEditedLabel(event.target.value);
  };

  const handleSave = () => {
    onSave(node.id, editedLabel);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[1000]">
      <div className="bg-white p-5 rounded-lg shadow-md w-[300px] h-[183px]">
        <h3 className="mt-4 font-bold text-xl">Edit Node Label</h3>
        <input
          className="w-[90%] p-2.5 mb-2.5 mt-5 text-[12px] rounded border border-[#ccc]"
          type="text"
          value={editedLabel}
          onChange={handleLabelChange}
        />
        <button
          className={`blue-button mr-2 text-[12px] ${
            theme === "dark" && "blue-button-dark"
          }`}
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className={`gray-button text-[12px] ${
            theme === "dark" && "gray-button-dark"
          }`}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditNode;
