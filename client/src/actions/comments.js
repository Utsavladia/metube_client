import * as api from "../api";

export const commentAction = (commentData) => async (dispatch) => {
  try {
    const { videoId } = commentData;
    console.log("vid in the action", videoId);
    console.log("we called commnet action with data ", commentData);
    const { data } = await api.commentApi(commentData);
    console.log(data);
    dispatch(getAllComments(videoId));
  } catch (error) {
    console.log(error);
  }
};

export const getAllComments = (vid) => async (dispatch) => {
  try {
    console.log(vid, "for getting comments");
    const { data } = await api.getcomments(vid);
    dispatch({ type: "GET_ALL_COMMENTS", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
