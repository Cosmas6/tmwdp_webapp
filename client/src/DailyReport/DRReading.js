import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/drthumbnails.scss";

const DRReading = (props) => {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    async function getReports() {
      const response = await fetch(props.fetchLink);

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
        <td>{props.report.User}</td>
        <td>{props.report.Date}</td>
        <td>{props.report.Section}</td>
        <td>{props.report.Shift}</td>
        <td>
          <Link
            className="btn btn-link edit-button"
            to={`/dashboard/DREdit${props.report.Section}/${props.report._id}`}
          >
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <span>Edit</span>
          </Link>
          <button
            className="btn btn-link delete-button"
            onClick={() => {
              props.deleteReport(props.report._id);
            }}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
            <span>Delete</span>
          </button>
          <Link
            className="btn btn-link view-button"
            to={`/dashboard/DR${props.report.Section}Display/${props.report._id}`}
          >
            <i className="fa fa-eye" aria-hidden="true"></i>
            <span>View</span>
          </Link>
        </td>
      </tr>
    );
  };

  async function deleteReport(id) {
    await fetch(`${props.deleteFetch}` + `/` + id, {
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
              <th>Submitted By</th>
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

export default DRReading;
