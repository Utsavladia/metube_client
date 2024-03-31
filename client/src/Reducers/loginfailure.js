const loginFailure = (state = null, action) => {
  switch (action.type) {
    case "LOGIN_FAILURE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default loginFailure;
