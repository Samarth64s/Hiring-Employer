import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { PiSketchLogo } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { AiFillFund } from "react-icons/ai";
import { ImBriefcase } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import { RiFolderSettingsFill } from "react-icons/ri";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState("home");

  return (
    <div className="text-white m-5 w-72">
      <div className="flex items-center gap-2 mb-10 font-semibold text-2xl">
        <PiSketchLogo />
        Logo
      </div>
      <div>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "home"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("home")}
          to="/"
        >
          <div className="flex items-center gap-4">
            <MdSpaceDashboard />
            Home
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "chat"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("chat")}
          to="/chat"
        >
          <div className="flex items-center gap-4">
            <BsChatSquareDotsFill />
            Chat
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "activities"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("activities")}
          to="/activities"
        >
          <div className="flex items-center gap-4">
            <AiFillFund />
            Activities
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <h1 className="text-gray-500">RECRUITMENT</h1>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "jobs"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3 mt-3`}
          onClick={() => setSelectedOption("jobs")}
          to="/jobs"
        >
          <div className="flex items-center gap-4">
            <ImBriefcase />
            Jobs
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "interviews"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("interviews")}
          to="/interviews"
        >
          <div className="flex items-center gap-4">
            <IoIosPeople size={20} />
            Interviews
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "newHires"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("newHires")}
          to="/newHires"
        >
          <div className="flex items-center gap-4">
            <LuBadgePercent />
            New Hires
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <h1 className="text-gray-500">ORGANIZATION</h1>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "companyProfile"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3 mt-3`}
          onClick={() => setSelectedOption("companyProfile")}
          to="/companyProfile"
        >
          <div className="flex items-center gap-4">
            <FaBuildingColumns />
            Company Profile
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "community"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("community")}
          to="/community"
        >
          <div className="flex items-center gap-4">
            <FaPeopleGroup />
            Community
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "team"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("team")}
          to="/team"
        >
          <div className="flex items-center gap-4">
            <FaPeopleLine />
            Team
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "hRToolBox"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("hRToolBox")}
          to="/hRToolBox"
        >
          <div className="flex items-center gap-4">
            <RiFolderSettingsFill />
            HR Tool Box
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "reports"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-3`}
          onClick={() => setSelectedOption("reports")}
          to="/reports"
        >
          <div className="flex items-center gap-4">
            <BiSolidBarChartAlt2 />
            Reports
          </div>
          <MdKeyboardArrowRight />
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            selectedOption === "settings"
              ? "bg-yellow-300 text-black"
              : "text-white"
          } rounded p-2 mb-8`}
          onClick={() => setSelectedOption("settings")}
          to="/settings"
        >
          <div className="flex items-center gap-4">
            <IoSettings />
            Settings
          </div>
          <MdKeyboardArrowRight />
        </Link>

        <div>
          <Link>Need Help?</Link>
          <p className="text-gray-500">Open over help center</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
