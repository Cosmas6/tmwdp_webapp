
const initialState = {
  id: "",
  damValue: "",
  matValue: "",
  tunValue: "",
  spilValue: "",
  surValue: "",
  admValue: "",
  damSection: "",
};

const reportData = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ID_DATA":
      return {
        ...state,
        id: action.payload,
      };
    case "UPDATE_DAM_VALUE":
      return {
        ...state,
        damValue: action.payload,
      };
    case "UPDATE_MAT_VALUE":
      return {
        ...state,
        matValue: action.payload,
      };
    case "UPDATE_TUN_VALUE":
      return {
        ...state,
        tunValue: action.payload,
      };
    case "UPDATE_SPIL_VALUE":
      return {
        ...state,
        spilValue: action.payload,
      };
    case "UPDATE_SUR_VALUE":
      return {
        ...state,
        surValue: action.payload,
      };
    case "UPDATE_ADM_VALUE":
      return {
        ...state,
        admValue: action.payload,
      };
    case "UPDATE_DAM_SECTION":
      return {
        ...state,
        damSection: action.payload,
      };
    default:
      return state;
  }
};

export default reportData;
