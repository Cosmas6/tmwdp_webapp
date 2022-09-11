import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../stylesheets/dailyreport.scss";

const DailyReport = () => {
  // const [report, setReport] = useState([]);
  // const currentData = useSelector((state) => state.repData);
  // console.log(currentData, "currentData");



  // const onButtonClick = () => {
  //   fetch("https://v2018.api2pdf.com/chrome/html", {
  //     method: "post",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: "e11aaf91-5cf3-4c53-958a-a3304484ea8e",
  //     },
  //     body: JSON.stringify({
  //       html: `
  //         <html style="color: green" lang="en">
  //         <head>
  //           <title>Daily Report for ${report.Date}</title>
  //           <link
  //             href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  //             rel="stylesheet"
  //             integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  //             crossorigin="anonymous"
  //           />
  //         </head>
  //         <body>
  //           <div className="DailyReportTable_Container ">
  //             <table
  //               class="table table-bordered border-dark table-sm"
  //               style="width: 900px;"
  //             >
  //               <tbody>
  //                 <tr>
  //                   <th colspan="6" class="text-center">
  //                     CIVIL WORKS FOR CONSTRUCTION OF THWAKE DAM EMBARKMENT AND
  //                     ASSOCIATED WORKS
  //                   </th>
  //                 </tr>
  //                 <tr>
  //                   <th>INSPECTOR'S</th>
  //                   <td colspan="1"></td>
  //                   <th>SECTION:</th>
  //                   <td colspan="4" style="padding-left: 10px">${report.Section}</td>
  //                 </tr>
  //                 <tr>
  //                   <th>WEATHER:</th>
  //                   <td style="padding-left: 10px">${report.Weather}</td>
  //                   <th>DATE:</th>
  //                   <td style="padding-left: 10px">${report.Date}</td>
  //                   <th>SHIFT:</th>
  //                   <td style="padding-left: 10px">${report.Shift}</td>
  //                 </tr>
  //                 <tr></tr>
  //                 <tr></tr>
  //                 <tr>
  //                   <th colspan="6">ACTIVITIES:</th>
  //                 </tr>
  //                 <tr>
  //                   <td colspan="6" style="padding-left: 10px">${report.Activities}</td>
  //                 </tr>
  //                 <tr>
  //                   <th colspan="6">PLANT AND EQUIPMENT:</th>
  //                 </tr>
  //                 <tr>
  //                   <td colspan="6" style="padding-left: 10px">${report.PlantEQ}</td>
  //                 </tr>
  //                 <tr>
  //                   <th colspan="6">LABOUR</th>
  //                 </tr>
  //                 <tr></tr>
  //                 <tr>
  //                   <th>DESCRIPTION</th>
  //                   <th>NO</th>
  //                   <th>DESCRIPTION</th>
  //                   <th colspan="3">NO</th>
  //                 </tr>
  //                 <tr>
  //                   <td width="40%">SMEC INSPECTORS</td>
  //                   <td style="padding-left: 10px">${report.SMEC_Ins}</td>
  //                   <td>SMEC ENGINEER</td>
  //                   <td colspan="3" style="padding-left: 10px">${report.SMEC_Eng}</td>
  //                 </tr>
  //                 <tr>
  //                   <td>CGGC INSPECTORS</td>
  //                   <td style="padding-left: 10px">${report.CGGC_Ins}</td>
  //                   <td>SITE FOREMAN</td>
  //                   <td colspan="3" style="padding-left: 10px">${report.Site_foreman}</td>
  //                 </tr>
  //                 <tr>
  //                   <td>SAFETY OFFICER</td>
  //                   <td style="padding-left: 10px">${report.Safety_officer}</td>
  //                   <td>PLANT OPERATOR</td>
  //                   <td colspan="3" style="padding-left: 10px">${report.Plant_operator}</td>
  //                 </tr>
  //                 <tr>
  //                   <td>DRIVERS</td>
  //                   <td style="padding-left: 10px">${report.Drivers}</td>
  //                   <td>UNSKILLED LABOUR</td>
  //                   <td colspan="3" style="padding-left: 10px">${report.Unskilled_labour}</td>
  //                 </tr>
  //                 <tr>
  //                   <td></td>
  //                   <td></td>
  //                   <td>WELDER</td>
  //                   <td colspan="3" style="padding-left: 10px">${report.Welder}</td>
  //                 </tr>
  //                 <tr>
  //                   <td></td>
  //                   <td></td>
  //                   <td>CHINESE STAFF</td>
  //                   <td colspan="3" style="padding-left: 10px">${report.Chinese_staff}</td>
  //                 </tr>
  //                 <tr>
  //                   <th colspan="6">REMARKS/OBSERVATION:</th>
  //                 </tr>
  //                 <tr>
  //                   <td>SMEC</td>
  //                   <td colspan="5">CGGC</td>
  //                 </tr>
  //               </tbody>
  //             </table>
  //           </div>
  //         </body>
  //         </html>
  //         `,
  //       fileName: date,
  //       options: {
  //         textAlign: "left",
  //         height: "7in",
  //       },
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       document.getElementById("pdfLink").innerHTML =
  //         "<a href='" + res.pdf + "'>DOWNLOAD</a>";
  //       console.log(res.pdf);
  //     });
  // };

  return (
    <>
      {/* <div className="DailyReport_Container">
        <div className="DailyReportTable_Container">
          <h1 className="title drf-title">Daily Report Form</h1>
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
                <td colSpan="3">{report.Site_foreman}</td>
              </tr>
              <tr>
                <td>SAFETY OFFICER</td>
                <td>{report.Safety_officer}</td>
                <td>PLANT OPERATOR</td>
                <td colSpan="3">{report.Plant_operator}</td>
              </tr>
              <tr>
                <td>DRIVERS</td>
                <td>{report.Drivers}</td>
                <td>UNSKILLED LABOUR</td>
                <td colSpan="3">{report.Unskilled_labour}</td>
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
                <td colSpan="3">{report.Chinese_staff}</td>
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
      </div> */}
    </>
  );
};

export default DailyReport;
