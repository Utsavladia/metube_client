import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Library from "../Pages/Library/Library";
import History from "../Pages/History/History";
import WatchLater from "../Pages/Watch Later/WatchLater";
import LikedVideos from "../Pages/LikedVideos/LikedVideos";
import Channel from "../Pages/Channel/Channel";
import VideoPage from "../Pages/VideoPage/VideoPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/library" Component={Library} />
      <Route path="/history" Component={History} />
      <Route path="/watchlater" Component={WatchLater} />
      <Route path="/likedvideos" Component={LikedVideos} />
      <Route path="/channel" Component={Channel} />
      <Route path="/videopage/:vid" Component={VideoPage} />
    </Routes>
  );
};

export default AllRoutes;
