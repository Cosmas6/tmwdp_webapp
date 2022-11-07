import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
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

export default function InstNav() {
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
          data-bs-target="#dashboard-collapse"
          aria-expanded="true"
        >
          <i className="fa-solid fa-clock"></i>
          <span>Crack Meter Reading</span>
        </NavLink>
      </li>
      <div className="collapse hide" id="dashboard-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sidebar-dropdowns">
          <SimpleBar style={{ height: "150px" }}>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "link-white rounded active"
                    : "link-white rounded"
                }
                to="crackMeterCreate"
                onClick={ToggleSidebarSecond}
              >
                Create Reading
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "link-white rounded active"
                    : "link-white rounded"
                }
                to="crackMeterList"
                onClick={ToggleSidebarSecond}
              >
                Edit List of Data
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "link-white rounded active"
                    : "link-white rounded"
                }
                to="crackMeterGraph"
                onClick={ToggleSidebarSecond}
              >
                View Graph
              </NavLink>
            </li>
          </SimpleBar>
        </ul>
      </div>
    </>
  );
}
