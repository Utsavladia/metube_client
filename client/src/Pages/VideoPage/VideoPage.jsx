import React from "react";
import vdo from "../../assets/vdo.mp4";
import LikeSubscribeSave from "./LikeSubscribeSave";
import CommentSection from "./CommentSection";

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
  description: "Learn the basics of React in this introductory video.",
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

const VideoPage = () => {
  return (
    <div className="flex w-full h-full py-20 px-8 text-white">
      <div className="md:w-[65vw] flex flex-col ">
        <video
          src={video.src}
          className="w-full max-h-[70vh] object-cover rounded-xl"
          controls
          //autoPlay
        />
        <h1 className="text-white font-bold text-xl my-2">{video.title}</h1>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-4 items-center mb-4">
            <img
              src="https://img6.arthub.ai/64c007f4-aa90.webp"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="flex flex-col">
              <span className="font-bold">{video.channel}</span>
              <span className="text-zinc-500 text-sm font-semibold">
                {video.subscriber} subscribers
              </span>
            </span>
            <button className="bg-white h-10 rounded-full text-black font-semibold px-4 text-sm ml-6">
              Subscribe
            </button>
          </div>
          <LikeSubscribeSave video={video} />
        </div>

        <div className="p-2 text-sm font-semibold bg-zinc-800 rounded-lg">
          <p className="">
            {video.views} views {getElapsedTime(video.uploadDate)}
          </p>
          <p className=" mt-1">{video.description}</p>
          ...more
        </div>

        <CommentSection />
      </div>
      <div className=""></div>
    </div>
  );
};

export default VideoPage;
