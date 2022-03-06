//I can specify the methods here, such as setID

const setID = (docDatatype) => {
  console.log(docDatatype, "setIdAction");
  return {
    type: "UPDATEID_DATA",
    payload: docDatatype,
  };
};

export default {
  setID,
};
