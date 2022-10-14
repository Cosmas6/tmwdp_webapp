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

export default function GanttNav() {
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
          to="ganttChart"
          onClick={ToggleSidebarSecond}
        >
          <i className="fa-solid fa-chart-gantt"></i>
          <span>Gantt Chart</span>
        </NavLink>
      </li>
    </>
  );
}
