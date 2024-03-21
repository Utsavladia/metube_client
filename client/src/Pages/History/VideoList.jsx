import React from "react";
import VideoHCard from "./VideoHCard";

const VideoList = ({ videos }) => {
  return (
    <div className="w-full flex flex-col">
      {videos.map((video, index) => (
        <VideoHCard video={video} />
      ))}
    </div>
  );
};

export default VideoList;
