import * as api from "../api";

export const history = (historyData) => async (dispatch) => {
  const { userId, history } = historyData;
  console.log("history data in action ", historyData);
  try {
    const { data } = await api.history(historyData);
    dispatch(gethistory(userId));
  } catch (error) {
    console.log(error);
  }
};

export const gethistory = (userId) => async (dispatch) => {
  try {
    const { data } = await api.gethistory(userId);
    console.log(data);
    dispatch({ type: "USER_HISTORY", payload: data });
  } catch (error) {
    console.log(error);
  }
};
