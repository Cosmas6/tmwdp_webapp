import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainContent from "./components/MainContent";
import CMRoutes from "./Instrumentation/CrackMeter/CMRoutes";
import DRRoutes from "./DailyReport/DRRoutes";
import GanttRoutes from "./components/Gantt/GanttRoutes";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));
const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const token = cookies.get("TOKEN");

const MainRoutes = () => (
  <Suspense>
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
          {GanttRoutes}
        </Route>
      </Route>
    </Routes>
  </Suspense>
);
export default MainRoutes;
