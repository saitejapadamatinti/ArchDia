"use client"

import React, { createContext, useContext, useState } from "react";

const IfHorizontalContext = createContext();

export const IfHorizontalProvider = ({ children }) => {
  const [ifHorizontal, setIfHorizontal] = useState(false);

  return (
    <IfHorizontalContext.Provider value={{ ifHorizontal, setIfHorizontal }}>
      {children}
    </IfHorizontalContext.Provider>
  );
};

export const useIfHorizontal = () => {
  return useContext(IfHorizontalContext);
};
