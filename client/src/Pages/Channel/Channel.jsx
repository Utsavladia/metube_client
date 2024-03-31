import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateChannel from "./createchannel";
import UploadPage from "./UploadPage.jsx";
import { getAllVideos } from "../../actions/getAllVideos.js";
import HomeVideos from "../Home/HomeVideos.jsx";

const Channel = () => {
  const dispatch = useDispatch();
  const [isupload, setIsUpload] = useState(false);
  const user = useSelector((state) => state.currentUserReducer);
  const profilePic = useSelector((state) => state.profilePicReducer);
  console.log(profilePic);
  console.log(
    "user id we got as from useSelector in Channel:",
    user?.result?._id
  );
  const userid = user?.result?._id;
  const isUserChannel = user?.result?.desc;
  const videos = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoChanel === userid)
    .reverse();

  console.log("we got the videos as ,", videos);

  const toggleUploadPanel = async () => {
    setIsUpload((prev) => !prev);
    if (isupload) {
      await dispatch(getAllVideos());
      console.log("getall videos called after close of uoload panel");
    }
  };

  const toggleChannel = () => {};

  return (
    <div className=" relative text-white">
      {isUserChannel ? (
        <div className="pl-60 pt-20 text-white">
          <div className="flex gap-10 pl-10 pt-5 ">
            <img
              src={profilePic?.image}
              className="w-24 h-24 rounded-full"
              alt="profile pic"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{profilePic?.name}</h1>
              <p className="text-zinc-300">{user?.result.email}</p>
              <p className="text-zinc-300 text-sm ">{user?.result.desc}</p>
            </div>
            <div className="flex flex-col gap-4">
              <button className="px-3 py-2 text-sm hover:bg-zinc-600 bg-zinc-800 rounded-full">
                Edit Channel
              </button>
              <button
                onClick={toggleUploadPanel}
                className="px-3  hover:bg-blue-600  py-2 text-sm bg-blue-500 rounded-full"
              >
                Upload Video
              </button>
            </div>
          </div>
          <hr className="opacity-30 mt-10 pt-2" />
          <div></div>
        </div>
      ) : (
        <CreateChannel />
      )}
      {isupload && <UploadPage toggleUploadPanel={toggleUploadPanel} />}

      <div className="relative mb-10">
        <h1 className="absolute top-16 left-60 text-white font-bold text-2xl">
          Videos
        </h1>

        <HomeVideos videos={videos} />
      </div>
    </div>
  );
};

export default Channel;
