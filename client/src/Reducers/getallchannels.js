const channelsReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_ALL_CHANNELS":
      return action.payload;
    default:
      return state;
  }
};

export default channelsReducer;
