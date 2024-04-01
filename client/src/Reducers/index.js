import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import profilePicReducer from "./profilePic";
import videoReducer from "./video";
import watchLaterReducer from "./watchLater";
import allLikesReducer from "./likes";
import historyReducer from "./history";
import loginFailure from "./loginfailure";
import validationFailure from "./validationFailure";
import validationSuccess from "./validationSuccess";
import commentReducer from "./comments";

export default combineReducers({
  authReducer,
  currentUserReducer,
  profilePicReducer,
  videoReducer,
  watchLaterReducer,
  allLikesReducer,
  historyReducer,
  loginFailure,
  validationFailure,
  validationSuccess,
  commentReducer,
});
