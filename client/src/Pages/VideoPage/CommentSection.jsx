import React, { useState, useEffect } from "react";
import ShowComment from "./ShowComments";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { commentAction, getAllComments } from "../../actions/comments";
const CommentSection = ({ vid, access, subscribed }) => {
  const [comment, setcomment] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUserReducer);
  console.log(currentUser);
  const userId = currentUser?.result?._id;
  const name = currentUser?.result?.email;
  const allcomments = useSelector((state) => state.commentReducer);
  console.log("all comment we got in video page as ", allcomments);
  useEffect(() => {
    dispatch(getAllComments(vid));
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      navigate("/login");
    } else {
      dispatch(
        commentAction({
          videoId: vid,
          userId: userId,
          comment: comment,
          name: name,
        })
      );
      // dispatch(comment({ videoId: vid, userId: userId, comment: comment }));
    }

    setcomment("");
    setInputActive(false);
  };

  // UI actions
  const handleinputclick = () => {
    setInputActive(true);
  };
  const handlecancleclick = () => {
    setInputActive(false);
    setcomment("");
  };
  const handleCommentEdit = (index, editedComment) => {
    const updatedComments = [...comments];
    updatedComments[index].comment = editedComment;
    setComments(updatedComments);
  };

  return (
    <div className="w-full  text-white  pr-4">
      <h1 className="text-xl font-bold mt-4 mb-6">Comments</h1>
      {!access && !subscribed ? (
        <div className="flex flex-col justify-center items-top border border-zinc-800 px-4 py-4 w-full rounded-lg">
          <h1 className="text-xl">
            Commenting is Restricted to subscribers only !
          </h1>
          <h1>Please Subscribe this channel to comment</h1>
        </div>
      ) : (
        <form
          className="flex pb-12 gap-4  relative"
          onSubmit={handleCommentSubmit}
        >
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
                disabled={comment.length === 0}
                className={` rounded-2xl ${
                  comment.length > 0 ? "bg-blue-500" : "bg-zinc-800"
                } px-3 py-2 text-sm `}
              >
                Comment
              </button>
            </div>
          )}
        </form>
      )}

      {allcomments?.map((comment, index) => (
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
