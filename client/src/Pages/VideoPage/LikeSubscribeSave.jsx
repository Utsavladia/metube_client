import React, { useState, useEffect } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdPlaylistAdd, MdOutlineOutlinedFlag } from "react-icons/md";

import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";

const LikeSubscribeSave = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [dots, setdots] = useState(false);

  const toggleDot = () => {
    setdots(!dots);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };
  const toggleDislike = () => {
    setDisliked(!disliked);
  };

  useEffect(() => {
    if (liked == true) setDisliked(false);
  }, [liked]);

  useEffect(() => {
    if (disliked == true) setLiked(false);
  }, [disliked]);

  return (
    <div className="flex gap-2 mb-4">
      <div className="flex overflow-hidden bg-zinc-800 gap-0 rounded-full">
        <button
          onClick={toggleLike}
          className="flex items-center gap-2  px-4 h-10  hover:bg-zinc-700"
        >
          {liked ? (
            <AiFillLike className="text-lg" />
          ) : (
            <AiOutlineLike className="text-lg" />
          )}
          {video.likes}
        </button>
        <button
          onClick={toggleDislike}
          className="flex border-l-[0.5px]  items-center gap-2  hover:bg-zinc-700 px-4 h-10 "
        >
          {disliked ? (
            <AiFillDislike className="text-xl" />
          ) : (
            <AiOutlineDislike className="text-xl" />
          )}
        </button>
      </div>
      <button className="flex gap-2 items-center h-10 rounded-full px-4 hover:bg-zinc-700 bg-zinc-800">
        <TbShare3 className="text-xl" /> Share
      </button>
      <button className="flex gap-2 items-center h-10 rounded-full px-4 hover:bg-zinc-700 bg-zinc-800">
        <MdPlaylistAdd className="text-xl" /> Save
      </button>

      <button
        onClick={toggleDot}
        className="relative flex gap-2 items-center h-10 rounded-full px-3 bg-zinc-800  hover:bg-zinc-700"
      >
        <HiOutlineDotsHorizontal className="text-xl " />
        {dots && (
          <div className="absolute bottom-full left-0 flex flex-col bg-zinc-900 rounded-xl py-4">
            <button className="flex gap-2 items-center h-10 rounded-full px-4 hover:bg-zinc-800">
              <HiDownload className="text-xl" /> Download
            </button>
            <button className="flex gap-2 items-center h-10 rounded-full px-4 hover:bg-zinc-800">
              <MdOutlineOutlinedFlag className="text-xl" /> Report
            </button>
          </div>
        )}
      </button>
    </div>
  );
};

export default LikeSubscribeSave;
