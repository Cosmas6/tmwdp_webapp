import React, { useState } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Authentication from "./components/Authentication";
import DashboardRoutes from "./Dashboard/DashboardRoutes";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import { ModalProvider } from "./DailyReport/ModalContext";
import "./stylesheets/mainroutes.scss";

// const Login = React.lazy(() => import("./components/Login"));
// const Register = React.lazy(() => import("./components/Register"));

const MainRoutes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  console.log(modalContent, "modalContent");

  const openModal = (content) => {
    console.log("Open modal called");
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("Close modal called");
    setModalOpen(false);
  };

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

  console.log(modalOpen, "modalOpen");
  return (
    <ModalProvider
      value={{
        modalOpen,
        openModal,
        closeModal,
      }}
    >
      <div>{routes}</div>
      {modalOpen && <div className="modal-custom">{modalContent}</div>}
    </ModalProvider>
  );
};

export default MainRoutes;
