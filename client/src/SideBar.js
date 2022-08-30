import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import "./stylesheets/sidebar.scss";

const SideBar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth Token");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const auth = getAuth();
  const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const emailAddress = user.email;
        setEmail(emailAddress);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <div className="Sidebar_Container">
      <div className="Navbar_Container">
        <div className="d-flex flex-column p-3 text-white bg-dark h-100 navbar-custom-css">
          <a
            href="/"
            className="d-flex text-white text-decoration-none sidebar-heading-container"
          >
            {/* <svg className="bi me-2" width="40" height="32">
              
            </svg> */}
            <span className="sidebar-heading">TMWDP</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
                to="dailyreportform"
              >
                Daily Report
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "nav-link rounded active"
                    : "nav-link rounded"
                }
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="true"
                to="instrumentation"
              >
                CM Reading
              </NavLink>
            </li>
            <div className="collapse show" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sidebar-dropdowns">
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC1"
                  >
                   C1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC2"
                  >
                    C2
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="headcount"
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
                    to="headcount"
                  >
                    Tunnels
                  </NavLink>
                </li> */}
              </ul>
            </div>

            {/* <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
                to="createReading"
              >
                CM Reading
              </NavLink>
            </li> */}
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
                to="reactGraph"
              >
                Graph
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
                to="example"
              >
                Testing
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
              <strong>{email}</strong>
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
                <button className="dropdown-item" onClick={logOut}>
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
