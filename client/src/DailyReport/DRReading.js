import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "../stylesheets/drreading.scss";

const DRReading = (props) => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  console.log(reports.length);
  useEffect(() => {
    async function getReports() {
      setLoading(true);
      const response = await fetch(props.fetchLink);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const reportsJson = await response.json();
      setLoading(false);
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
        <td>{enUSFormatter.format(dateString)}</td>
        <td>{props.report.Section}</td>
        <td>{props.report.Shift}</td>
        <td>
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

  function reportList() {
    // Slice the data array based on the current page and the number of items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedReports = reports.slice(startIndex, endIndex);

    return paginatedReports.map((report) => {
      return <Report key={report._id} report={report} />;
    });
  }

  // Create a function to update the current page
  function changePage(newPage) {
    setCurrentPage(newPage);
  }

  function renderPagination() {
    const totalPages = Math.ceil(reports.length / itemsPerPage);

    return (
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => changePage(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages).keys()].map((page) => (
            <li
              key={page + 1}
              className={`page-item ${currentPage === page + 1 && "active"}`}
            >
              <button
                className="page-link"
                onClick={() => changePage(page + 1)}
              >
                {page + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages && "disabled"}`}
          >
            <button
              className="page-link"
              onClick={() => changePage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className="DRReading_Container container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="Report_Table_Container card ">
            <h3>Report List</h3>

            <table
              className="table table-striped table-responsive"
              style={{ marginTop: 20 }}
            >
              <thead>
                <tr>
                  <th>Submitted By</th>
                  <th>Date</th>
                  <th>Section</th>
                  <th>Shift</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5">
                      <div className="Loading_Div_Buttons">
                        <TailSpin
                          height="50"
                          width="50"
                          color="#000000"
                          ariaLabel="tail-spin-loading"
                          radius="1"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </div>
                    </td>
                  </tr>
                ) : reports.length == 0 ? (
                  <tr>
                    <td colSpan="5">
                      <h1 className="no-report-header">
                        No reports submitted.
                        <Link
                          className="Download_Link"
                          to={`/dashboard/${props.createReportLink}`}
                        >
                          Create Report
                        </Link>{" "}
                      </h1>
                    </td>
                  </tr>
                ) : (
                  reportList()
                )}
              </tbody>
            </table>
            {renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRReading;
