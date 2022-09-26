import ReactMustache from "react-mustache";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../stylesheets/dailyreport.scss";

const DRSpillwayAndTunnels = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState([]);
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
    }

    fetchReport();

    return;
  }, [params.id, navigate]);

  const fetchReportPdf = async () => {
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
            <title>Daily Report for ${report.Date}</title>
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
                style="width: 900px;"
              >
                <tbody>
                  <tr>
                    <th colspan="6" class="text-center">
                      CIVIL WORKS FOR CONSTRUCTION OF THWAKE DAM EMBARKMENT AND
                      ASSOCIATED WORKS
                    </th>
                  </tr>
                  <tr>
                    <th>INSPECTOR</th>
                    <td colspan="1">${report.User}</td>
                    <th>SECTION:</th>
                    <td colspan="4" style="padding-left: 10px">${report.Section}</td>
                  </tr>
                  <tr>
                    <th>WEATHER:</th>
                    <td style="padding-left: 10px">${report.Weather}</td>
                    <th>DATE:</th>
                    <td style="padding-left: 10px">${report.Date}</td>
                    <th>SHIFT:</th>
                    <td style="padding-left: 10px">${report.Shift}</td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                  <tr>
                    <th colspan="6">ACTIVITIES:</th>
                  </tr>
                  <tr>
                    <td colspan="6" style="padding-left: 10px">${report.Activities}</td>
                  </tr>
                  <tr>
                    <th colspan="6">PLANT AND EQUIPMENT:</th>
                  </tr>
                  <tr>
                    <td colspan="6" style="padding-left: 10px">${report.PlantEQ}</td>
                  </tr>
                  <tr>
                    <th colspan="6">LABOUR</th>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>NO</th>
                    <th>DESCRIPTION</th>
                    <th colspan="3">NO</th>
                  </tr>
                  <tr>
                    <td width="40%">SMEC INSPECTORS</td>
                    <td style="padding-left: 10px">${report.SMEC_Ins}</td>
                    <td>SMEC ENGINEER</td>
                    <td colspan="3" style="padding-left: 10px">${report.SMEC_Eng}</td>
                  </tr>
                  <tr>
                    <td>CGGC INSPECTORS</td>
                    <td style="padding-left: 10px">${report.CGGC_Ins}</td>
                    <td>SITE FOREMAN</td>
                    <td colspan="3" style="padding-left: 10px">${report.Site_Foreman}</td>
                  </tr>
                  <tr>
                    <td>SAFETY OFFICER</td>
                    <td style="padding-left: 10px">${report.Safety_Officer}</td>
                    <td>PLANT OPERATOR</td>
                    <td colspan="3" style="padding-left: 10px">${report.Plant_Operator}</td>
                  </tr>
                  <tr>
                    <td>DRIVERS</td>
                    <td style="padding-left: 10px">${report.Drivers}</td>
                    <td>UNSKILLED LABOUR</td>
                    <td colspan="3" style="padding-left: 10px">${report.Unskilled_Labour}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>WELDER</td>
                    <td colspan="3" style="padding-left: 10px">${report.Welder}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>CHINESE STAFF</td>
                    <td colspan="3" style="padding-left: 10px">${report.Chinese_Staff}</td>
                  </tr>
                  <tr>
                    <th colspan="6">REMARKS/OBSERVATION:</th>
                  </tr>
                  <tr>
                    <td style="height: 100px">SMEC</td>
                    <td colspan="5" style="height: 100px">CGGC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </body>
          </html>
          `,
        fileName: `${report.Date} ${report.Section} ${report.Shift}.pdf`,
        options: {
          textAlign: "left",
          height: "11in",
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        document.getElementById(
          "Download_Button"
        ).innerHTML = `<a className="Download_Button" href="${res.pdf}" >Download PDF</a>`;
      });
  };

  return (
    <>
      <div
        className="DailyReport_Container container-fluid"
        id="DailyReport_Container"
      >
        <div className="row">
          <div className="col-12">
            <div className="DailyReportTable_Container card">
              <h1 className="title drf-title">Daily Report Form</h1>
              <table>
                <tbody>
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
                    <td>{report.Date}</td>
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
                    <td>SMEC</td>
                    <td colSpan="5">CGGC</td>
                  </tr>
                </tbody>
              </table>
              <button className="Download_Link" onClick={fetchReportPdf}>
                Generate Link
              </button>
              <div id="Download_Button"></div>
              <Link
                className="Download_Link"
                to={`/dashboard/editDReport/${editBtn}`}
              >
                Edit Pdf
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DRSpillwayAndTunnels;
