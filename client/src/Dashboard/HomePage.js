import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import "../stylesheets/homepage.scss";
import DRTrack from "../DailyReport/DRTrack";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (!token) {
      navigate("/auth/login");
    } else {
      const decodedToken = jwt_decode(token);
      const username = decodedToken.userFirstName;
      setUsername(username);
      console.log(username);
    }
  }, []);
  return (
    <div className="HomePage_Container container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="Welcome_Content">
            <h1 className="welcome-title">Hello! Eng. {username}</h1>
            <div className="dr-calendar">
              <h1>Daily Report Calendar</h1>
              <DRTrack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
