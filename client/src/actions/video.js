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

export const getallchannels = () => async (dispatch) => {
  try {
    const { data } = await api.getallchannels();
    console.log("we got the data as get all channels as :", data);
    dispatch({ type: "FETCH_ALL_CHANNELS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const subscribe = (subsData) => async (dispatch) => {
  try {
    const { data } = await api.subscribe(subsData);
    const { userId, channelId } = subsData;
    console.log("data we got on subscribe form api ", data);
    await dispatch(getAllLikes(userId));
    await dispatch(getallchannels());
  } catch (error) {
    console.log(error);
  }
};
