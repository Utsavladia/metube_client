import React from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdVideoLibrary } from "react-icons/md";
import "../Pages/Home/homestyles.css";

const HomeSideBar = () => {
  return (
    <div className="flex  flex-col text-xs w-20  h-full fixed top-14 left-0">
      <NavLink
        to={"/"}
        className="flex flex-col justify-evenly items-center w-full py-5  bg-black rounded-lg hover:bg-zinc-800 "
      >
        <div>
          <GoHomeFill className="text-2xl" />
        </div>
        <p>Home</p>
      </NavLink>
      <NavLink
        to={"/shorts"}
        className="flex flex-col justify-evenly items-center w-full py-5  bg-black rounded-lg hover:bg-zinc-800 "
      >
        <SiYoutubeshorts className="text-2xl" />
        Shorts
      </NavLink>
      <NavLink
        to={"/subscriptions"}
        className="flex flex-col justify-evenly items-center w-full py-5  bg-black rounded-lg hover:bg-zinc-800 "
      >
        <MdOutlineSubscriptions className="text-2xl" />
        Subscriptions
      </NavLink>
      <NavLink
        to={"/library"}
        className="flex flex-col justify-evenly items-center w-full py-5  bg-black rounded-lg hover:bg-zinc-800 "
      >
        <MdVideoLibrary className="text-2xl" />
        Library
      </NavLink>
    </div>
  );
};

export default HomeSideBar;
