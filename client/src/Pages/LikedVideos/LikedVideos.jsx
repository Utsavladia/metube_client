import React from "react";
import HWL from "../History/HWL";
import vdo from "../../assets/vdo.mp4";

const videos = [
  {
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
    uploadDate: "2024-03-18",
    description: "Learn the basics of React in this introductory video.",
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
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
    uploadDate: "2024-03-18",
    description: "Learn the basics of React in this introductory video.",
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
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
    uploadDate: "2024-03-18",
    description: "Learn the basics of React in this introductory video.",
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
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
    uploadDate: "2024-03-18",
    description: "Learn the basics of React in this introductory video.",
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
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
    uploadDate: "2024-03-18",
    description: "Learn the basics of React in this introductory video.",
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    src: vdo,
    thumbnail: "https://example.com/advanced-css-techniques-thumbnail.jpg",
    duration: "15:45",
    views: 800,
    likes: 120,
    dislikes: 8,
    channel: "CSS Masters",
    channelAvatar: "https://example.com/css-masters-avatar.jpg",
    uploadDate: "2024-03-17",
    description: "Explore advanced CSS techniques for modern web development.",
    tags: ["CSS", "Web Development"],
  },
  // Add more videos as needed
];

const LikedVideos = () => {
  return (
    <div>
      <HWL page={"Liked Videos"} videoList={videos} />
    </div>
  );
};

export default LikedVideos;
