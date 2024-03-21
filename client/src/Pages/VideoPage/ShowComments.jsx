import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ShowComment = ({ comment, index, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [editedText, seteditedText] = useState(comment.comment);
  const [options, setoptions] = useState(false);

  const handleOption = () => {
    setoptions(!options);
  };

  const handleEditOption = () => {
    setEdit(true);
  };
  const handleCancelEdit = () => {
    seteditedText(comment.comment);
    setEdit(false);
    setoptions(false);
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    onEdit(index, editedText);
    setoptions(false);
  };

  return (
    <div className="w-full text-white">
      {edit ? (
        <form
          className="flex pb-12 gap-4 py-6 relative"
          onSubmit={handleCommentSubmit}
        >
          <img
            src="https://img6.arthub.ai/64c007f4-aa90.webp"
            className="w-10 h-10 rounded-full "
          />
          <input
            value={editedText}
            onChange={(e) => seteditedText(e.target.value)}
            placeholder="Add a comment..."
            className=" bg-transparent text-sm outline-none w-full border-b-[1px] active:border-b-2 "
          />

          <div className=" absolute bottom-0 gap-4 flex items-center right-4">
            <button onClick={handleCancelEdit}>Cancle</button>
            <button
              type="submit"
              className={` rounded-2xl ${
                editedText.length > 0 ? "bg-blue-500" : "bg-zinc-800"
              } px-3 py-2 text-sm `}
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="flex gap-4 py-6 w-full">
          <img
            src={comment.dp}
            className="w-10 h-10 rounded-full"
            alt="profile"
          />
          <div className="w-full">
            <h1 className="font-semibold text-sm">{comment.user}</h1>
            <p className="text-sm">{comment.comment}</p>

            <div className="relative w-full">
              <div
                className="absolute right-4 p-2 bottom-0 hover:bg-zinc-800 rounded-full"
                onClick={handleOption}
              >
                <BsThreeDotsVertical />
              </div>
              {options && (
                <div className="flex flex-col text-xs absolute right-12 -top-6  bg-zinc-900 rounded-lg ">
                  <button
                    onClick={handleEditOption}
                    className="text-blue-500  bg-zinc-900 px-4 py-2 hover:bg-zinc-700 rounded-lg"
                  >
                    Edit
                  </button>
                  <button className="text-red-400 bg-zinc-900 px-4 py-2 hover:bg-zinc-700 rounded-lg">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowComment;
