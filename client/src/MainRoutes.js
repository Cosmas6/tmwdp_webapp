import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./Dashboard";
import CMRoutes from "./Instrumentation/CrackMeter/CMRoutes";
import DRRoutes from "./DailyReport/DRRoutes";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

const MainRoutes = () => (
  <Routes forceRefresh>
    <Route path="/" element={<MainContent />}>
      <Route path="/" element={<Navigate replace to="login" />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="dashboard"
        element={token ? <Dashboard /> : <Navigate to="/" />}
      >
        {CMRoutes}
        {DRRoutes}
      </Route>
    </Route>
  </Routes>
);
export default MainRoutes;
