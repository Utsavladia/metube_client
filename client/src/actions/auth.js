import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { getAllLikes } from "./video";
import { gethistory } from "./history";

export const login = (authData) => async (dispatch) => {
  try {
    const { data } = await api.login(authData);
    console.log("user data we got in autha as : ", data);
    console.log("user id we got in auth as :", data.result._id);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(data));
    dispatch(getAllLikes(data?.result?._id));
    dispatch(gethistory(data?.result?._id));
  } catch (error) {
    alert(error);
  }
};
