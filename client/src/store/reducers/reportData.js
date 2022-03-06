//reportData reducer

import Actions from "../actions";

const initialState = {
  id: "",
};

const reportData = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATEID_DATA":
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default reportData;
