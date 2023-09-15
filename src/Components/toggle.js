import React, { useState } from "react";
import Cookies from "js-cookie";
import { useTheme } from "../app/themeContext";

const Toggle = () => {
  // Initialize the state to keep track of the checkbox's status
  // const [isChecked, setIsChecked] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const dark = Cookies.get("dark");
  // console.log(theme);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    Cookies.set("dark", !isChecked);
  };

  return (
    <div className="inline-flex items-center">
      <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
        <input
          // value={isChecked}
          id="switch-component"
          type="checkbox"
          className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-red-600 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
          // checked={isChecked} // Set the checked attribute based on state
          onChange={handleCheckboxChange} // Handle checkbox click
        />
        <label
          htmlFor="switch-component"
          className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
        >
          <div
            className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
            data-ripple-dark="true"
          ></div>
        </label>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Toggle;
