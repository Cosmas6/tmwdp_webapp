import React, { useRef } from "react";
import axios from "axios";
import "./stylesheets/dailyreport.scss";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

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
    domtoimage
      .toPng(reportRef.current)
      .then((dataUrl) => {
        const doc = new jsPDF();
        doc.addImage(dataUrl, "PNG", 0, 0);
        doc.save(date);
        var pdf = doc.output("datauristring");
        axios.post("http://localhost:4000/multer", pdf).then((res) => {
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
        // var img = canvas.toDataURL();
        // window.open(img);
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
              <th colSpan="6">{activities}</th>
              <tr>
                <th colSpan="6">PLANT AND EQUIPMENT:</th>
              </tr>
              <th colSpan="6">{plantEQ}</th>
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
          </table>
        </div>
        <button className="Submit_Button" onClick={onButtonClick}>
          Save File
        </button>
      </div>
    </>
  );
};

export default DailyReport;
