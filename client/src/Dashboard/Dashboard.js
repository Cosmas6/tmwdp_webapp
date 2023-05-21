import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../stylesheets/dashboard.scss";
import Cookies from "universal-cookie";
import DRNav from "./DRNav";
import constructionIcon from "../../public/construction-engineer-line-icon.svg";
// import InstNav from "./InstNav";
// import GanttNav from "./GanttNav";
// import PlacementNav from "./PlacementNav";

export default function Dashboard() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const ToggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (!token) {
      navigate("/auth/login");
    }
  }, []);

  const logOut = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/auth/login";
  };

  return (
    <div className="Dashboard_Container">
      <nav id="sidebar">
        <div className="sidenav-header">
          <a className="sidebar-brand" href="">
            <img src={constructionIcon} alt="" />
            <span className="sidebar-brand-text">TMWDP</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <ul className="list-unstyled components">
          <DRNav />
          {/* <InstNav /> */}
          {/* <GanttNav />
          <PlacementNav /> */}
        </ul>

        <div className="sidenav-footer">
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            onClick={logOut}
          >
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <span>Log Out</span>
          </NavLink>
        </div>
      </nav>
      <div className="nav-toggle-button">
        <button
          id="sidebarCollapse"
          className="btn btn-info nav-toggle-button"
          onClick={ToggleSidebar}
        >
          <i className="fas fa-align-left"></i>
          <span> Menu</span>
        </button>
      </div>
      <Outlet />
    </div>
  );
}
