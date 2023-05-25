import React, { Suspense } from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import Authentication from "./components/Authentication";
import DashboardRoutes from "./Dashboard/DashboardRoutes";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

// const Login = React.lazy(() => import("./components/Login"));
// const Register = React.lazy(() => import("./components/Register"));

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
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password/:token", element: <ResetPassword /> },
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
