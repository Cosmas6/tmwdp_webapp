import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "../stylesheets/dashboard.scss";
import { getAuth, signOut } from "firebase/auth";
import db from "../../firebase.config";

export function useWindowDimensions() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const ToggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  const ToggleSidebarSecond = () => {
    if (width < 768) {
      document.getElementById("sidebar").classList.toggle("active");
    }
  };

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const auth = getAuth();

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
          {/* <p>Dummy Heading</p> */}

          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-link rounded active"
                  : "nav-link rounded"
              }
              data-bs-toggle="collapse"
              data-bs-target="#dailyreport-collapse"
              aria-expanded="true"
              to="instrumentation"
            >
              <i className="fa fa-clipboard" aria-hidden="true"></i>
              <span>Daily Report</span>
            </NavLink>
          </li>
          <div className="collapse hide" id="dailyreport-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sidebar-dropdowns">
              <SimpleBar style={{ height: "200px" }}>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createSpillwayDReport"
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
                    to="createTunnelsDReport"
                    onClick={ToggleSidebarSecond}
                  >
                    Tunnels
                  </NavLink>
                </li>
              </SimpleBar>
            </ul>
          </div>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
              to="readingDReport"
              onClick={ToggleSidebarSecond}
            >
              <i className="fa fa-clipboard" aria-hidden="true"></i>
              <span>Daily Report List</span>
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
              <i className="fa-solid fa-clock"></i>
              <span>Crack Meter Reading</span>
            </NavLink>
          </li>
          <div className="collapse hide" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sidebar-dropdowns">
              <SimpleBar style={{ height: "200px" }}>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC1"
                    onClick={ToggleSidebarSecond}
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
                    onClick={ToggleSidebarSecond}
                  >
                    C2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC3"
                    onClick={ToggleSidebarSecond}
                  >
                    C3
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC4"
                    onClick={ToggleSidebarSecond}
                  >
                    C4
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC5"
                    onClick={ToggleSidebarSecond}
                  >
                    C5
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC6"
                    onClick={ToggleSidebarSecond}
                  >
                    C6
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC7"
                    onClick={ToggleSidebarSecond}
                  >
                    C7
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC8"
                    onClick={ToggleSidebarSecond}
                  >
                    C8
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC9"
                    onClick={ToggleSidebarSecond}
                  >
                    C9
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC10"
                    onClick={ToggleSidebarSecond}
                  >
                    C10
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC11"
                    onClick={ToggleSidebarSecond}
                  >
                    C11
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC12"
                    onClick={ToggleSidebarSecond}
                  >
                    C12
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC13"
                    onClick={ToggleSidebarSecond}
                  >
                    C13
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC14"
                    onClick={ToggleSidebarSecond}
                  >
                    C14
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC15"
                    onClick={ToggleSidebarSecond}
                  >
                    C15
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "link-white rounded active"
                        : "link-white rounded"
                    }
                    to="createReadingC16"
                    onClick={ToggleSidebarSecond}
                  >
                    C16
                  </NavLink>
                </li>
              </SimpleBar>
            </ul>
          </div>
        </ul>
        {/* <ul className="list-unstyled CTAs">
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
        </ul> */}

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
