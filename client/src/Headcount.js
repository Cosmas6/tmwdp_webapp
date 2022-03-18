import React from "react";
import { runTransaction } from "firebase/firestore";
import db from "../firebase.config.js";

import "./stylesheets/headcount.scss";

const Headcount = () => {
  return (
    <div className="Headcount_Container">
      <h1>Headcount</h1>

      <h1>No. of people in:</h1>

      <h1>Dam Section</h1>
      <input className="Form_Input" type="number" id="headcount" />

      <h1>Material Section</h1>

      <h1>Tunnel Section</h1>

      <h1>Spillway Section</h1>

      <h1>Survey</h1>

      <h1>HSE Admin and Contractor's Office Staff</h1>
    </div>
  );
};

export default Headcount;
