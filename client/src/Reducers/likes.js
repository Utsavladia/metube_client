const allLikesReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_ALL_LIKES":
      return action.payload;
    default:
      return state;
  }
};

export default allLikesReducer;
