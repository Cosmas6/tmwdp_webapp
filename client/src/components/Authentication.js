import React from "react";
import ImageContainer from "./ImageContainer";
import { Outlet } from "react-router-dom";
import "../stylesheets/login.scss";

function Authentication() {
  return (
    <div className="Login_Container Auth_Container">
      <ImageContainer />
      <Outlet />
    </div>
  );
}

export default Authentication;
