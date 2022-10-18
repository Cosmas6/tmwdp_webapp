import React, { useEffect } from "react";
import MainRoutes from "./MainRoutes";

const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);
  return (
    <div className="App_Container">
      <MainRoutes />
    </div>
  );
};

export default App;
