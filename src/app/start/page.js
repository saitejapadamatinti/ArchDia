"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"; // Import the correct icon

const Start = () => {
  const router = useRouter();

  const onclickreg = () => {
    router.push("/register");
  };

  console.log("home page")

  return (
    <div
      className=" bg-gradient-to-r from-blue-500 to-teal-400 bg-cover bg-center h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-6xl text-white font-bold mb-4">
        Venhan Technologies
      </h1>
      <h2 className="text-2xl text-gray-900">Value Enhanced</h2>
      <button
        onClick={onclickreg}
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded"
      >
        Register Now
        <FontAwesomeIcon className="w-7 h-4 animate-bounce" icon={faLocationArrow} style={{ color: "white" }} /> 
      </button>
    </div>
  );
};

export default Start;
