import React, { useState } from "react";
import { titles } from "../assets/titleArray";
import { FaBars, FaSearch } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { HiMicrophone } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import GoogleOAuth from "./GoogleAuth";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginPanel from "./LoginPanel";

const Navbar = ({ toggleLeftBar }) => {
  // const [user, setuser] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const [showAP, setShowAP] = useState(false);
  const user = useSelector((state) => state.currentUserReducer);
  const [name, setName] = useState("");
  const [loginpanel, setLoginpanel] = useState(false);

  const toggleAccountPanel = () => {
    setShowAP((prev) => !prev);
  };

  const adduser = (name) => {
    setName(name);
    // setuser(name);
    console.log("User logged in:", name);
  };

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
  const toggleLoginPanel = () => {
    setLoginpanel((prev) => !prev);
  };

  const handleLogin = () => {
    // toggleLoginPanel();
    setShowAP(false);
  };

  return (
    <div className="fixed z-20 bg-black top-0 w-full flex items-center justify-between px-8 py-2">
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
        <div className="relative">
          {user ? (
            <div
              className="text-white text-xl font-bold bg-zinc-800 w-10 h-10  rounded-full items-center flex justify-evenly cursor-pointer"
              onClick={toggleAccountPanel}
            >
              {user.result.email.slice(0, 1).toUpperCase()}
            </div>
          ) : (
            <div>
              <button
                onClick={toggleAccountPanel}
                className="text-blue-500 border border-blue-500 py-1 px-2"
              >
                Sign in
              </button>
            </div>
          )}

          {showAP && (
            <div className="absolute bg-zinc-800 right-0 top-12 p-6 z-30 w-64 rounded-lg  ">
              <h1 className="border-b-2 text-white mb-6 font-semibold text-lg text-center pb-4">
                Wellcome {name}!
              </h1>

              <NavLink to={"/channel"}>
                <div className="text-white font-semibold  py-2 px-2 my-2 text-md cursor-pointer text-left hover:bg-black rounded-lg">
                  Your Channel
                </div>
              </NavLink>
              {!user && (
                <div
                  className="text-white font-semibold border-blue-500 border py-2 my-2 mb-4 text-lg px-2 cursor-pointer  text-center hover:bg-black rounded-lg"
                  onClick={handleLogin}
                >
                  <NavLink to={"/login"}> Login with Email</NavLink>
                </div>
              )}
              <GoogleOAuth adduser={adduser} />
            </div>
          )}
        </div>
      </div>
      {/* {loginpanel && <LoginPanel toggleLoginPanel={toggleLoginPanel} />} */}
    </div>
  );
};

export default Navbar;
