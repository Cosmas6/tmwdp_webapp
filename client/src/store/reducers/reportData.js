const initialState = {
  date: "",
};

const reportData = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_REPORT_DATE":
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default reportData;
