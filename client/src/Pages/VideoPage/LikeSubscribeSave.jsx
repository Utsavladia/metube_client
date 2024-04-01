import React, { useState, useEffect } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { MdPlaylistAdd, MdOutlineOutlinedFlag } from "react-icons/md";

import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { likeVideo } from "../../actions/getAllVideos";
import { savevideo } from "../../actions/getAllVideos";
import { userLiked } from "../../actions/video";
import { useNavigate } from "react-router-dom";
const LikeSubscribeSave = ({ video, vid }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dots, setdots] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUserReducer);
  const watchLaterList = useSelector((state) => state.watchLaterReducer);
  const allLikes = useSelector((state) => state.allLikesReducer);
  console.log("we got the watchlater as ", watchLaterList);
  useEffect(() => {
    watchLaterList?.data
      .filter(
        (q) => q?.videoId === vid && q?.userId === currentUser?.result?._id
      )
      .map((m) => setSaved(true));

    allLikes?.likedVideos?.filter((q) => q == vid).map((m) => setLiked(true));
  }, []);

  const toggleDot = () => {
    setdots(!dots);
  };

  const toggleLike = () => {
    if (liked) {
      dispatch(
        likeVideo({
          id: vid,
          Like: video.Like - 1,
        })
      );
    } else {
      dispatch(
        likeVideo({
          id: vid,
          Like: video.Like + 1,
        })
      );
    }
    console.log("called aciton user likeda s");
    if (currentUser) {
      dispatch(
        userLiked({
          userId: currentUser?.result?._id,
          videoId: vid,
        })
      );
    }

    setLiked(!liked);
  };
  const toggleDislike = () => {
    if (liked) {
      dispatch(
        likeVideo({
          id: vid,
          Like: video.Like - 1,
        })
      );
    }
    setDisliked(!disliked);
  };

  const handleSave = () => {
    if (currentUser) {
      setSaved(!saved);
      dispatch(
        savevideo({
          videoId: vid,
          userId: currentUser?.result?._id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  // to control like and dislike at same time
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
          {video.Like}
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
      <button
        onClick={handleSave}
        className="flex gap-2 items-center h-10 rounded-full px-4 hover:bg-zinc-700 bg-zinc-800"
      >
        {saved ? (
          <div className="flex items-center gap-2 text-md">
            <MdOutlinePlaylistAddCheck className="text-xl" />
            Saved
          </div>
        ) : (
          <div className="flex items-center gap-2 text-md">
            <MdPlaylistAdd className="text-xl" />
            Save
          </div>
        )}
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
