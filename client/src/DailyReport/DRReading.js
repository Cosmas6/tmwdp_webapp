import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import "../stylesheets/drreading.scss";

const DRReading = (props) => {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [selectedReports, setSelectedReports] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  console.log(selectedReports);

  const decodedToken = jwt_decode(token);
  const userFirstName = decodedToken.userFirstName;
  const userLastName = decodedToken.userLastName;
  const userName = userFirstName + " " + userLastName;

  const [filterMyReports, setFilterMyReports] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: "Date",
    direction: "descending",
  });

  const sortedReports = React.useMemo(() => {
    let sortableReports = [...reports];
    switch (sortConfig.key) {
      case "User":
        sortableReports.sort((a, b) => a.User.localeCompare(b.User));
        break;
      case "Date":
        sortableReports.sort((a, b) => new Date(a.Date) - new Date(b.Date));
        break;
      case "Shift":
        sortableReports.sort((a, b) => a.Shift.localeCompare(b.Shift));
        break;
      default:
        break;
    }
    return sortConfig.direction === "ascending"
      ? sortableReports
      : sortableReports.reverse();
  }, [reports, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    setSelectedReports(selectAll ? reports.map((report) => report._id) : []);
  }, [selectAll, reports]);

  useEffect(() => {
    async function getReports() {
      setLoading(true);
      const response = await fetch(props.fetchLink);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      let reportsJson = await response.json();
      if (filterMyReports) {
        reportsJson = reportsJson.filter((report) => report.User === userName);
      }

      setLoading(false);
      setReports(reportsJson);
    }

    getReports();

    return () => console.log("ReadingDRSpillway unmounted");
  }, [filterMyReports]);

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedReports((oldArray) => [...oldArray, id]);
    } else {
      setSelectedReports((oldArray) =>
        oldArray.filter((reportId) => reportId !== id)
      );
      setSelectAll(false);
    }
  };

  const handleFilterChange = (event) => {
    setFilterMyReports(event.target.checked);
  };

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
  };

  const Report = (props) => {
    const dateString = new Date(String(props.report.Date));
    const enUSFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={selectedReports.includes(props.report._id)}
            onChange={(e) => handleCheckboxChange(e, props.report._id)}
          />
        </td>
        <td>{props.report.User}</td>
        <td>{enUSFormatter.format(dateString)}</td>
        <td>{props.report.Shift}</td>
        <td>
          <Link
            className="btn btn-link view-button"
            to={`/dashboard/${props.report.Section}/display/${props.report._id}`}
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
    const paginatedReports = sortedReports.slice(startIndex, endIndex);

    return paginatedReports.map((report) => {
      return <Report key={report._id} report={report} />;
    });
  }

  // Create a function to update the current page
  function changePage(newPage) {
    setCurrentPage(newPage);
  }

  function renderPagination() {
    const totalPages = Math.ceil(sortedReports.length / itemsPerPage);

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
            <label className="owner-report-only">
              <input
                className="owner-report-checkbox"
                type="checkbox"
                checked={filterMyReports}
                onChange={handleFilterChange}
              />
              Display my records only
            </label>
            <table
              className="table table-striped table-responsive"
              style={{ marginTop: 20 }}
            >
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      className="all-reports-checkbox"
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                  </th>
                  <th onClick={() => requestSort("User")}>
                    Submitted By
                    {sortConfig.key === "User" &&
                      (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
                  </th>
                  <th onClick={() => requestSort("Date")}>
                    Date{" "}
                    {sortConfig.key === "Date" &&
                      (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
                  </th>
                  <th onClick={() => requestSort("Shift")}>
                    Shift{" "}
                    {sortConfig.key === "Shift" &&
                      (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
                  </th>
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
                ) : reports.length === 0 ? (
                  <tr>
                    <td colSpan="5">
                      <h1 className="no-report-header">
                        No reports submitted.
                        <Link
                          className="Download_Link"
                          to={`/dashboard/${props.createReportLink}/create`}
                        >
                          Create Report
                        </Link>
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
