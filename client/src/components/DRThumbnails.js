import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "../stylesheets/drthumbnails.scss";
// import db from "../firebase.config";

const DRThumbnails = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const emailAddress = user.email;
        setEmail(emailAddress);
      } else {
      }
    });
  }, []);

  const [reports, setReports] = useState([]);
  useEffect(() => {
    async function getReports() {
      const response = await fetch(
        `https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const reportsJson = await response.json();
      setReports(reportsJson);
    }

    getReports();

    return;
  }, [reports.length]);

  const Report = (props) => {
    const dateString = new Date(String(props.report.Date));
    const enUSFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return (
      <tr>
        <td>{props.report.Date}</td>
        <td>{props.report.Section}</td>
        <td>{props.report.Shift}</td>
        <td>
          <Link
            className="btn btn-link"
            to={`/dashboard/editDReport/${props.report._id}`}
          >
            Edit
          </Link>{" "}
          |
          <button
            className="btn btn-link"
            onClick={() => {
              props.deleteReport(props.report._id);
            }}
          >
            Delete
          </button>
          |
          <Link
            className="btn btn-link"
            to={`/dashboard/viewDReport/${props.report._id}`}
          >
            View
          </Link>{" "}
        </td>
      </tr>
    );
  };

  async function deleteReport(id) {
    await fetch(`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter/${id}`, {
      method: "DELETE",
    });

    const newReport = reports.filter((el) => el._id !== id);
    setReports(newReport);
  }

  function reportList() {
    return reports.map((report) => {
      return (
        <Report
          key={report._id}
          report={report}
          deleteReport={() => deleteReport(report._id)}
        />
      );
    });
  }

  return (
    <div className="DRThumbnail_Container">
      
      <div className="Report_Table_Container">
        <h3>Report List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Section</th>
              <th>Shift</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{reportList()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DRThumbnails;
