import React from "react";

const VideoHCard = ({ video }) => {
  return (
    <div className="my-2 flex gap-3 overflow-hidden">
      <video className="w-72 h-44 rounded-xl" src={video.src} />
      <div className="flex flex-col p-2">
        <h1 className="text-lg font-semibold">{video.title}</h1>
        <p className="text-zinc-400 text-sm mb-4">
          {video.channel} • {video.views} views
        </p>
        <p className="text-zinc-400 text-sm ">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoHCard;
