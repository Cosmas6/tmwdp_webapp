import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import db from "../firebase.config";
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
    <>
      <div className="sidenav-main">
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
        <div className="sidebar-collapse">
          <ul className="sidebar-nav">
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
              to="createDReport"
            >
              Daily Report
            </NavLink>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                D Report List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clients">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
