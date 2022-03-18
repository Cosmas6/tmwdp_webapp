import React from "react";
import { doc, runTransaction } from "firebase/firestore";
import { useForm } from "react-hook-form";
import db from "../firebase.config.js";

import "./stylesheets/headcount.scss";

const Headcount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const onSubmit = () => {};

  const updateFn = async () => {
    // Create a reference to the SF doc.
    const DamDocRef = doc(db, "headcounts", "dams");

    try {
      const newPopulation = await runTransaction(db, async (transaction) => {
        const DamDoc = await transaction.get(DamDocRef);
        if (!DamDoc.exists()) {
          throw "Document does not exist!";
        }

        const newPop = DamDoc.data().tally + 5;
        if (newPop <= 1000000) {
          transaction.update(DamDocRef, { tally: newPop });
          return newPop;
        } else {
          return Promise.reject("Sorry! Population is too big");
        }
      });

      console.log("Population increased to ", newPopulation);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  };

  return (
    <div className="Headcount_Container">
      <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}>
        <h1>Headcount</h1>

        <h1>No. of people in:</h1>

        <h1>Dam Section</h1>
        <input className="Form_Input" type="number" id="headcount" />
        <button onClick={updateFn}>Update</button>

        <h1>Material Section</h1>

        <h1>Tunnel Section</h1>

        <h1>Spillway Section</h1>

        <h1>Survey</h1>

        <h1>HSE Admin and Contractor's Office Staff</h1>
      </form>
    </div>
  );
};

export default Headcount;
