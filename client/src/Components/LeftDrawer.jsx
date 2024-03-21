import React from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdVideoLibrary } from "react-icons/md";
import { LuHistory, LuUserSquare2 } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
const LeftDrawer = ({ isVisible }) => {
  return (
    <div
      className={`flex z-20 flex-col fixed left-0 top-14 p-2 w-1/6 text-white bg-black overflow-hidden hover:overflow-auto h-full
    ${
      isVisible ? "translate-x-0" : "-translate-x-full"
    } transform duration-100 ease-in-out `}
    >
      <NavLink
        to={"/"}
        className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6"
      >
        <GoHomeFill className="text-2xl" />
        Home
      </NavLink>
      <NavLink
        to={"/shorts"}
        className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6"
      >
        <SiYoutubeshorts className="text-2xl" />
        Shorts
      </NavLink>
      <NavLink
        to={"/subscriptions"}
        className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6"
      >
        <MdOutlineSubscriptions className="text-2xl" />
        Subscriptions
      </NavLink>
      <hr className="border border-zinc-800 my-3" />
      <NavLink
        to={"/library"}
        className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6"
      >
        <MdVideoLibrary className="text-2xl" />
        Library
      </NavLink>
      <NavLink
        to={"/history"}
        className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6"
      >
        <LuHistory className="text-2xl" />
        History
      </NavLink>
      <NavLink
        to={"/channel"}
        className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6"
      >
        <LuUserSquare2 className="text-2xl" />
        Your channel
      </NavLink>
      <NavLink
        to={"/watchlater"}
        className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6"
      >
        <IoMdTime className="text-2xl" />
        Watch Later
      </NavLink>
      <NavLink
        to={"/likedvideos"}
        className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6"
      >
        <BiSolidLike className="text-2xl" />
        Liked Videos
      </NavLink>
      <hr className="border border-zinc-800 my-3" />
      <h1 className="font-semibold ml-6">Subscriptions</h1>
      <div className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6">
        <img
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt="profile"
          className="w-6 h-6 object-cover rounded-full"
        />
        channel name
      </div>
      <div className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6">
        <img
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt="profile"
          className="w-6 h-6 object-cover rounded-full"
        />
        channel name
      </div>
      <div className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6">
        <img
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt="profile"
          className="w-6 h-6 object-cover rounded-full"
        />
        channel name
      </div>
      <div className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6">
        <img
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt="profile"
          className="w-6 h-6 object-cover rounded-full"
        />
        channel name
      </div>
      <div className="flex items-center py-3 px-6 bg-black rounded-lg hover:bg-zinc-800 gap-6">
        <img
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt="profile"
          className="w-6 h-6 object-cover rounded-full"
        />
        channel name
      </div>
    </div>
  );
};

export default LeftDrawer;
