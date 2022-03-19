//reportData reducer

const initialState = {
  id: "",
  damValue: "",
};

const reportData = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATEID_DATA":
      return {
        ...state,
        id: action.payload,
      };
    case "UPDATEDAM_VALUE":
      return {
        ...state,
        damValue: action.payload,
      };
    default:
      return state;
  }
};

export default reportData;
