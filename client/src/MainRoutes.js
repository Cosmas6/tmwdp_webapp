import React, { Suspense } from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import Authentication from "./components/Authentication";
import Cookies from "universal-cookie";

import CMRoutes from "./Instrumentation/CrackMeter/CMRoutes";
import DRRoutes from "./DailyReport/DRRoutes";
import GanttRoutes from "./components/Gantt/GanttRoutes";

const cookies = new Cookies();
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));
const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
import ForgotPasswordEmail from "./components/forgotPassword";
const token = cookies.get("TOKEN");

const MainRoutes = () => {
  let location = useLocation();

  let routes = useRoutes([
    { path: "/", element: <Navigate replace to="/auth/login" /> },
    {
      path: "auth/*",
      element: <Authentication />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "dashboard/*",
      element: token ? <Dashboard /> : <Navigate to="/auth/login" />,
      children: [...CMRoutes, ...DRRoutes, ...GanttRoutes],
    },
  ]);

  return (
    <Suspense>
      <div>{routes}</div>
    </Suspense>
  );
};

export default MainRoutes;
