import React from "react";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="Main_Content">
      <Outlet />
    </div>
  );
};

export default MainContent;
