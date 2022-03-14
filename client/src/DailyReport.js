import React, { useState, useRef } from "react";
import axios from "axios";
import "./stylesheets/dailyreport.scss";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

const DailyReport = ({ reportKey, email, activities,date }) => {
  const reportRef = useRef();
  
  const onButtonClick = () => {
    toPng(reportRef.current, {
      cacheBust: true,
    })
      .then((dataUrl) => {
        const doc = new jsPDF();
        doc.addImage(dataUrl, "PNG", 0, 0);
        doc.save(date);
        var pdf = doc.output("datauristring");
        axios
          .post("http://localhost:4000/multer", pdf, {
          })
          .then((res) => {
            // then print response status
            console.log(res.statusText);
          });
        // const doc = new jsPDF();
        // doc.addImage(dataUrl, "PNG", 0, 0);
        // doc.save("PDF-File");
        // var formData = new FormData();
        // formData.append("pdf", dataUrl);
        // link.download = "my-image-name.png";
        // const doc = new jsPDF();
        // doc.addImage(dataUrl, "PNG", 0, 0);
        // setfilePdf(dataUrl);
        // var formData = new FormData();
        // formData.append("pdf", filePdf);
      })
      .catch((err) => {
        console.log(err);
      });

    // doc.save(filePdf);
    // doc.save("sample-file.pdf");
    // link.click();
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
                <th>SECTION:</th>
                <td colSpan="4">{email}</td>
              </tr>
              <tr>
                <th>WEATHER:</th>
                <td>{activities}</td>
                <th>DATE:</th>
                <td>{reportKey}</td>
                <th>TIME:</th>
                <td>{activities}</td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <th colSpan="6">ACTIVITIES:</th>
              </tr>
              <tr>
                <th colSpan="6">PLANT AND EQUIPMENT:</th>
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
                <td></td>
                <td>SMEC ENGINEER</td>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td>CGGC INSPECTORS</td>
                <td></td>
                <td>SITE FOREMAN</td>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td>SAFETY OFFICER</td>
                <td></td>
                <td>PLANT OPERATOR</td>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td>DRIVERS</td>
                <td></td>
                <td>UNSKILLED LABOUR</td>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>WELDER</td>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>CHINESE STAFF</td>
                <td colSpan="3"></td>
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
        <button onClick={onButtonClick}>Save File</button>
      </div>
    </>
  );
};

export default DailyReport;
