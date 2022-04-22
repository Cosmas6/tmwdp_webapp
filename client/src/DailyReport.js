import React, { useRef } from "react";
import "./stylesheets/dailyreport.scss";

const DailyReport = ({
  reportKey,
  section,
  weather,
  date,
  shift,
  activities,
  plantEQ,
  SMEC_Ins,
  CGGC_Ins,
  safety_officer,
  drivers,
  SMEC_Eng,
  site_foreman,
  plant_operator,
  unskilled_labour,
  welder,
  chinese_staff,
}) => {
  const reportRef = useRef();

  const onButtonClick = () => {
    fetch("https://v2018.api2pdf.com/chrome/html", {
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
            <title>Daily Report for ${date}</title>
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
                style="width: 900px; margin: 15vh auto"
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
                    <td colspan="4" style="padding-left: 10px">${section}</td>
                  </tr>
                  <tr>
                    <th>WEATHER:</th>
                    <td style="padding-left: 10px">${weather}</td>
                    <th>DATE:</th>
                    <td style="padding-left: 10px">${date}</td>
                    <th>SHIFT:</th>
                    <td style="padding-left: 10px">${shift}</td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                  <tr>
                    <th colspan="6">ACTIVITIES:</th>
                  </tr>
                  <tr>
                    <td colspan="6" style="padding-left: 10px">${activities}</td>
                  </tr>
                  <tr>
                    <th colspan="6">PLANT AND EQUIPMENT:</th>
                  </tr>
                  <tr>
                    <td colspan="6" style="padding-left: 10px">${plantEQ}</td>
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
                    <td style="padding-left: 10px">${SMEC_Ins}</td>
                    <td>SMEC ENGINEER</td>
                    <td colspan="3" style="padding-left: 10px">${SMEC_Eng}</td>
                  </tr>
                  <tr>
                    <td>CGGC INSPECTORS</td>
                    <td style="padding-left: 10px">${CGGC_Ins}</td>
                    <td>SITE FOREMAN</td>
                    <td colspan="3" style="padding-left: 10px">${site_foreman}</td>
                  </tr>
                  <tr>
                    <td>SAFETY OFFICER</td>
                    <td style="padding-left: 10px">${safety_officer}</td>
                    <td>PLANT OPERATOR</td>
                    <td colspan="3" style="padding-left: 10px">${plant_operator}</td>
                  </tr>
                  <tr>
                    <td>DRIVERS</td>
                    <td style="padding-left: 10px">${drivers}</td>
                    <td>UNSKILLED LABOUR</td>
                    <td colspan="3" style="padding-left: 10px">${unskilled_labour}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>WELDER</td>
                    <td colspan="3" style="padding-left: 10px">${welder}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>CHINESE STAFF</td>
                    <td colspan="3" style="padding-left: 10px">${chinese_staff}</td>
                  </tr>
                  <tr>
                    <th colspan="6">REMARKS/OBSERVATION:</th>
                  </tr>
                  <tr>
                    <td>SMEC</td>
                    <td colspan="5">CGGC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </body>
          </html>
          `,
        fileName: date,
        options: {
          textAlign: "left",
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("pdfLink").innerHTML =
          "<a href='" + res.pdf + "'>DOWNLOAD</a>";
        console.log(res.pdf);
      });
  };

  return (
    <>
      <div className="DailyReport_Container">
        <div className="DailyReportTable_Container" ref={reportRef}>
          <h1>Daily Report Form</h1>
          <table>
            <tbody>
              <tr>
                <th colSpan="6">
                  CIVIL WORKS FOR CONSTRUCTION OF THWAKE DAM EMBARKMENT AND
                  ASSOCIATED WORKS
                </th>
              </tr>
              <tr>
                <th>INSPECTOR'S</th>
                <td colSpan="1"></td>
                <th>SECTION:</th>
                <td colSpan="4">{section}</td>
              </tr>
              <tr>
                <th>WEATHER:</th>
                <td>{weather}</td>
                <th>DATE:</th>
                <td>{date}</td>
                <th>SHIFT:</th>
                <td>{shift}</td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <th colSpan="6">ACTIVITIES:</th>
              </tr>
              <tr>
                <td colSpan="6">{activities}</td>
              </tr>
              <tr>
                <th colSpan="6">PLANT AND EQUIPMENT:</th>
              </tr>
              <tr>
                <td colSpan="6">{plantEQ}</td>
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
                <td>{SMEC_Ins}</td>
                <td>SMEC ENGINEER</td>
                <td colSpan="3">{SMEC_Eng}</td>
              </tr>
              <tr>
                <td>CGGC INSPECTORS</td>
                <td>{CGGC_Ins}</td>
                <td>SITE FOREMAN</td>
                <td colSpan="3">{site_foreman}</td>
              </tr>
              <tr>
                <td>SAFETY OFFICER</td>
                <td>{safety_officer}</td>
                <td>PLANT OPERATOR</td>
                <td colSpan="3">{plant_operator}</td>
              </tr>
              <tr>
                <td>DRIVERS</td>
                <td>{drivers}</td>
                <td>UNSKILLED LABOUR</td>
                <td colSpan="3">{unskilled_labour}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>WELDER</td>
                <td colSpan="3">{welder}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>CHINESE STAFF</td>
                <td colSpan="3">{chinese_staff}</td>
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
          <p id="pdfLink"></p>
        </div>
        <button className="Submit_Button" onClick={onButtonClick}>
          Generate Link
        </button>
      </div>
    </>
  );
};

export default DailyReport;
