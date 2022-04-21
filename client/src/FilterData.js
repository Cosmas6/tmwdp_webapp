import React, { useState, useEffect } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase.config.js";
import "./stylesheets/filterdata.scss";
import DailyReport from "./DailyReport";

const FilterData = () => {
  const [dateValue, setDateValue] = useState(null);
  const [data, setData] = useState([]);

  const handleChange = (newValue) => {
    setDateValue(newValue);
  };

  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

  const dateShow = () => {
    const Date =
      ("0" + dateValue.getDate()).slice(-2) +
      "/" +
      ("0" + (dateValue.getMonth() + 1)).slice(-2) +
      "/" +
      dateValue.getFullYear();

    const DateString = JSON.stringify(Date);

    console.log(DateString);

    retrieveData(Date);
  };

  const retrieveData = async (Date) => {
    console.log(Date + " in the retrieveData function");
    const q = query(collection(db, "daily-report"), where("Date", "==", Date));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setData((arr) => [
        ...arr,
        {
          id: doc.id,
          data: doc.data(),
        },
      ]);
    });
  };

  return (
    <div className="FilterData_Container">
      <h1>Select Date of Report</h1>
      <div className="Date_Container">
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DesktopDatePicker
            label="Date"
            inputFormat="dd/MM/yyyy"
            value={dateValue}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <button className="Submit_Button" onClick={dateShow} type="button">
        Display date
      </button>
      <div className="Daily_Report">
        <ul>
          {data &&
            data.map((dbData) => {
              return (
                <DailyReport
                  id={dbData.id}
                  key={dbData.id}
                  email={dbData.data.Email}
                  activities={dbData.data.Activities}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default FilterData;
