import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./stylesheets/start.scss";

const Start = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/dashboard");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="Start_Container">
      {/* <h1>TMWDP</h1>
      <form>
        <Link to="/login">
          <button type="button">Log In</button>
        </Link>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
      </form> */}
    </div>
  );
};

export default Start;
