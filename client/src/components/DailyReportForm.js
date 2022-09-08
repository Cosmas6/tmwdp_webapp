import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import allActions from "../store/actions";
import "../stylesheets/dailyreportform.scss";

const DailyReportForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submitRes, setSubmitRes] = useState();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/signin");
    }
  }, []);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    dispatch(allActions.setDate(data.Date));
    await fetch(`http://localhost:4000/DailyRSpillwayRouter/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        const formButtonRef = formButton.current;
        const formLoaderRef = formLoader.current;
        if (response.statusText == "OK") {
          formButtonRef.style.display = "none";
          formLoaderRef.style.display = "block";
        } else {
          alert("FAILURE!");
        }
      })
      .catch((error) => {
        window.alert(error);
        return;
      });

    // navigate(`/dashboard/dailyreport`);
  };

  const formButton = useRef();
  const formLoader = useRef();

  function showDiv() {
    console.log(submitRes);
    // if (submitRes.statusText == "OK") {
    //   document.getElementById("Submit_Button").style.display = "none";
    //   document.getElementById("loadingGif").style.display = "block";
    // } else {
    //   alert("FAILURE!");
    // }

    // setTimeout(function () {
    //   document.getElementById("loadingGif").style.display = "none";
    //   document.getElementById("showme").style.display = "block";
    // }, 2000);
  }

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
        <div className="Weather_Container daily-report-form-flex">
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
            <Controller
              control={control}
              name="Date"
              defaultValue={new Date()}
              render={({ field: { onChange, value } }) => (
                <DesktopDatePicker
                  label="Date"
                  inputFormat="dd/MMM/yyyy"
                  disableMaskedInput
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
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
        <div className="submit-div">
          <button
            className="Submit_Button daily-report-form-flex"
            type="submit"
            ref={formButton}
          >
            <span className="submit-span">Submit Form</span>
          </button>
          <div className="loader" ref={formLoader}></div>
        </div>
      </form>
    </div>
  );
};

export default DailyReportForm;
