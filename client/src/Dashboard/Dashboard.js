import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../stylesheets/dashboard.scss";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import useWindowDimensions from "../components/useWindowDimensions";
// import InstNav from "./InstNav";
// import GanttNav from "./GanttNav";
// import PlacementNav from "./PlacementNav";

export default function Dashboard() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dailyReportRef = useRef(null);
  const dailyReportListRef = useRef(null);

  const ToggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  const ToggleSidebarSecond = () => {
    if (width < 768) {
      document.getElementById("sidebar").classList.toggle("active");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const renderDropdown = () => {
    return (
      <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
        {/* <div className="profile">
          <i className="fa fa-user" aria-hidden="true"></i>
          <a className="dropdown-item" href="/profile">
            My Profile
          </a>
        </div> */}

        {/* <div className="dropdown-divider"></div> */}
        <div className="log-out">
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <a className="dropdown-item-custom" onClick={logOut}>
            Logout
          </a>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (!token) {
      navigate("/auth/login");
    } else {
      const decodedToken = jwt_decode(token); // Decodes the token
      const username = decodedToken.userFirstName; // Modify this as per your implementation
      setUsername(username);
    }

    const dailyReportRoutes = [
      "/dashboard/spillway/create",
      "/dashboard/tunnels/create",
      "/dashboard/dams/create",
      "/dashboard/instrumentation/create",
      "/dashboard/employersCamp/create",
    ];

    const dailyReportListRoutes = [
      "/dashboard/spillway/read",
      "/dashboard/tunnels/read",
      "/dashboard/dams/read",
      "/dashboard/instrumentation/read",
      "/dashboard/employersCamp/read",
    ];

    // if (dailyReportRoutes.includes(location.pathname)) {
    //   dailyReportRef.current.classList.add("show");
    // } else {
    //   dailyReportRef.current.classList.remove("show");
    // }

    if (dailyReportListRoutes.includes(location.pathname)) {
      dailyReportListRef.current.classList.add("show");
    } else {
      dailyReportListRef.current.classList.remove("show");
    }
  }, [location.pathname]);

  const logOut = () => {
    cookies.remove("TOKEN", { path: "/" });
    setUsername("");
    window.location.href = "/auth/login";
  };

  return (
    <div className="Dashboard_Container">
      <div className="profile-section" onClick={toggleDropdown}>
        <div className="profile-picture">{username.charAt(0)}</div>
        <div className="profile-name">
          <i className="fa fa-chevron-down"></i>
        </div>
        {renderDropdown()}
      </div>

      <nav id="sidebar">
        <div className="Nav_Container">
          <div className="sidenav-header">
            <NavLink className="sidebar-brand rounded">
              <span className="sidebar-brand-text">TMWDP</span>
            </NavLink>
          </div>
          <hr className="horizontal light mt-0 mb-2" />
          <ul className="list-unstyled components">
            <li>
              <NavLink
                className={
                  location.pathname === "/dashboard/dashboard-overview"
                    ? "nav-link-custom rounded active"
                    : "nav-link-custom rounded"
                }
                to="/dashboard/dashboard-overview"
                onClick={ToggleSidebarSecond}
              >
                <div className="link-content">
                  <div>
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span>
                  </div>
                </div>
              </NavLink>
            </li>
            {/* <li>
              <div
                className="nav-dropdown rounded"
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
              </div>
            </li>
            <div
              className="collapse hide"
              id="dailyreport-collapse"
              ref={dailyReportRef}
            >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sidebar-dropdowns">
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/spillway/create"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/spillway/create"
                    onClick={ToggleSidebarSecond}
                  >
                    Spillway
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/tunnels/create"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/tunnels/create"
                    onClick={ToggleSidebarSecond}
                  >
                    Tunnels
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/dams/create"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/dams/create"
                    onClick={ToggleSidebarSecond}
                  >
                    Dams
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/instrumentation/create"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/instrumentation/create"
                    onClick={ToggleSidebarSecond}
                  >
                    Instrumentation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/employersCamp/create"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/employersCamp/create"
                    onClick={ToggleSidebarSecond}
                  >
                    Employer's Camp
                  </NavLink>
                </li>
              </ul>
            </div> */}
            <li>
              <div
                className="nav-dropdown rounded"
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
              </div>
            </li>
            <div
              className="collapse hide"
              id="dailyreportlist-collapse"
              ref={dailyReportListRef}
            >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sidebar-dropdowns">
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/spillway/read"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/spillway/read"
                    onClick={ToggleSidebarSecond}
                  >
                    Spillway
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/tunnels/read"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/tunnels/read"
                    onClick={ToggleSidebarSecond}
                  >
                    Tunnels
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/dams/read"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/dams/read"
                    onClick={ToggleSidebarSecond}
                  >
                    Dams
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/instrumentation/read"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/instrumentation/read"
                    onClick={ToggleSidebarSecond}
                  >
                    Instrumentation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      location.pathname === "/dashboard/employersCamp/read"
                        ? "sub-nav-link rounded active"
                        : "sub-nav-link rounded"
                    }
                    to="/dashboard/employersCamp/read"
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

          {/* <div className="sidenav-footer">
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
        </div> */}
        </div>
      </nav>
      <div className="nav-toggle-button">
        <a
          id="sidebarCollapse"
          className="btn btn-info nav-toggle-button"
          onClick={ToggleSidebar}
        >
          <i className="fas fa-align-left"></i>
          {/* <span> Menu</span> */}
        </a>
      </div>
      <Outlet />
    </div>
  );
}
