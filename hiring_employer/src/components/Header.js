import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import profileImage from "../assets/images/Rectangle40860.png";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  const [searchItems, setSearchItems] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Search Item: ", searchItems);
      setSearchItems("");
    }
  };

  return (
    <div className="h-14 bg-slate-100">
      <div className="bg-white p-2 rounded-lg m-2 flex justify-between gap-2">
        <div className="flex gap-3">
          <div className="bg-slate-100 p-1 w-40 rounded-lg">
            <h5 className="text-gray-400 text-sm">Your Organization</h5>
            <p className="font-bold">Skill genic</p>
          </div>
          <div className="flex items-center bg-slate-100 w-52 rounded-lg h-14">
            <IoIosSearch
              className="cursor-pointer"
              onClick={handleKeyPress}
              size={40}
            />
            <input
              onKeyDown={handleKeyPress}
              className="bg-slate-100 outline-none h-14 rounded-lg"
              placeholder="Search..."
              value={searchItems}
              onChange={(e) => setSearchItems(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-14 h-14 bg-yellow-50 rounded-lg flex justify-center items-center">
            <FaRegBell size={24} color="orange" />
          </div>
          <div>
            <img className="w-14 h-14" src={profileImage} alt="profileimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
