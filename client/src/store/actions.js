//I can specify the methods here, such as setID

const setData = (reportData) => {
  console.log(reportData, "setDataAction");
  return {
    type: "UPDATE_REPORT_DATA",
    payload: reportData,
  };
};

export default {
  setData,
};
