const commentReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_ALL_COMMENTS":
      return action.payload;
    default:
      return state;
  }
};
export default commentReducer;
