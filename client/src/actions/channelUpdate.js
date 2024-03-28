import * as api from "../api";
import { setCurrentUser } from "./currentUser";

export const updateChannel = (id, updatedData) => async (dispatch) => {
  try {
    const { data } = await api.updateChannel(id, updatedData);
    console.log("Data from backend we got on updatechannel", data);
    dispatch(setCurrentUser(data));
    // dispatch({ type: "UPDATE_DATA", payload: data });
  } catch (error) {
    console.log("error calling the updatchannel action");
    console.log(error);
  }
};
