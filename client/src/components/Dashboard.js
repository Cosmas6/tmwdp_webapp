import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";
import "../stylesheets/dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();
  const ToggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, []);

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

        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="createDReport"
          >
            Daily Report
          </NavLink>
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Home
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="/element">Home 1</a>
              </li>
              <li>
                <a href="/element">Home 2</a>
              </li>
              <li>
                <a href="/element">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/element">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Pages
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="/element">Page 1</a>
              </li>
              <li>
                <a href="/element">Page 2</a>
              </li>
              <li>
                <a href="/element">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/element">Portfolio</a>
          </li>
          <li>
            <a href="/element">Contact</a>
          </li>
        </ul>

        <ul className="list-unstyled CTAs">
          <li>
            <a
              href="https://bootstrapious.com/tutorial/files/sidebar.zip"
              className="download"
            >
              Download source
            </a>
          </li>
          <li>
            <a
              href="https://bootstrapious.com/p/bootstrap-sidebar"
              className="article"
            >
              Back to article
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-toggle-button">
        <button
          id="sidebarCollapse"
          className="btn btn-info nav-toggle-button"
          onClick={ToggleSidebar}
        >
          <i className="fas fa-align-left"></i>
          <span>Menu</span>
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;
