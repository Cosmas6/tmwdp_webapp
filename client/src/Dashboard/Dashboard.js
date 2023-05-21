import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../stylesheets/dashboard.scss";
import Cookies from "universal-cookie";
import useWindowDimensions from "../components/useWindowDimensions";
// import InstNav from "./InstNav";
// import GanttNav from "./GanttNav";
// import PlacementNav from "./PlacementNav";

export default function Dashboard() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const ToggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  const ToggleSidebarSecond = () => {
    if (width < 768) {
      document.getElementById("sidebar").classList.toggle("active");
    }
  };

  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (!token) {
      navigate("/auth/login");
    }
  }, []);

  const logOut = () => {
    // cookies.remove("TOKEN", { path: "/" });
    // window.location.href = "/auth/login";
  };

  return (
    <div className="Dashboard_Container">
      <nav id="sidebar">
        <div className="sidenav-header">
          <a className="sidebar-brand" href="">
            {/* <img src={constructionIcon} alt="" /> */}
            <span className="sidebar-brand-text">TMWDP</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <ul className="list-unstyled components">
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-link rounded active"
                  : "nav-link rounded"
              }
              data-bs-toggle="collapse"
              data-bs-target="#dailyreport-collapse"
              aria-expanded="false"
            >
              <div className="link-content">
                <div>
                  <i className="fa fa-clipboard" aria-hidden="true"></i>
                  <span>Create Daily Report</span>
                </div>
                <span className="arrow"></span>
              </div>
            </NavLink>
          </li>
          <div className="collapse hide" id="dailyreport-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sidebar-dropdowns">
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="/dashboard/DRCreateSpillway"
                  onClick={ToggleSidebarSecond}
                >
                  Spillway
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRCreateTunnels"
                  onClick={ToggleSidebarSecond}
                >
                  Tunnels
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRCreateDams"
                  onClick={ToggleSidebarSecond}
                >
                  Dams
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRCreateInstrumentation"
                  onClick={ToggleSidebarSecond}
                >
                  Instrumentation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRCreateEmpCamp"
                  onClick={ToggleSidebarSecond}
                >
                  Employer's Camp
                </NavLink>
              </li>
            </ul>
          </div>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-link rounded active"
                  : "nav-link rounded"
              }
              data-bs-toggle="collapse"
              data-bs-target="#dailyreportlist-collapse"
              aria-expanded="false"
            >
              <div className="link-content">
                <div>
                  <i className="fa fa-clipboard" aria-hidden="true"></i>
                  <span>Daily Report List</span>
                </div>
                <span className="arrow"></span>
              </div>
            </NavLink>
          </li>
          <div className="collapse hide" id="dailyreportlist-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sidebar-dropdowns">
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRReadingSpillway"
                  onClick={ToggleSidebarSecond}
                >
                  Spillway
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRReadingTunnels"
                  onClick={ToggleSidebarSecond}
                >
                  Tunnels
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRReadingDams"
                  onClick={ToggleSidebarSecond}
                >
                  Dams
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRReadingInstrumentation"
                  onClick={ToggleSidebarSecond}
                >
                  Instrumentation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "link-white rounded active"
                      : "link-white rounded"
                  }
                  to="DRReadingEmpCamp"
                  onClick={ToggleSidebarSecond}
                >
                  Employer's Camp
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <InstNav /> */}
          {/* <GanttNav />
          <PlacementNav /> */}
        </ul>

        <div className="sidenav-footer">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "nav-link logout-link active"
                : "nav-link logout-link"
            }
            onClick={logOut}
          >
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <span className="log-out">Log Out</span>
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
