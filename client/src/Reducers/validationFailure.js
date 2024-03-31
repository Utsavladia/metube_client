const validationFailure = (state = null, action) => {
  switch (action.type) {
    case "VALIDATION_FAILURE":
      return action.payload;
    default:
      return state;
  }
};
export default validationFailure;
