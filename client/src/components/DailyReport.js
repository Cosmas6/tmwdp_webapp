import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../stylesheets/dailyreport.scss";

const DailyReport = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState([]);
  const [pdfLink, setPdfLink] = useState();
  const [editBtn, setEditBtn] = useState();
  useEffect(() => {
    async function fetchReport() {
      const id = params.id.toString();
      setEditBtn(id);
      const response = await fetch(
        `http://localhost:4000/DailyRSpillwayRouter/${params.id.toString()}`
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

  var n = new Date(report.Date).toLocaleDateString("es-CL");

  useEffect(() => {
    async function fetchReportPdf() {
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
                    <th>INSPECTOR'S</th>
                    <td colspan="1"></td>
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
          fileName: String(report.Date),
          options: {
            textAlign: "left",
            height: "11in",
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setPdfLink(res.pdf);
          console.log(pdfLink);
          console.log(res.pdf);
        });
    }

    fetchReportPdf();
  }, [report]);

  return (
    <>
      <div className="DailyReport_Container">
        <div className="DailyReportTable_Container">
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
                <th>INSPECTOR'S</th>
                <td colSpan="1"></td>
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
                <td colSpan="6">{report.Activities}</td>
              </tr>
              <tr>
                <th colSpan="6">PLANT AND EQUIPMENT:</th>
              </tr>
              <tr>
                <td colSpan="6">{report.PlantEQ}</td>
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
        </div>
        <div className="Download_Link">
          <a className="Submit_Button" href={`${pdfLink}`}>
            Download PDF
          </a>
        </div>
        <Link className="btn btn-link" to={`/dashboard/editDReport/${editBtn}`}>
          Edit
        </Link>{" "}
      </div>
    </>
  );
};

export default DailyReport;
