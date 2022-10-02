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
    </>
  );
}
