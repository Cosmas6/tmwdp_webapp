import React from "react";
import { Outlet } from "react-router-dom";
import "../stylesheets/maincontent.scss";

const MainContent = () => {
  return (
    <div className="Main_Content">
      <Outlet />
    </div>
  );
};

export default MainContent;
