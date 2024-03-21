import React, { useState } from "react";
import ShowComment from "./ShowComments";

const CommentSection = () => {
  const [comment, setcomment] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const [comments, setComments] = useState([]);

  const handleinputclick = () => {
    setInputActive(true);
  };

  const handlecancleclick = () => {
    setInputActive(false);
    setcomment("");
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const c = {
      comment: comment,
      user: "UserName",
      dp: "https://img6.arthub.ai/64c007f4-aa90.webp",
    };
    setComments([...comments, c]);
    setcomment("");
    setInputActive(false);
  };

  const handleCommentEdit = (index, editedComment) => {
    const updatedComments = [...comments];
    updatedComments[index].comment = editedComment;
    setComments(updatedComments);
  };

  return (
    <div className="w-full  text-white  pr-4">
      <h1 className="text-xl font-bold mt-4 mb-6">Comments</h1>
      <form className="flex pb-12 gap-4 relative">
        <img
          src="https://img6.arthub.ai/64c007f4-aa90.webp"
          className="w-10 h-10 rounded-full "
        />
        <input
          value={comment}
          onClick={handleinputclick}
          onChange={(e) => setcomment(e.target.value)}
          placeholder="Add a comment..."
          className=" bg-transparent text-sm outline-none w-full border-b-[1px] active:border-b-2 "
        />
        {inputActive && (
          <div className=" absolute bottom-0 gap-4 flex items-center right-4">
            <button onClick={handlecancleclick}>Cancle</button>
            <button
              type="submit"
              onClick={handleCommentSubmit}
              className={` rounded-2xl ${
                comment.length > 0 ? "bg-blue-500" : "bg-zinc-800"
              } px-3 py-2 text-sm `}
            >
              Comment
            </button>
          </div>
        )}
      </form>

      {comments.map((comment, index) => (
        <ShowComment
          index={index}
          key={index}
          onEdit={handleCommentEdit}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default CommentSection;
