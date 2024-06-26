import * as api from "../api";
import {getAllVideos} from "./getAllVideos.js";

export const uplaodVideo = (fileData, config) => async (dispatch) => {
  try {
    const { data } = await api.uplaodVideo(fileData, config);
    dispatch(getAllVideos());
    console.log("we got the data on upload videos as ", data);
  } catch (error) {
    alert(error.response.data.message);
  }
};
