import React from "react";
import MainRoutes from "./MainRoutes";
import SideBar from "./SideBar";

const App = () => {
  return (
    <div className="App_Container">
      <SideBar />
      <MainRoutes />
    </div>
  );
};

export default App;
