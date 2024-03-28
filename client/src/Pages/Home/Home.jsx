import React, { useEffect } from "react";
import HomeSideBar from "../../Components/HomeSideBar";
import vdo from "../../assets/vdo.mp4";
import HomeVideos from "./HomeVideos";
import Topicbar from "./Topicbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../actions/getAllVideos";

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

const categories = [
  "Technology",
  "Science",
  "Health",
  "Education",
  "Art",
  "Music",
  "Movies",
  "Books",
  "Sports",
  "Food",
  "Travel",
  "Fashion",
  "Business",
  "Finance",
  "History",
  "Politics",
  "Environment",
  "Culture",
  "Fitness",
  "Lifestyle",
];

const Home = () => {
  const videos = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q)
    .reverse();
  console.log("videos we got in home page", videos);

  return (
    <div className="text-white">
      <HomeSideBar />
      <Topicbar />
      <HomeVideos videos={videos} />
    </div>
  );
};

export default Home;
