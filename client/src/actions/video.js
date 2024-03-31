import * as api from "../api";

export const userLiked = (likedData) => async (dispatch) => {
  try {
    const { userId, videoId } = likedData;
    const { data } = await api.userLiked(likedData);
    console.log("data we got on user liked from backend api as ", data);
    await dispatch(getAllLikes(userId));
  } catch (error) {
    console.log(error);
  }
};

export const getAllLikes = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getAllLikes(userId);
    console.log("data we got on get alll likes", data);
    dispatch({ type: "FETCH_ALL_LIKES", payload: data });
  } catch (error) {
    console.log(error);
  }
};
