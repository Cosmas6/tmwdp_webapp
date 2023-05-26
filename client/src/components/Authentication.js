import React from "react";
import ImageContainer from "./ImageContainer";
import { Outlet } from "react-router-dom";
import "../stylesheets/authentication.scss";

function Authentication() {
  return (
    <div className="Auth_Container">
      <ImageContainer />
      <Outlet />
    </div>
  );
}

export default Authentication;
