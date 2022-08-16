import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Actions from "../store/actions";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import TextField from "@mui/material/TextField";
import db from "../../firebase.config.js";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import "../stylesheets/dailyreportform.scss";

const DailyReportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/signin");
    }
  }, []);

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
        Section: data.Section,
        Weather: data.Weather,
        Date: data.Date,
        Shift: data.Shift,
        Activities: data.Activities,
        PlantEQ: data.PlantEQ,
        SMEC_Ins: data.SMEC_Ins,
        CGGC_Ins: data.CGGC_Ins,
        Safety_Officer: data.Safety_Officer,
        Drivers: data.Drivers,
        SMEC_Eng: data.SMEC_Eng,
        Site_Foreman: data.Site_Foreman,
        Plant_Operator: data.Plant_Operator,
        Unskilled_Labour: data.Unskilled_Labour,
        Welder: data.Welder,
        Chinese_Staff: data.Chinese_Staff,
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

  return (
    <div className="DailyReportForm_Container">
      <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}>
        <div className="Section_Container daily-report-form-flex">
          <label className="Input_Label">Section</label>
          <RadioGroup
            aria-labelledby="Section"
            defaultValue="Spillway"
            name="radio-buttons-group"
          >
            <FormControlLabel
              {...register("Section", { required: true })}
              value="Spillway"
              control={<Radio />}
              label="Spillway"
            />
            <FormControlLabel
              {...register("Section", { required: true })}
              value="Tunnels"
              control={<Radio />}
              label="Tunnels"
            />
          </RadioGroup>
        </div>
        <div className="Weather_Container daily-report-form-flex" >
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
        <div className="Date_Container daily-report-form-flex">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
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
        <div className="Shift_Container daily-report-form-flex">
          <label className="Input_Label">Shift</label>
          <RadioGroup
            aria-labelledby="Shift"
            defaultValue="Dayshift"
            name="radio-buttons-group"
          >
            <FormControlLabel
              {...register("Shift", { required: true })}
              value="Dayshift"
              control={<Radio />}
              label="Dayshift"
            />
            <FormControlLabel
              {...register("Shift", { required: true })}
              value="Nightshift"
              control={<Radio />}
              label="Nightshift"
            />
          </RadioGroup>
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Activities"
          {...register("Activities", { required: true })}
          multiline
          rows={8}
          defaultValue=""
          className="daily-report-form-flex"
        />
        <TextField
          id="outlined-multiline-static"
          {...register("PlantEQ", { required: true })}
          label="Plant and Equipment"
          multiline
          rows={8}
          defaultValue=""
          className="daily-report-form-flex"
        />
        <div className="numbers">
          <TextField
            id="outlined-number"
            {...register("SMEC_Ins", { required: true })}
            label="SMEC INSPECTORS"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("CGGC_Ins", { required: true })}
            label="CGGC INSPECTORS"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("Safety_Officer", { required: true })}
            label="SAFETY OFFICER"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("Drivers", { required: true })}
            label="DRIVERS"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("SMEC_Eng", { required: true })}
            label="SMEC ENGINEER"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("Site_Foreman", { required: true })}
            label="SITE FOREMAN"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("Plant_Operator", { required: true })}
            label="PLANT OPERATOR"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("Unskilled_Labour", { required: true })}
            label="UNSKILLED LABOUR"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("Welder", { required: true })}
            label="WELDER"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
          <TextField
            id="outlined-number"
            {...register("Chinese_Staff", { required: true })}
            label="CHINESE STAFF"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="daily-report-form-flex"
          />
        </div>
        {/* <label className="Input_Label">Email</label>
        <input
          className="Form_Input"
          type="text"
          id="email"
          {...register("Email", {
            required: true,
          })}
        />
        <input className="Form_Input" type="text" id="activities" /> */}
        <button className="Submit_Button daily-report-form-flex" type="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default DailyReportForm;
