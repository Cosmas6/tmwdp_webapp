import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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

export default function SpillwayandTunnelNav() {
  const ToggleSidebarSecond = () => {
    if (width < 768) {
      document.getElementById("sidebar").classList.toggle("active");
    }
  };
  return (
    <>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link rounded active" : "nav-link rounded"
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
              to="DRCreateSpillway"
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
            navData.isActive ? "nav-link rounded active" : "nav-link rounded"
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
    </>
  );
}
