import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  console.log(video);
  const uploadDate = video.createdAt;
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
  return (
    <div className="text-white flex flex-col my-4">
      <Link to={`/videopage/${video?._id}`} className="relative">
        <video
          src={`https://metube-server-j5lh.onrender.com/${video.filePath}`}
          // src={`http://localhost:5173/${video.filePath}`}
          className="rounded-xl"
        />
        {/* <p className="absolute right-2 bottom-1 bg-black font-semibold text-sm">
          {video.duration}
        </p> */}
      </Link>
      <div className="flex gap-3 pt-3">
        <img
          src="https://img6.arthub.ai/64c007f4-aa90.webp"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">{video.videoTitle}</h1>
          {/* <p className="text-zinc-500 font-semibold">{video.channel}</p> */}
          <span className="text-sm font-semibold text-zinc-500">
            {video.Views} views • {getElapsedTime(uploadDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
