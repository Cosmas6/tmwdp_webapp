import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../stylesheets/dashboard.scss";
import Cookies from "universal-cookie";
import DRNav from "./DRNav";
import InstNav from "./InstNav";
import axios from "axios";
import GanttNav from "./GanttNav";
const cookies = new Cookies();

export default function Dashboard() {
  const token = cookies.get("TOKEN");
  const navigate = useNavigate();
  const ToggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [userInfo, setUserInfo] = useState();
  console.log(userInfo);

  // function checkDept() {
  //   switch (userInfo) {
  //     case "Spillway&Tunnels":
  //       return <SpillwayandTunnelNav />;
  //     case "Instrumentation":
  //       return <InstNav />;
  //     default:
  //       return "foo";
  //   }
  // }

  useEffect(() => {
    const token = cookies.get("TOKEN");
    const configuration = {
      method: "get",
      url: "https://nodejs.tmwdp.co.ke/login/currentUser",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        if (!result.data) {
          navigate("/login");
        }
        const userInfoArray = result.data.userDepartment;

        // const userResult = userInfoArray.map((obj) => {
        //   return obj;
        // });

        setUserInfo(userInfoArray.toString());
      })
      .catch((error) => {
        //initialize error
        error = new Error();
      });
  }, []);

  const logOut = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/login";
  };

  return (
    <div className="Dashboard_Container">
      <nav id="sidebar">
        <div className="sidenav-header">
          <a className="sidebar-brand" href="">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/construction-worker-icon.png"
              alt=""
            />
            <span className="sidebar-brand-text">TMWDP</span>
          </a>
        </div>
        <hr className="horizontal-line" />
        <ul className="list-unstyled components">
          <DRNav />
          <InstNav />
          <GanttNav />
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
