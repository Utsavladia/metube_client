import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { getAllLikes } from "./video";
import { gethistory } from "./history";

export const loginfailure = (erroemessage) => async (dispatch) => {
  dispatch({ type: "LOGIN_FAILURE", payload: erroemessage });
};

export const login = (authData) => async (dispatch) => {
  try {
    const { data } = await api.login(authData);
    console.log("user data we got in autha as : ", data);
    console.log("user id we got in auth as :", data?.result?._id);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(data));
    dispatch(getAllLikes(data?.result?._id));
    dispatch(gethistory(data?.result?._id));
  } catch (error) {
    console.log(error);
    const erroemessage = error.response?.data?.message;
    dispatch(loginfailure(erroemessage));
  }
};

export const registerNew = (registerData) => async (dispatch) => {
  try {
    const { data } = await api.register(registerData);
    console.log("daata we got on register ", data);
  } catch (error) {
    console.log(error);
  }
};

export const validateOtp = (validateData) => async (dispatch) => {
  try {
    const { data } = await api.validateOtp(validateData);
    console.log("wer got the data on validation as ", data?.message);
    dispatch({
      type: "VALIDATION_SUCCESS",
      payload: data?.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "VALIDATION_FAILURE",
      payload: error?.response.data?.message,
    });
  }
};
