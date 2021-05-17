const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case "DATA_UPDATE":
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
