import React, { useState } from "react";
import { titles } from "../assets/titleArray";
import { FaBars, FaSearch } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { HiMicrophone } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { VscDeviceCameraVideo } from "react-icons/vsc";

const Navbar = ({ toggleLeftBar }) => {
  const [user, setuser] = useState("utsav");
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSugg, setShowSugg] = useState(false);

  const handleInputChange = (e) => {
    setsearchQuery(e.target.value);
    const sugg = titles
      .filter((title) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 10);
    setsuggestions(sugg);
    s;
  };

  return (
    <div className="fixed z-20 bg-black  w-full flex items-center justify-between px-8 py-2">
      <div className="flex items-center ">
        <FaBars
          className="text-white text-xl font-thin"
          onClick={toggleLeftBar}
        />
        <div className="flex ml-6">
          <img
            className="w-8 h-8 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            alt="Youtube"
          />
          <h1 className="text-white text-2xl font-sans tracking-tighter font-bold  ml-1">
            YouTube
          </h1>
        </div>
      </div>
      <div className="flex w-1/2 gap-4 relative">
        <div className="flex justify-between w-5/6 bg-black rounded-full overflow-hidden">
          <input
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
            value={searchQuery}
            onChange={handleInputChange}
            type="text"
            className="bg-black px-4 py-2  text-white  flex-1 outline-none border-zinc-800 border-2 rounded-l-full focus:border-blue-500 "
            placeholder="Search"
          />
          {showSugg && (
            <ul className="text-white absolute top-12 bg-zinc-900 py-2 rounded-lg w-5/6 z-20 ">
              {suggestions.map((sugg) => (
                <li
                  key={sugg}
                  onClick={(e) => setsearchQuery(sugg)}
                  className="font-bold w-full px-5 py-2 flex gap-4 items-center hover:bg-zinc-800"
                >
                  <FaSearch className="opacity-70" />
                  {sugg}
                </li>
              ))}
            </ul>
          )}
          <div className="px-5 py-2 bg-zinc-800">
            <RiSearchLine className="text-white text-xl mt-1 opacity-70" />
          </div>
        </div>
        <div className="rounded-full bg-zinc-800 p-3">
          <HiMicrophone className="text-white text-xl" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <VscDeviceCameraVideo className="text-white text-2xl" />
        <HiOutlineBell className="text-white text-2xl" />
        {user.length > 0 ? (
          <div className="text-white text-xl">{user}</div>
        ) : (
          <button className="text-blue-500 border border-blue-500 py-1 px-2">
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
