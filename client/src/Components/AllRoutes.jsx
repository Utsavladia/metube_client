import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Library from "../Pages/Library/Library";
import History from "../Pages/History/History";
import WatchLater from "../Pages/Watch Later/WatchLater";
import LikedVideos from "../Pages/LikedVideos/LikedVideos";
import Channel from "../Pages/Channel/Channel";
import VideoPage from "../Pages/VideoPage/VideoPage";
import LoginPanel from "./LoginPanel";

const AllRoutes = ({ leftbar }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/history" element={<History />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/likedvideos" element={<LikedVideos />} />
      <Route path="/channel" element={<Channel />} />
      <Route
        path="/videopage/:vid"
        enter
        element={<VideoPage toggleleftbar={leftbar} />}
      />
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
};

export default AllRoutes;
