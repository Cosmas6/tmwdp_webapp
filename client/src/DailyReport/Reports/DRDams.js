import ReactMustache from "react-mustache";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";
import "../../stylesheets/dailyreport.scss";

const DRDams = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const reportRef = useRef();
  const reportId = params.id.toString();

  async function deleteReport(id) {
    await fetch(`${props.deleteFetch}` + `/` + id, {
      method: "DELETE",
    });

    navigate(`/dashboard/DRReadingDams`);
  }

  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [report, setReport] = useState([]);
  const [newDate, setNewDate] = useState();
  const [editBtn, setEditBtn] = useState();

  useEffect(() => {
    async function fetchReport() {
      const id = params.id.toString();
      setEditBtn(id);
      const response = await fetch(
        `https://nodejs.tmwdp.co.ke/${props.viewRoute}/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const reportData = await response.json();
      if (!reportData) {
        window.alert(`Reading with id ${id} not found`);
        navigate(`/dashboard/readingDReport`);
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
    const reportSection = report.Section;
    const reportShift = report.Shift;
    const reportHTML = reportRef.current.innerHTML;
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
          <div className="DailyReportTable_Container ">
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
        document.getElementById(
          "Download_Button"
        ).innerHTML = `<a className="Download_Button" href="${res.pdf}" >Download PDF</a>`;
      });
  };

  return (
    <div
      className="DailyReport_Container container-fluid"
      id="DailyReport_Container"
    >
      <div className="row">
        <div className="col-12">
          <div className="DailyReportTable_Container card">
            <h1 className="title drf-title">Daily Report Form</h1>
            <table className="table-responsive">
              <tbody ref={reportRef}>
                <tr>
                  <th colSpan="6">
                    CIVIL WORKS FOR CONSTRUCTION OF THWAKE DAM EMBARKMENT AND
                    ASSOCIATED WORK
                  </th>
                </tr>
                <tr>
                  <th>INSPECTOR</th>
                  <td colSpan="1">{report.User}</td>
                  <th>SECTION:</th>
                  <td colSpan="4">{report.Section}</td>
                </tr>
                <tr>
                  <th>WEATHER:</th>
                  <td>{report.Weather}</td>
                  <th>DATE:</th>
                  <td>{newDate}</td>
                  <th>SHIFT:</th>
                  <td>{report.Shift}</td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <th colSpan="6">ACTIVITIES:</th>
                </tr>
                <tr>
                  <td colSpan="6">
                    <ReactMustache template={report.Activities} />
                  </td>
                </tr>
                <tr>
                  <th colSpan="6">PLANT AND EQUIPMENT:</th>
                </tr>
                <tr>
                  <td colSpan="6">
                    <ReactMustache template={report.PlantEQ} />
                  </td>
                </tr>
                <tr>
                  <th colSpan="6">LABOUR</th>
                </tr>
                <tr></tr>
                <tr>
                  <th>DESCRIPTION</th>
                  <th>NO</th>
                  <th>DESCRIPTION</th>
                  <th colSpan="3">NO</th>
                </tr>
                <tr>
                  <td width="40%">SMEC INSPECTORS</td>
                  <td>{report.SMEC_Ins}</td>
                  <td>SMEC ENGINEER</td>
                  <td colSpan="3">{report.SMEC_Eng}</td>
                </tr>
                <tr>
                  <td>CGGC INSPECTORS</td>
                  <td>{report.CGGC_Ins}</td>
                  <td>SITE FOREMAN</td>
                  <td colSpan="3">{report.Site_Foreman}</td>
                </tr>
                <tr>
                  <td>SAFETY OFFICER</td>
                  <td>{report.Safety_Officer}</td>
                  <td>PLANT OPERATOR</td>
                  <td colSpan="3">{report.Plant_Operator}</td>
                </tr>
                <tr>
                  <td>DRIVERS</td>
                  <td>{report.Drivers}</td>
                  <td>UNSKILLED LABOUR</td>
                  <td colSpan="3">{report.Unskilled_Labour}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>WELDER</td>
                  <td colSpan="3">{report.Welder}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>CHINESE STAFF</td>
                  <td colSpan="3">{report.Chinese_Staff}</td>
                </tr>
                <tr>
                  <th colSpan="6">REMARKS/OBSERVATION:</th>
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
            <button className="Download_Link" onClick={fetchReportPdf}>
              Generate Link
            </button>
            {loading ? (
              <div className="Loading_Div">
                <ProgressBar
                  height="60"
                  width="60"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#F4442E"
                  barColor="#1976d2"
                />
                <p>Generating Download Link.....</p>
              </div>
            ) : (
              ``
            )}
            <div id="Download_Button"></div>
            <Link
              className="Download_Link"
              to={`/dashboard/DREditDams/${reportId}`}
            >
              Edit Pdf
            </Link>{" "}
            <button
              className="btn btn-link delete-button Download_Link"
              onClick={() => {
                setLoadingDelete(true);
                deleteReport(reportId);
              }}
            >
              {loadingDelete ? (
                <div className="Loading_Div_Buttons">
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
  );
};

export default DRDams;
