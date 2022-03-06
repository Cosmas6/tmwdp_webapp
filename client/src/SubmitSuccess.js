import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./stylesheets/submitsuccess.scss";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase.config.js";
import DailyReport from "./DailyReport";

const SubmitSuccess = () => {
  const navigate = useNavigate();
  const [document, setDocument] = useState([]);
  const ref = useRef();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      // navigate("/dashboard");
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
      <div ref={ref}>
        <DailyReport
          reportKey={reportData.id}
          email={document.Email}
          activities={document.Activities}
        />
      </div>

    </>
  );
};

export default SubmitSuccess;
