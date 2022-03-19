//I can specify the methods here, such as setID

const setID = (docDatatype) => {
  console.log(docDatatype, "setIdAction");
  return {
    type: "UPDATE_ID_DATA",
    payload: docDatatype,
  };
};

const setDamValue = (damValuetype) => {
  return {
    type: "UPDATE_DAM_VALUE",
    payload: damValuetype,
  };
};

const setMatValue = (matValuetype) => {
  return {
    type: "UPDATE_MAT_VALUE",
    payload: matValuetype,
  };
};

const setTunValue = (tunValuetype) => {
  return {
    type: "UPDATE_TUN_VALUE",
    payload: tunValuetype,
  };
};

const setSpilValue = (spilValuetype) => {
  return {
    type: "UPDATE_SPIL_VALUE",
    payload: spilValuetype,
  };
};

const setSurValue = (surValuetype) => {
  return {
    type: "UPDATE_SUR_VALUE",
    payload: surValuetype,
  };
};

const setAdmValue = (admValuetype) => {
  return {
    type: "UPDATE_ADM_VALUE",
    payload: admValuetype,
  };
};

export default {
  setID,
  setDamValue,
  setMatValue,
  setTunValue,
  setSpilValue,
  setSurValue,
  setAdmValue,
};
