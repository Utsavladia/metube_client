const historyReducer = (state = null, action) => {
  switch (action.type) {
    case "USER_HISTORY":
      return action.payload;
    default:
      return state;
  }
};

export default historyReducer;
