import React, { Suspense } from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import Authentication from "./components/Authentication";
import DashboardRoutes from "./Dashboard/DashboardRoutes";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));
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
      children: DashboardRoutes,
    },
  ]);

  return (
    <Suspense>
      <div>{routes}</div>
    </Suspense>
  );
};

export default MainRoutes;
