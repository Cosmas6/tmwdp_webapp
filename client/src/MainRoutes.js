import React, { useState } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import AuthContainer from "./auth/AuthContainer";
import DashboardRoutes from "./Dashboard/DashboardRoutes";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import { ModalProvider } from "./Dashboard/ModalContext";
import "./stylesheets/main-routes.scss";

// const Login = React.lazy(() => import("./components/Login"));
// const Register = React.lazy(() => import("./components/Register"));

const MainRoutes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // console.log(modalContent, "modalContent");

  const openModal = (content) => {
    // console.log("Open modal called");
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    // console.log("Close modal called");
    setModalOpen(false);
  };

  let routes = useRoutes([
    { path: "/", element: <Navigate replace to="/auth/login" /> },
    {
      path: "auth/*",
      element: <AuthContainer />,
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
