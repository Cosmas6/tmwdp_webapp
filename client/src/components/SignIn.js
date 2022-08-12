import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Login from "./Login";
import "../stylesheets/signin.scss";

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/signin");
    }
  }, []);

  return (
    <div className="SignIn_Container">
      <Login />
      <Outlet />
    </div>
  );
};

export default SignIn;
