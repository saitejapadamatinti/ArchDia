"use client";

import React, { useState } from "react";
import { Handle } from "reactflow";
import Image from "next/image";
import { useIfHorizontal } from "../constants/ifHorizontal";
import { useTheme } from "../../themeContext";

const CustomNode = ({ data, isHovered }) => {
  const [showDetails, setShowDetails] = useState(false.style);
  const { ifHorizontal } = useIfHorizontal();

  const { theme, toggleTheme } = useTheme();

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div
      className={`w-[181px] h-[164 px] flex flex-col items-center p-2.5 rounded-[10px] shadow-md w-[160px] transition-border transition-shadow duration-300 max-md:w-[100px] max-md:h-[115px] ${
        theme === "dark" ? "bg-[#373737]" : "bg-[#f8f8f8] "
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <div className="w-4 h-4 bg-red-700 rounded-full absolute left-3 top-3"></div> */}
      <div className="w-[100px] h-[100px] mb-2 max-md:w-[70px] ">
        <Image
          src={data.imageUrl}
          alt="Node"
          width="100"
          height="100"
          className="w-full rounded-[50%] object-cover shadow-md "
        />
      </div>
      <div
        className={`text-base font-bold items-center  mb-[6px] max-md:text-[12px] text-[#333] ${
          theme === "dark" && "dark:text-[#efefef]"
        }`}
      >
        {data.label}
      </div>
      {isHovered && showDetails && (
        <div className="details">
          <p>{data.additionalInfo}</p>
        </div>
      )}
      <div className="flex justify-center mt-[6px]">
        <Handle type="target" position={ifHorizontal ? "left" : "top"} />
        <Handle type="source" position={ifHorizontal ? "right" : "bottom"} />
      </div>
    </div>
  );
};

export default CustomNode;
