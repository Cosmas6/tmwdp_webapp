import React, { useEffect } from "react";
import MainRoutes from "./MainRoutes";
import { AuthProvider } from "./auth/AuthContext";


const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);
  return (
    <div className="app-container">
      <MainRoutes />
    </div>
  );
};

export default App;
