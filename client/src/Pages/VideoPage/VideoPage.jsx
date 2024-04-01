import React, { useEffect, useState } from "react";
import vdo from "../../assets/vdo.mp4";
import LikeSubscribeSave from "./LikeSubscribeSave";
import CommentSection from "./CommentSection";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { viewVideo } from "../../actions/getAllVideos";
import { history } from "../../actions/history.js";
import { subscribe } from "../../actions/video.js";

const video = {
  id: 1,
  title: "Introduction to React",
  src: vdo,
  thumbnail: "https://example.com/introduction-to-react-thumbnail.jpg",
  duration: "10:32",
  views: 1000,
  likes: 150,
  dislikes: 5,
  channel: "React Tutorials",
  channelAvatar: "https://example.com/react-tutorials-avatar.jpg",
  subscriber: "700k",
  uploadDate: "2024-03-18",
  description: "This is a example description we can see for the videos",
  tags: ["React", "Frontend", "JavaScript"],
};
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

const VideoPage = ({ toggleleftbar }) => {
  const { vid } = useParams();

  const currvid = useSelector((state) => state.videoReducer);
  const vv = currvid?.data?.filter((q) => q._id === vid)[0];
  console.log("video in the video page is ", vv);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.currentUserReducer);
  const allsubscribed = useSelector((state) => state.allLikesReducer);
  console.log("we got the reducer data os subscribed as ", allsubscribed);
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const videoview = () => {
    dispatch(viewVideo({ id: vid }));
  };
  useEffect(() => {
    videoview();
    toggleleftbar(false);
    return () => {
      toggleleftbar(true);
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      dispatch(
        history({
          userId: currentUser?.result?._id,
          history: vid,
        })
      );
    }
  }, [currentUser]);

  useEffect(() => {
    if (allsubscribed && allsubscribed?.subscribed) {
      const subindex = allsubscribed?.subscribed?.indexOf(vv.videoChanel);
      console.log("index of subsscribed channel ", subindex);
      if (subindex !== -1) {
        setSubscribed(true);
      } else {
        setSubscribed(false);
      }
    } else {
      setSubscribed(false);
    }
  }, [allsubscribed]);

  const handleSubscribe = () => {
    if (currentUser) {
      dispatch(
        subscribe({
          userId: currentUser?.result?._id,
          channelId: vv?.videoChanel,
        })
      );
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex w-full h-full py-20 px-8 text-white ">
      <div className="md:w-[65vw] flex flex-col ">
        {!vv.access && !subscribed ? (
          <div className="min-w-full h-[70vh] rounded-xl relative text-center flex flex-col justify-center bg-black">
            <h1 className="text-white text-3xl font-semibold mb-4 ">
              This video is restricted to Subscribers only !
            </h1>
            <h1 className="text-white text-xl">
              Please Subscribe This channel to view the video
            </h1>
          </div>
        ) : (
          <video
            src={`http://localhost:5500/${vv?.filePath}`}
            className="w-full max-h-[70vh] object-cover rounded-xl"
            controls
            //autoPlay
          />
        )}
        <h1 className="text-white font-bold text-xl my-2">{vv?.videoTitle}</h1>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-4 items-center mb-4">
            <img
              src="https://img6.arthub.ai/64c007f4-aa90.webp"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="flex flex-col">
              <span className="font-bold">{video?.channel}</span>
              <span className="text-zinc-500 text-sm font-semibold">
                {video.subscriber} subscribers
              </span>
            </span>
            <button
              className={`${
                subscribed ? "bg-zinc-800 text-white" : "bg-white text-black"
              }   h-10 rounded-full  font-semibold px-4 text-sm ml-6 `}
              onClick={handleSubscribe}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
          <LikeSubscribeSave video={vv} vid={vid} />
        </div>

        <div className="p-2 text-sm font-semibold bg-zinc-800 rounded-lg">
          <p className="">
            {vv?.Views} views {getElapsedTime(video.uploadDate)}
          </p>
          <p className=" mt-1">{video.description}</p>
          ...more
        </div>

        <CommentSection vid={vid} access={vv.access} subscribed={subscribed} />
      </div>
      <div className=""></div>
    </div>
  );
};

export default VideoPage;
