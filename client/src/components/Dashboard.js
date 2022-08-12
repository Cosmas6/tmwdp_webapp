import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";
import "../stylesheets/dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="Dashboard_Container">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
