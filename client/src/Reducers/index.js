import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import profilePicReducer from "./profilePic";
import videoReducer from "./video";
import watchLaterReducer from "./watchLater";
import allLikesReducer from "./likes";
import historyReducer from "./history";

export default combineReducers({
  authReducer,
  currentUserReducer,
  profilePicReducer,
  videoReducer,
  watchLaterReducer,
  allLikesReducer,
  historyReducer,
});
