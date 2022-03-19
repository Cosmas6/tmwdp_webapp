import React, { lazy, Suspense, useState } from "react";
import { doc, runTransaction } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Actions from "./store/actions";
// import { useForm } from "react-hook-form";
import db from "../firebase.config.js";

// const LoadingComponent = lazy(() => import("./Loading"));

import "./stylesheets/headcount.scss";

const Headcount = () => {
  const [damStateVal, setdamStateVal] = useState(0);
  const [matStateVal, setMatStateVal] = useState(0);
  const [tunStateVal, setTunStateVal] = useState(0);
  const [spilStateVal, setSpilStateVal] = useState(0);
  const [surStateVal, setSurStateVal] = useState(0);
  const [admStateVal, setAdmStateVal] = useState(0);

  const dispatch = useDispatch();

  const updateDamFn = async () => {
    // Create a reference to the SF doc.
    const DeptDocRef = doc(db, "headcounts", "departments");

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

  const damData = useSelector((state) => state.repData);

  return (
    <div className="Headcount_Container">
      {/* <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}> */}
      <h1>Headcount</h1>

      <h1>No. of people in:</h1>

      <h1>Dam Section</h1>
      <h1>{damData.value}</h1>
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

      <button onClick={updateDamFn}>Update</button>

      <h1>Material Section</h1>

      <h1>Tunnel Section</h1>

      <h1>Spillway Section</h1>

      <h1>Survey</h1>

      <h1>HSE Admin and Contractor's Office Staff</h1>
      {/* </form> */}
    </div>
  );
};

export default Headcount;
