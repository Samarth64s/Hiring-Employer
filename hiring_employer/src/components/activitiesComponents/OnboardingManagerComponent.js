import React, { useState } from "react";
import { Link } from "react-router-dom";

const OnboardingManagerComponent = () => {
  const [selectedOption, setSelectedOption] = useState("Active");
  const [selectedDesingOption, setSelectedDesingOption] = useState("Design");
  const [selectedDevelopmentOption, setSelectedDevelopmentOption] = useState("Development");
  const [selectedMarketingOption, setSelectedMarketingOption] = useState("Development");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="m-4">
      <h1 className="font-bold text-lg">Onboarding Manager</h1>
      <div className="flex justify-around font-bold m-2 border-b-2">
        <Link
          className={`${
            selectedOption === "Active" ? " border-blue-500 border-b-4" : ""
          }`}
          to="#"
          onClick={() => handleOptionClick("Active")}
        >
          Active
        </Link>
        <Link
          className={`${
            selectedOption === "Hold" ? " border-blue-500 border-b-4" : ""
          }`}
          to="#"
          onClick={() => handleOptionClick("Hold")}
        >
          On Hold
        </Link>
        <Link
          className={`${
            selectedOption === "Completed" ? " border-blue-500 border-b-4" : ""
          }`}
          to="#"
          onClick={() => handleOptionClick("Completed")}
        >
          Completed
        </Link>
      </div>
      <div className="flex flex-col gap-4">
      <div className="bg-gray-100 rounded-2xl">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-semibold text-xl">Senior Product manager</h1>
          <div className="flex justify-around w-full">
            <div className="flex flex-col font-bold items-center">
              <h1 className="text-lg">20</h1>
              <p>Total Candidates</p>
            </div>
            <div className="flex flex-col font-bold items-center">
              <h1 className="text-lg">11</h1>
              <p>Qualified</p>
            </div>
          </div>
          <div className="flex justify-around w-full m-2 font-semibold">
            <button
              onClick={() => setSelectedDesingOption("Design")}
              className={`${
                selectedDesingOption === "Design"
                  ? "bg-blue-500 text-white"
                  : ""
              }  w-36 h-8 rounded-full`}
            >
              Design
            </button>
            <button
              onClick={() => setSelectedDesingOption("Site")}
              className={`${
                selectedDesingOption === "Site" ? "bg-blue-500 text-white" : ""
              }  w-36 h-8 rounded-full`}
            >
              On Site
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-2xl">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-semibold text-xl">Software Engineer</h1>
          <div className="flex justify-around w-full">
            <div className="flex flex-col font-bold items-center">
              <h1 className="text-lg">20</h1>
              <p>Total Candidates</p>
            </div>
            <div className="flex flex-col font-bold items-center">
              <h1 className="text-lg">11</h1>
              <p>Qualified</p>
            </div>
          </div>
          <div className="flex justify-around w-full m-2 font-semibold">
            <button
              onClick={() => setSelectedDevelopmentOption("Development")}
              className={`${
                selectedDevelopmentOption === "Development"
                  ? "bg-blue-500 text-white"
                  : ""
              }  w-36 h-8 rounded-full`}
            >
              Development
            </button>
            <button
              onClick={() => setSelectedDevelopmentOption("Remote")}
              className={`${
                selectedDevelopmentOption === "Remote" ? "bg-blue-500 text-white" : ""
              }  w-36 h-8 rounded-full`}
            >
              Remote
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-2xl">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-semibold text-xl">Sr. Digital Marketing</h1>
          <div className="flex justify-around w-full">
            <div className="flex flex-col font-bold items-center">
              <h1 className="text-lg">20</h1>
              <p>Total Candidates</p>
            </div>
            <div className="flex flex-col font-bold items-center">
              <h1 className="text-lg">11</h1>
              <p>Qualified</p>
            </div>
          </div>
          <div className="flex justify-around w-full m-2 font-semibold">
            <button
              onClick={() => setSelectedMarketingOption("Development")}
              className={`${
                selectedMarketingOption === "Development"
                  ? "bg-blue-500 text-white"
                  : ""
              }  w-36 h-8 rounded-full`}
            >
              Development
            </button>
            <button
              onClick={() => setSelectedMarketingOption("Remote")}
              className={`${
                selectedMarketingOption === "Remote" ? "bg-blue-500 text-white" : ""
              }  w-36 h-8 rounded-full`}
            >
              Remote
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OnboardingManagerComponent;
