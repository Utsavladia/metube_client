const profilePicReducer = (state = null, action) => {
  switch (action.type) {
    case "PROFILE_PIC":
      return action.payload;
    default:
      return state;
  }
};
export default profilePicReducer;
