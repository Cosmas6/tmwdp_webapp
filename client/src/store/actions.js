//I can specify the methods here, such as setID

const setDate = (reportDate) => {
  console.log(reportDate, "setDateAction");
  return {
    type: "UPDATE_REPORT_DATE",
    payload: reportDate,
  };
};

export default {
  setDate,
};
