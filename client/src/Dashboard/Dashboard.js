import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const { width } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <div className="profile">
          <i className="fa fa-user" aria-hidden="true"></i>
          <a className="dropdown-item" href="/profile">
            My Profile
          </a>
        </div>

        <div className="dropdown-divider"></div>
        <div className="log-out">
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <a className="dropdown-item" onClick={logOut}>
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
      console.log(username);
    }
  }, []);

  const logOut = () => {
    cookies.remove("TOKEN", { path: "/" });
    setUsername("");
    window.location.href = "/auth/login";
  };

  return (
    <div className="Dashboard_Container">
      <div className="profile-section" onClick={toggleDropdown}>
        <div className="profile-picture">{username.charAt(0)}</div>
        <div className="profile-name" >
          <i className="fa fa-chevron-down"></i>
        </div>
        {renderDropdown()}
      </div>

      <nav id="sidebar">
        <div className="sidenav-header">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "sidebar-brand rounded active"
                : "sidebar-brand rounded"
            }
            to="/dashboard/dashboard-overview"
            onClick={ToggleSidebarSecond}
          >
            <span className="sidebar-brand-text">TMWDP</span>
          </NavLink>
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
