"use client";

import { useState, useEffect } from "react";

import { Transition } from "@headlessui/react";

import { ToastContainer, toast } from "react-toastify";
import Buttons from "../ArchDia/Components/Buttons";
import { useRouter } from "next/navigation";

const questions = [
  "1. What is your name?",
  "2. What is the name of your organisation ?",
  "3. What is your Domain",
  [
    "4. Do you wish to provide business-level questions which will help Sadhaka to provide better recommendations?",
    ["Yes", "No"],
  ],
  [
    "5. What is your targeted domain?",
    ["Ecommerce", "Edutech", "Foodtech", "IT", "Cloud", "Agritech", "Other"],
  ],
  [
    "6. What is the nature of your system's targeted audience?",
    ["SAAS B2B", "B2C", "Internal ops"],
  ],
  "7. What is your monthly active user base?",
];

export default function Welcome() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setCurrentAnswer("");
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
    setCurrentAnswer(answer);
  };

  const handleSubmit = () => {
    const answerData = questions.map((question, index) => ({
      question: Array.isArray(question) ? question[0] : question,
      answer: answers[index] || "No answer provided",
    }));

    toast.info(JSON.stringify(answerData, null, 2), {
      position: "top-right",
      autoClose: 3000,
    });

    setShowThankYou(true);
  };

  const skipButtonHandler = () => {
    router.push("/register");
  }

  const renderInputField = () => {
    const currentQuestionData = questions[currentQuestion];
    if (Array.isArray(currentQuestionData)) {
      const questionText = currentQuestionData[0];
      const options = currentQuestionData[1];

      return (
        <div className="space-y-4">
          <p className="text-2xl font-semibold mb-2">{questionText}</p>
          <select
            onChange={(e) => handleAnswer(e.target.value)}
            value={currentAnswer}
            className="px-4 py-2 border rounded-md w-64 shadow-md focus:ring focus:ring-indigo-300 transition-colors duration-300 bg-indigo-200 text-indigo-800"
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div className="space-y-4">
          <p className="text-2xl font-semibold mb-2">{currentQuestionData}</p>
          <input
            type="text"
            placeholder="Your answer"
            className="px-4 py-2 border rounded-md w-64 shadow-md focus:ring focus:ring-indigo-300 transition-colors duration-300 bg-blue-200 text-blue-800"
            onChange={(e) => handleAnswer(e.target.value)}
            value={currentAnswer}
          />
        </div>
      );
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        showWelcome ? "bg-red-400" : "bg-gray-100"
      }`}
    >
      <Transition
        show={showWelcome}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="text-4xl font-bold text-center mb-8 text-white">
          Welcome to Sadhaka
        </div>
      </Transition>

      <Transition
        show={!showWelcome}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`text-2xl font-semibold text-center mb-4 ${
            showThankYou ? "hidden" : ""
          }`}
        >
          Lets start by understanding your requirement.
        </div>
      </Transition>

      <Transition
        show={!showWelcome && !showThankYou}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          {renderInputField()}

          <div className="mt-4 flex space-x-4">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Prev
              </button>
            )}

            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            )}
            <button className="blue-button" onClick={skipButtonHandler}>Skip</button>
          </div>
        </div>
      </Transition>

      <Transition
        show={showThankYou}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="text-2xl font-semibold text-center mt-4">
          Thank You for Your Response
        </div>
      </Transition>
    </div>
  );
}
