import React from "react";
import VideoCard from "../../Components/VideoCard";

const HomeVideos = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 xl:grid-col-4 gap-4 text-white pt-32 ml-60 pr-10">
      {videos?.map((vid) => (
        <VideoCard video={vid} />
      ))}
    </div>
  );
};

export default HomeVideos;
