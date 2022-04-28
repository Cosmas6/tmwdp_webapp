import React from "react";
import { NavLink } from "react-router-dom";
import LeftBank from "./InstSections/LeftBank";
// import RightBank from "./InstSections/LeftBank";
// import Spillway from "./InstSections/Spillway";
import { RecordListTunnels } from "./InstSections/Tunnels";
import "./stylesheets/instrumentation.scss";

const Instrumentation = () => {
  var pathname = window.location.pathname;
  console.log(pathname);
  // const functionWithSwitch = () => {
  //   switch (damSectionData) {
  //     case "Right Bank":
  //       return <div>Right Bank</div>;
  //     case "Left Bank":
  //       return <LeftBank /*{handleClick={handleClick}}*/ />;
  //     case "Spillway Slopes":
  //       return <div>Spillway Slopes</div>;
  //     case "Tunnels":
  //       return <RecordListTunnels />;
  //     default:
  //       console.log(null);
  //   }
  // };
  //   console.log(section);

  return (
    <div className="Instrumentation_Container">
      <div className="Navbar_Container">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
            <span className="fs-4">Instrumentation</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Right Bank
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                Left Bank
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                Spillway
              </a>
            </li>
            <li>
              <NavLink
                to="/recordListTunnels"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Tunnels
              </NavLink>
              <a href="#" className="nav-link text-white"></a>
            </li>
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

export default Instrumentation;
