import React from "react";
import VideoList from "./VideoList";

const HWL = ({ page, videoList }) => {
  return (
    <div className="text-white pl-72 pt-24 ">
      <h1 className="text-3xl font-bold w-3/5 border-b-2 pb-10  border-zinc-700">
        {page}
      </h1>
      <div className="mt-6 w-3/5">
        <VideoList videos={videoList} />
      </div>
    </div>
  );
};

export default HWL;
