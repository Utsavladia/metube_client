import React from "react";
import VideoList from "./VideoList";

const HWL = ({ page, videoList }) => {
  return (
    <div className="text-white pl-64 pt-20 ">
      <h1 className="text-3xl font-bold w-full">{page}</h1>
      <div className="mt-6 w-3/5">
        <VideoList videos={videoList} />
      </div>
    </div>
  );
};

export default HWL;
