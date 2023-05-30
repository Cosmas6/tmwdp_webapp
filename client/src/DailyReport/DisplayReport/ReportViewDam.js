import ReactMustache from "react-mustache";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";
import "../../stylesheets/report-view.scss";

const ReportViewDam = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const reportRef = useRef();
  const reportId = params.id.toString();

  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [report, setReport] = useState([]);
  const [newDate, setNewDate] = useState();
  const [downloadLink, setDownloadLink] = useState(null);

  async function deleteReport(id) {
    await fetch(`${props.deleteFetch}` + `/` + id, {
      method: "DELETE",
    });

    navigate(`/dashboard/dashboard-overview`);
  }

  useEffect(() => {
    async function fetchReport() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:4001/${props.viewRoute}/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const reportData = await response.json();
      if (!reportData) {
        window.alert(`Reading with id ${id} not found`);
        navigate(`/dashboard/dashboard-overview`);
        return;
      }
      setReport(reportData);
      const dateString = new Date(String(reportData.Date));
      const enUSFormatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setNewDate(enUSFormatter.format(dateString));
    }

    fetchReport();

    return;
  }, [params.id, navigate]);

  const fetchReportPdf = async () => {
    setLoading(true);
    if (!report || Object.keys(report).length === 0) {
      alert("The report data is not ready yet. Please try again later.");
      return;
    }
    const reportHTML = reportRef.current.innerHTML;
    const reportSection = report.Section;
    const reportShift = report.Shift;
    await fetch("https://v2018.api2pdf.com/chrome/html", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "e11aaf91-5cf3-4c53-958a-a3304484ea8e",
      },
      body: JSON.stringify({
        html: `
          <html style="color: green" lang="en">
          <head>
            <title>Daily Report for ${newDate}</title>
           
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossorigin="anonymous"
            />
          </head>
          <body>
          <div className="report-display-table-container ">
            <table
              class="table table-bordered border-dark table-sm"
              style="width: 900px"
              >
          ${reportHTML}
          </table>
            </div>
          </body>
        </html>
            `,
        fileName: `${reportSection}-${reportShift}-${newDate}.pdf`,
        options: {
          textAlign: "left",
          height: "11in",
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setDownloadLink(res.pdf);
      });
  };

  return (
    <div
      className="report-display-container container-fluid"
      id="report-display-container"
    >
      <div className="row">
        <div className="col-12">
          <h1 className="title drf-title">Daily Report Form</h1>
          <div className="report-display-table-container card">
            <table className="table-responsive">
              <tbody ref={reportRef}>
                <tr>
                  <th colSpan="2">
                    CIVIL WORKS FOR CONSTRUCTION OF THWAKE DAM EMBARKMENT AND
                    ASSOCIATED WORK
                  </th>
                </tr>
                <tr>
                  <th>INSPECTOR</th>
                  <td>{report.User}</td>
                </tr>
                <tr>
                  <th>SECTION:</th>
                  <td>{report.Section}</td>
                </tr>
                <tr>
                  <th>WEATHER:</th>
                  <td>{report.Weather}</td>
                </tr>
                <tr>
                  <th>DATE:</th>
                  <td>{newDate}</td>
                </tr>
                <tr>
                  <th>SHIFT:</th>
                  <td>{report.Shift}</td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <th colSpan="2">ACTIVITIES:</th>
                </tr>
                <tr>
                  <td colSpan="2">
                    <ReactMustache template={report.Activities} />
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">PLANT AND EQUIPMENT:</th>
                </tr>
                <tr>
                  <td colSpan="2">
                    <ReactMustache template={report.PlantEQ} />
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">LABOUR</th>
                </tr>
                <tr></tr>
                <tr>
                  <th>DESCRIPTION</th>
                  <th>NO</th>
                </tr>
                <tr>
                  <td>SMEC INSPECTORS</td>
                  <td>{report.SMEC_Ins}</td>
                </tr>
                <tr>
                  <td>SMEC ENGINEER</td>
                  <td>{report.SMEC_Eng}</td>
                </tr>
                <tr>
                  <td>CGGC INSPECTORS</td>
                  <td>{report.CGGC_Ins}</td>
                </tr>
                <tr>
                  <td>SITE FOREMAN</td>
                  <td>{report.Site_Foreman}</td>
                </tr>
                <tr>
                  <td>SAFETY OFFICER</td>
                  <td>{report.Safety_Officer}</td>
                </tr>
                <tr>
                  <td>PLANT OPERATOR</td>
                  <td>{report.Plant_Operator}</td>
                </tr>
                <tr>
                  <td>DRIVERS</td>
                  <td>{report.Drivers}</td>
                </tr>
                <tr>
                  <td>UNSKILLED LABOUR</td>
                  <td>{report.Unskilled_Labour}</td>
                </tr>
                <tr>
                  <td>WELDER</td>
                  <td>{report.Welder}</td>
                </tr>
                <tr>
                  <td>CHINESE STAFF</td>
                  <td>{report.Chinese_Staff}</td>
                </tr>
                <tr>
                  <th colSpan="2">REMARKS/OBSERVATION:</th>
                </tr>
                <tr>
                  <td colSpan="6">
                    <ul>
                      {report.rocktrip &&
                        report.rocktrip?.map((item, index) => {
                          return (
                            <li key={index}>
                              {item.Number_Of_Trips} trips made for Rock Type{" "}
                              {item.RockType} during {report.Shift}
                            </li>
                          );
                        })}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>SMEC</td>
                  <td colSpan="5">CGGC</td>
                </tr>
              </tbody>
            </table>
            <div className="report-option-buttons">
              <h1>OPTIONS</h1>
              <button
                className="download-link-generator"
                onClick={fetchReportPdf}
              >
                Generate Link
              </button>
              {loading ? (
                <div className="loader-button">
                  <ProgressBar
                    height="60"
                    width="60"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor="#F4442E"
                    barColor="#1976d2"
                  />
                </div>
              ) : downloadLink ? (
                <a
                  className="download-button"
                  id="download-button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0A2E52",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    padding: "10px",
                    width: "100%",
                    marginTop: "30px",
                    fontSize: "16px",
                    fontWeight: "600",
                    letterSpacing: "3px",
                    textDecoration: "none",
                    borderRadius: "0.35rem",
                    borderStyle: "none",
                  }}
                  href={downloadLink}
                  download
                >
                  Download PDF
                </a>
              ) : null}
              <Link
                className="download-link-generator"
                to={`/dashboard/${props.department}/edit/${reportId}`}
              >
                Edit Pdf
              </Link>
              <button
                className="btn btn-link delete-button download-link-generator"
                onClick={() => {
                  setLoadingDelete(true);
                  deleteReport(reportId);
                }}
              >
                {loadingDelete ? (
                  <div className="loader-button">
                    <TailSpin
                      height="30"
                      width="40"
                      color="#ffffff"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  <>
                    <i
                      className="fa fa-trash delete-button"
                      aria-hidden="true"
                    ></i>
                    <span>Delete</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportViewDam;
