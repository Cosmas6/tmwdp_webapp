import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../stylesheets/submitsuccess.scss";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase.config";
import DailyReport from "./DailyReport";

const SubmitSuccess = () => {
  const navigate = useNavigate();
  const [document, setDocument] = useState([]);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/submitsuccess");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const reportData = useSelector((state) => state.repData);

  console.log(reportData.id, "reportData");

  //next we see if async can run on its own in

  const DailyReportGenerate = async () => {
    // navigate("/dailyreport");

    const docRef = doc(db, "daily-report", reportData.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setDocument(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    DailyReportGenerate();
  }, []);

  return (
    <>
      <div className="SubmitSuccess_Container">
        <h1>Submit Successful!</h1>
      </div>
      <DailyReport
        reportKey={reportData.id}
        section={document.Section}
        weather={document.Weather}
        date={document.Date}
        shift={document.Shift}
        activities={document.Activities}
        plantEQ={document.PlantEQ}
        SMEC_Ins={document.SMEC_Ins}
        CGGC_Ins={document.CGGC_Ins}
        safety_officer={document.Safety_Officer}
        drivers={document.Drivers}
        SMEC_Eng={document.SMEC_Eng}
        site_foreman={document.Site_Foreman}
        plant_operator={document.Plant_Operator}
        unskilled_labour={document.Unskilled_Labour}
        welder={document.Welder}
        chinese_staff={document.Chinese_Staff}
      />
    </>
  );
};

export default SubmitSuccess;
