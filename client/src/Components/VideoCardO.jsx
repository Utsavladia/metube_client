import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteVideo } from "../actions/getAllVideos";
import { changeAccess } from "../actions/getAllVideos";

const VideoCardO = ({ video }) => {
  console.log(video);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [options, setOptions] = useState(false);
  const [access, setAccess] = useState(video?.access);
  const [accessmenu, setAccessmenu] = useState(false);

  const uploadDate = video.createdAt;
  const getElapsedTime = (uploadDate) => {
    const now = new Date();
    const uploadDateTime = new Date(uploadDate);
    const elapsedMilliseconds = now - uploadDateTime;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} seconds ago`;
    } else if (elapsedSeconds < 3600) {
      const minutes = Math.floor(elapsedSeconds / 60);
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (elapsedSeconds < 86400) {
      const hours = Math.floor(elapsedSeconds / 3600);
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (elapsedSeconds < 2592000) {
      const days = Math.floor(elapsedSeconds / 86400);
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (elapsedSeconds < 31536000) {
      const months = Math.floor(elapsedSeconds / 2592000);
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else {
      const years = Math.floor(elapsedSeconds / 31536000);
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
  };

  const handledelete = () => {
    dispatch(
      deleteVideo({
        id: video?._id,
      })
    );
    setOptions(false);
  };
  useEffect(() => {
    const handlechangeaccess = () => {
      dispatch(
        changeAccess({
          id: video?._id,
          access: access,
        })
      );
    };
    handlechangeaccess();
  }, [access]);

  const handleeveryone = () => {
    setAccess(true);
  };

  const showaccessmenu = () => {
    setAccessmenu(!accessmenu);
  };
  const handleonly = () => {
    setAccess(false);
  };

  const handleMenuHover = () => {
    setShowMenu(true);
  };

  const handleMenuLeave = () => {
    setShowMenu(false);
  };

  const handleOption = () => {
    setOptions(!options);
  };
  return (
    <div
      className="text-white flex flex-col my-4 relative"
      onMouseEnter={handleMenuHover}
      onMouseLeave={handleMenuLeave}
    >
      {showMenu && (
        <div onClick={handleOption} className="absolute top-0 right-0 p-2 z-20">
          {/* Three dots menu */}
          <div className=" w-6 h-6 flex justify-center items-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
            <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
          </div>
        </div>
      )}

      {options && (
        <div className="flex flex-col absolute top-2 right-10 z-20 bg-black">
          <h1
            className="text-white py-2 px-4 hover:bg-zinc-800 relative "
            onClick={showaccessmenu}
          >
            Change Access{" "}
            {accessmenu && (
              <div className="flex flex-col text-white bg-black absolute top-0 right-full ">
                <h1
                  className={`py-2 px-4 hover:bg-zinc-800 ${
                    access ? "bg-zinc-800" : ""
                  }`}
                  onClick={() => {
                    setAccess(true);
                    setOptions(false);
                  }}
                >
                  Everyone
                </h1>
                <h1
                  className={`py-2 px-4 hover:bg-zinc-800 ${
                    access ? "" : "bg-zinc-800"
                  }`}
                  onClick={() => {
                    setAccess(false);
                    setOptions(false);
                  }}
                >
                  Subscribers only
                </h1>
              </div>
            )}
          </h1>
          <h1
            className="text-red-500 py-2 px-4  hover:bg-zinc-800"
            onClick={handledelete}
          >
            Delete Video
          </h1>
        </div>
      )}
      <Link to={`/videopage/${video?._id}`} className="relative">
        <video
          src={`https://metube-server-j5lh.onrender.com/${video.filePath}`}
          // src={`http://localhost:5173/${video.filePath}`}
          className="rounded-xl"
        />
        {/* <p className="absolute right-2 bottom-1 bg-black font-semibold text-sm">
          {video.duration}
        </p> */}
      </Link>
      <div className="flex gap-3 pt-3">
        <img
          src="https://img6.arthub.ai/64c007f4-aa90.webp"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">{video.videoTitle}</h1>
          {/* <p className="text-zinc-500 font-semibold">{video.channel}</p> */}
          <span className="text-sm font-semibold text-zinc-500">
            {video.Views} views • {getElapsedTime(uploadDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCardO;
