import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Actions from "./store/actions";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import db from "../firebase.config.js";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import "./stylesheets/dailyreportform.scss";
import DailyReport from "./DailyReport.js";
const documentTest = new jsPDF();

const DailyReportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const navigate = useNavigate();

  const [datevalue, setDateValue] = useState();

  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    setDateValue(newValue);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const newReportRef = doc(collection(db, "daily-report"));
      await setDoc(newReportRef, {
        Email: data.Email,
        Date: data.Date,
        Weather: data.Weather,
        Activities: data.Activities,
        Timestamp: serverTimestamp(),
      });
      //place an alert later

      const docSnap = await getDoc(newReportRef);
      if (docSnap.exists()) {
        dispatch(Actions.setID(docSnap.id));
        console.log(docSnap.data(), "docSnap data");
      } else {
        console.log("No such document!");
      }

      console.log("submit successful");
      navigate("/submitsuccess");
    } catch (err) {
      console.log(err);
    } finally {
    }

    // console.log("isSubmitted", isSubmitted);
  };

  const save = () => {
    const pdfElement = pdfRef.current;
    documentTest.html(ReactDOMServer.renderToStaticMarkup(pdfElement), {
      callback: () => {
        documentTest.save("myDocument.pdf");
      },
    });
  };

  return (
    <div className="DailyReportForm_Container">
      <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}>
        <label className="Input_Label">Email</label>
        <input
          className="Form_Input"
          type="text"
          id="email"
          {...register("Email", {
            required: true,
          })}
        />
        <div className="Date_Container">
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              label="Date"
              inputFormat="dd/MM/yyyy"
              {...register("Date", { required: true })}
              value={datevalue}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="Weather_Container">
          <label className="Input_Label">Weather</label>
          <RadioGroup
            aria-labelledby="Weather"
            defaultValue="Sunny"
            name="radio-buttons-group"
          >
            <FormControlLabel
              {...register("Weather", { required: true })}
              value="Sunny"
              control={<Radio />}
              label="Sunny"
            />
            <FormControlLabel
              {...register("Weather", { required: true })}
              value="Cloudy"
              control={<Radio />}
              label="Cloudy"
            />
          </RadioGroup>
        </div>
        <label className="Input_Label">Activities</label>
        <input
          className="Form_Input"
          type="text"
          id="activities"
          {...register("Activities", {
            required: true,
          })}
        />
        <h4>Hello World!</h4>
        <button className="Submit_Button" type="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default DailyReportForm;
