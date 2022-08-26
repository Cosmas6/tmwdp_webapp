import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "../stylesheets/create.scss";

const CreateReading = () => {
  // This following section will display the form that takes the input from the user.
  return (
    <div className="Create_Container">
      <h1>Select CrackMeter</h1>
      <Link to="createReadingC1">C1</Link>
      <Link to="createReadingC2">C2</Link>
      <Outlet />
    </div>
  );
};

export default CreateReading;
