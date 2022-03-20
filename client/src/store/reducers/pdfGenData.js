//reportData reducer

const initialState = {
  pdfLink: "",
};

const pdfGenData = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PDF_VALUE":
      return {
        ...state,
        pdfLink: action.payload,
      };
    default:
      return state;
  }
};

export default pdfGenData;
