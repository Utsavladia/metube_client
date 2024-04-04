import React from "react";
import { Link } from "react-router-dom";

const VideoHCard = ({ video }) => {
  return (
    <div className="my-2 flex gap-3 ">
      <Link to={`/videopage/${video?._id}`} className=" w-4/12">
        <video
          className="w-full rounded-lg relative "
          src={`https://metube-server-j5lh.onrender.com/${video.filePath}`}
        />
      </Link>
      <div className="flex flex-col p-2 w-8/12">
        <h1 className="text-lg font-semibold">{video.videoTitle}</h1>
        <p className="text-zinc-400 text-sm mb-4">
          {video.videoChanel} • {video.Views} views
        </p>
        <p className="text-zinc-400 text-sm ">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoHCard;
