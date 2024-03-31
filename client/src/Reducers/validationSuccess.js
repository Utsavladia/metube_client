const validationSuccess = (state = null, action) => {
  switch (action.type) {
    case "VALIDATION_SUCCESS":
      return {
        ...state, // Include the previous state
        data: action.payload, // Add the new data to the state
      };
    default:
      return state;
  }
};

export default validationSuccess;
