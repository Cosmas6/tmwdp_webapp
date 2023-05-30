import React from "react";
import ImageContainer from "./ImageContainer";
import { Outlet } from "react-router-dom";

import "../stylesheets/auth-container.scss";

function Authentication() {
  return (
    <div className="auth-container">
      <ImageContainer />
      <Outlet />
    </div>
  );
}

export default Authentication;
