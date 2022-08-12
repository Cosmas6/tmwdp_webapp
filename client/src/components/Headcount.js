import React, { useState } from "react";
import { doc, runTransaction } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Actions from "../store/actions";
import db from "../../firebase.config.js";
import "../stylesheets/headcount.scss";

const Headcount = () => {
  const [damStateVal, setdamStateVal] = useState(0);
  const [matStateVal, setMatStateVal] = useState(0);
  const [tunStateVal, setTunStateVal] = useState(0);
  const [spilStateVal, setSpilStateVal] = useState(0);
  const [surStateVal, setSurStateVal] = useState(0);
  const [admStateVal, setAdmStateVal] = useState(0);

  const dispatch = useDispatch();
  const DeptDocRef = doc(db, "headcounts", "departments");

  const updateDamFn = async () => {
    // Create a reference to the SF doc.

    try {
      const newPopulation = await runTransaction(db, async (transaction) => {
        const DeptDoc = await transaction.get(DeptDocRef);
        if (!DeptDoc.exists()) {
          throw "Document does not exist!";
        }
        console.log("Dam value: " + damStateVal);
        const newPop = DeptDoc.data().damTally + damStateVal;

        transaction.update(DeptDocRef, { damTally: newPop });
        return newPop;
      });
      dispatch(Actions.setDamValue(newPopulation));
      console.log("Population increased to ", newPopulation);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  };

  const updateMatFn = async () => {
    // Create a reference to the SF doc.

    try {
      const newPopulation = await runTransaction(db, async (transaction) => {
        const DeptDoc = await transaction.get(DeptDocRef);
        if (!DeptDoc.exists()) {
          throw "Document does not exist!";
        }
        console.log("Dam value: " + matStateVal);
        const newPop = DeptDoc.data().materialTally + matStateVal;

        transaction.update(DeptDocRef, { materialTally: newPop });
        return newPop;
      });
      dispatch(Actions.setMatValue(newPopulation));
      console.log("Population increased to ", newPopulation);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  };

  const updateTunFn = async () => {
    // Create a reference to the SF doc.

    try {
      const newPopulation = await runTransaction(db, async (transaction) => {
        const DeptDoc = await transaction.get(DeptDocRef);
        if (!DeptDoc.exists()) {
          throw "Document does not exist!";
        }
        console.log("Dam value: " + tunStateVal);
        const newPop = DeptDoc.data().tunnelTally + tunStateVal;

        transaction.update(DeptDocRef, { tunnelTally: newPop });
        return newPop;
      });
      dispatch(Actions.setTunValue(newPopulation));
      console.log("Population increased to ", newPopulation);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  };

  const updateSpilFn = async () => {
    // Create a reference to the SF doc.

    try {
      const newPopulation = await runTransaction(db, async (transaction) => {
        const DeptDoc = await transaction.get(DeptDocRef);
        if (!DeptDoc.exists()) {
          throw "Document does not exist!";
        }
        console.log("Dam value: " + spilStateVal);
        const newPop = DeptDoc.data().spillwayTally + spilStateVal;

        transaction.update(DeptDocRef, { spillwayTally: newPop });
        return newPop;
      });
      dispatch(Actions.setSpilValue(newPopulation));
      console.log("Population increased to ", newPopulation);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  };

  const updateSurFn = async () => {
    // Create a reference to the SF doc.

    try {
      const newPopulation = await runTransaction(db, async (transaction) => {
        const DeptDoc = await transaction.get(DeptDocRef);
        if (!DeptDoc.exists()) {
          throw "Document does not exist!";
        }
        console.log("Dam value: " + surStateVal);
        const newPop = DeptDoc.data().surveyTally + surStateVal;

        transaction.update(DeptDocRef, { surveyTally: newPop });
        return newPop;
      });
      dispatch(Actions.setSurValue(newPopulation));
      console.log("Population increased to ", newPopulation);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  };

  const updateAdmFn = async () => {
    // Create a reference to the SF doc.

    try {
      const newPopulation = await runTransaction(db, async (transaction) => {
        const DeptDoc = await transaction.get(DeptDocRef);
        if (!DeptDoc.exists()) {
          throw "Document does not exist!";
        }
        console.log("Dam value: " + admStateVal);
        const newPop = DeptDoc.data().adminTally + admStateVal;

        transaction.update(DeptDocRef, { adminTally: newPop });
        return newPop;
      });
      dispatch(Actions.setAdmValue(newPopulation));
      console.log("Population increased to ", newPopulation);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  };

  const damData = useSelector((state) => state.repData);
  const matData = useSelector((state) => state.repData);
  const tunData = useSelector((state) => state.repData);
  const spilData = useSelector((state) => state.repData);
  const surData = useSelector((state) => state.repData);
  const admData = useSelector((state) => state.repData);

  return (
    <div className="Headcount_Container">
      {/* <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}> */}
      <h1 className="title">
        Headcount <br /> No. of people in:
      </h1>

      <div className="dam-headcount headcount-flex">
        <h1>Dam Section</h1>
        <h1>{damData.damValue}</h1>
        <div className="textfield">
          <TextField
            id="outlined-number"
            label="DAMS"
            type="number"
            value={damStateVal}
            onChange={(e) => setdamStateVal(e.target.valueAsNumber)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <button className="Add_Button" onClick={updateDamFn}>
          Add
        </button>
      </div>

      <div className="material-headcount headcount-flex">
        <h1>Material Section</h1>
        <h1>{matData.matValue}</h1>
        <div className="textfield">
          <TextField
            id="outlined-number"
            label="MATERIALS"
            type="number"
            value={matStateVal}
            onChange={(e) => setMatStateVal(e.target.valueAsNumber)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <button className="Add_Button" onClick={updateMatFn}>
          Add
        </button>
      </div>

      <div className="tunnel-headcount headcount-flex">
        <h1>Tunnel Section</h1>
        <h1>{tunData.tunValue}</h1>
        <div className="textfield">
          <TextField
            id="outlined-number"
            label="TUNNELS"
            type="number"
            value={tunStateVal}
            onChange={(e) => setTunStateVal(e.target.valueAsNumber)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <button className="Add_Button" onClick={updateTunFn}>
          Add
        </button>
      </div>

      <div className="spillway-headcount headcount-flex">
        <h1>Spillway Section</h1>
        <h1>{spilData.spilValue}</h1>
        <div className="textfield">
          <TextField
            id="outlined-number"
            label="DAMS"
            type="number"
            value={spilStateVal}
            onChange={(e) => setSpilStateVal(e.target.valueAsNumber)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <button className="Add_Button" onClick={updateSpilFn}>
          Add
        </button>
      </div>

      <div className="survey-headcount headcount-flex">
        <h1>Survey</h1>
        <h1>{surData.surValue}</h1>
        <div className="textfield">
          <TextField
            id="outlined-number"
            label="DAMS"
            type="number"
            value={surStateVal}
            onChange={(e) => setSurStateVal(e.target.valueAsNumber)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <button className="Add_Button" onClick={updateSurFn}>
          Add
        </button>
      </div>

      <div className="admin-headcount headcount-flex">
        <h1>HSE Admin and Contractor's Office Staff</h1>
        <h1>{admData.admValue}</h1>
        <div className="textfield">
          <TextField
            id="outlined-number"
            label="DAMS"
            type="number"
            value={admStateVal}
            onChange={(e) => setAdmStateVal(e.target.valueAsNumber)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <button className="Add_Button" onClick={updateAdmFn}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Headcount;
