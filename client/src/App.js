import React, { useEffect } from "react";
import MainRoutes from "./MainRoutes";
import { AuthProvider } from "./components/AuthContext";

const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);
  return (
    <div className="App_Container">
      <MainRoutes />
    </div>
  );
};

export default App;
