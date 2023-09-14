"use client"

import React from "react";

function NodeDetails({ selectedNode, setShowNodeDetails }) {
  return (
    <div className="w-[200px] fixed top-[9%] right-0 bg-[#1E8762] text-white p-2.5 shadow-md rounded">
      <p>Node ID: {selectedNode.id}</p>
      <p>Label: {selectedNode.data.label}</p>
      <p>Type: {selectedNode.data.type}</p>
      <button className="blue-button" onClick={() => setShowNodeDetails(false)}>Close</button>
    </div>
  );
}

export default NodeDetails;
