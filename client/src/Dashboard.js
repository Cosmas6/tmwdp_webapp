import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./stylesheets/dashboard.scss";

const Dashboard = () => {
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

  const logOut = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  const createReport = () => {
    navigate("/dailyreportform");
  };

  const instrumentationRedirect = () => {
    navigate("/instrumentation");
  };

  const headCount = () => {
    navigate("/headcount");
  };

  return (
    <div className="Dashboard_Container">
      <h1>Dashboard - DR</h1>
      <button className="Submit_Button" onClick={createReport} type="submit">
        Create Daily Report
      </button>
      <button
        className="Submit_Button"
        onClick={instrumentationRedirect}
        type="submit"
      >
        Instrumentation
      </button>
      <button className="Submit_Button" onClick={headCount} type="submit">
        Headcount
      </button>
      <button className="Submit_Button" onClick={logOut} type="submit">
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
