import React from "react";
import { NavLink } from "react-router-dom";
import "./stylesheets/sidebar.scss";

const SideBar = () => {
  // const logOut = () => {
  //   sessionStorage.removeItem("Auth Token");
  //   navigate("/login");
  // };
  return (
    <div className="Sidebar_Container">
      <div className="Navbar_Container">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
            <span className="fs-4">TMWDP</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                to="dailyreportform"
                className={(isActive) =>
                  "nav-link" + (!isActive ? "unselected" : "")
                }
              >
                Daily Report
              </NavLink>
            </li>
            <li>
              <NavLink
                to="instrumentation"
                className={(isActive) =>
                  "nav-link" + (!isActive ? "unselected" : "")
                }
              >
                Instrumentation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="headcount"
                className={(isActive) =>
                  "nav-link" + (!isActive ? "unselected" : "")
                }
              >
                Headcount
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/recordListTunnels"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Tunnels
              </NavLink>
              <a href="#" className="nav-link text-white"></a>
            </li> */}
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                className="rounded-circle me-2"
                width="32"
                height="32"
              />
              <strong>User</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-white text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
