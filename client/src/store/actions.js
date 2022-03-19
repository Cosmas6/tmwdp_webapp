//I can specify the methods here, such as setID

const setID = (docDatatype) => {
  console.log(docDatatype, "setIdAction");
  return {
    type: "UPDATEID_DATA",
    payload: docDatatype,
  };
};

const setDamValue = (damValuetype) => {
  return {
    type: "UPDATEDAM_VALUE",
    payload: damValuetype,
  };
};



export default {
  setID,
  setDamValue,
};
