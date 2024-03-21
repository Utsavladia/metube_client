import React, { useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import "./homestyles.css";

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

const Topicbar = () => {
  const topicRef = useRef(null);
  const scrollRight = () => {
    topicRef.current.scrollLeft += 300;
  };
  return (
    <div
      ref={topicRef}
      className="text-white fixed z-10 top-14  left-60 flex items-center overflow-x-auto gap-4 max-w-full right-8 py-4 bg-black scroll-smooth  noscrollbar"
    >
      {categories.map((item, index) => (
        <button
          key={index}
          className=" bg-zinc-800 hover:bg-zinc-600 font-semibold py-1 px-3 text-md rounded-lg"
        >
          {item}
        </button>
      ))}
      <div className="text-md fixed right-6 bg-black p-4 z-10 gretop ">
        <div className="hover:bg-zinc-600 p-3 rounded-full">
          <MdArrowForwardIos
            onClick={scrollRight}
            className="hover:bg-zinc-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Topicbar;
