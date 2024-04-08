import * as api from "../api";

export const getAllVideos = () => async (dispatch) => {
  try {
    const { data } = await api.getAllVideos();
    console.log("we got the data as get all videos as :", data);
    dispatch({ type: "FETCH_ALL_VIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideo = (videoData) => async (dispatch) => {
  console.log(videoData);
  try {
    const { data } = await api.deleteVideo(videoData);
    console.log(data);
    dispatch(getAllVideos());
  } catch (error) {
    console.log(error);
  }
};

export const changeAccess = (videoData) => async (dispatch) => {
  console.log(videoData);
  try {
    const { data } = await api.changeaccess(videoData);
    console.log(data);
    dispatch(getAllVideos());
  } catch (error) {
    console.log(error);
  }
};

export const viewVideo = (videData) => async (dispatch) => {
  try {
    const { id } = videData;
    console.log(id);
    const { data } = await api.viewVideo(id);
    dispatch({ type: "POST_VIEWS", data });
    dispatch(getAllVideos());
  } catch (error) {
    console.log(error);
  }
};

export const likeVideo = (LikeData) => async (dispatch) => {
  try {
    const { id, Like } = LikeData;
    const { data } = await api.likeVideo(id, Like);
    console.log("data we got on like video: ", data);
    dispatch({ type: "POST_LIKE", payload: data });
    dispatch(getAllVideos());
  } catch (error) {
    console.log(error);
  }
};

export const getAllWatchLater = () => async (dispatch) => {
  try {
    const { data } = await api.getWatchLater();
    console.log(data);
    dispatch({ type: "FETCH_ALL_WATCHLATER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const savevideo = (VideoData) => async (dispatch) => {
  try {
    console.log(VideoData);
    const { data } = await api.saveVideo(VideoData);
    dispatch({ type: "POST_WATCHLATER", payload: data });
    dispatch(getAllWatchLater());
  } catch (error) {
    console.log(error);
  }
};
