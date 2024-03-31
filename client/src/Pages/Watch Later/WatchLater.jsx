import React from "react";
import HWL from "../History/HWL";
import vdo from "../../assets/vdo.mp4";
import { useDispatch, useSelector } from "react-redux";

// const videos = [
//   {
//     id: 1,
//     title: "Introduction to React",
//     src: vdo,
//     thumbnail: "https://example.com/introduction-to-react-thumbnail.jpg",
//     duration: "10:32",
//     views: 1000,
//     likes: 150,
//     dislikes: 5,
//     channel: "React Tutorials",
//     channelAvatar: "https://example.com/react-tutorials-avatar.jpg",
//     uploadDate: "2024-03-18",
//     description: "Learn the basics of React in this introductory video.",
//     tags: ["React", "Frontend", "JavaScript"],
//   },
//   {
//     id: 1,
//     title: "Introduction to React",
//     src: vdo,
//     thumbnail: "https://example.com/introduction-to-react-thumbnail.jpg",
//     duration: "10:32",
//     views: 1000,
//     likes: 150,
//     dislikes: 5,
//     channel: "React Tutorials",
//     channelAvatar: "https://example.com/react-tutorials-avatar.jpg",
//     uploadDate: "2024-03-18",
//     description: "Learn the basics of React in this introductory video.",
//     tags: ["React", "Frontend", "JavaScript"],
//   },
//   {
//     id: 1,
//     title: "Introduction to React",
//     src: vdo,
//     thumbnail: "https://example.com/introduction-to-react-thumbnail.jpg",
//     duration: "10:32",
//     views: 1000,
//     likes: 150,
//     dislikes: 5,
//     channel: "React Tutorials",
//     channelAvatar: "https://example.com/react-tutorials-avatar.jpg",
//     uploadDate: "2024-03-18",
//     description: "Learn the basics of React in this introductory video.",
//     tags: ["React", "Frontend", "JavaScript"],
//   },
//   {
//     id: 1,
//     title: "Introduction to React",
//     src: vdo,
//     thumbnail: "https://example.com/introduction-to-react-thumbnail.jpg",
//     duration: "10:32",
//     views: 1000,
//     likes: 150,
//     dislikes: 5,
//     channel: "React Tutorials",
//     channelAvatar: "https://example.com/react-tutorials-avatar.jpg",
//     uploadDate: "2024-03-18",
//     description: "Learn the basics of React in this introductory video.",
//     tags: ["React", "Frontend", "JavaScript"],
//   },
//   {
//     id: 1,
//     title: "Introduction to React",
//     src: vdo,
//     thumbnail: "https://example.com/introduction-to-react-thumbnail.jpg",
//     duration: "10:32",
//     views: 1000,
//     likes: 150,
//     dislikes: 5,
//     channel: "React Tutorials",
//     channelAvatar: "https://example.com/react-tutorials-avatar.jpg",
//     uploadDate: "2024-03-18",
//     description: "Learn the basics of React in this introductory video.",
//     tags: ["React", "Frontend", "JavaScript"],
//   },
//   {
//     id: 2,
//     title: "Advanced CSS Techniques",
//     src: vdo,
//     thumbnail: "https://example.com/advanced-css-techniques-thumbnail.jpg",
//     duration: "15:45",
//     views: 800,
//     likes: 120,
//     dislikes: 8,
//     channel: "CSS Masters",
//     channelAvatar: "https://example.com/css-masters-avatar.jpg",
//     uploadDate: "2024-03-17",
//     description: "Explore advanced CSS techniques for modern web development.",
//     tags: ["CSS", "Web Development"],
//   },
//   // Add more videos as needed
// ];
const WatchLater = () => {
  const saved = useSelector((state) => state.watchLaterReducer);
  const allvideos = useSelector((state) => state.videoReducer);
  console.log("watchlater vides are in id ", saved?.data);
  console.log("all videos are", allvideos);
  const watchlaterids = saved?.data?.map((m) => m.videoId);

  const watchlater = allvideos?.data?.filter((video) =>
    watchlaterids.includes(video._id)
  );
  const currentUser = useSelector((state) => state.currentUserReducer);
  const currentUserid = currentUser?.result?._id;
  const userWatchLater = watchlater?.filter((w) => w?._id === currentUserid);

  console.log("watch later videos are ", userWatchLater);
  return (
    <div className="w-full h-full">
      <HWL page={"Watch Later"} videoList={userWatchLater} />
    </div>
  );
};

export default WatchLater;
