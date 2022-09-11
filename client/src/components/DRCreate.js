import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import "../stylesheets/drcreate.scss";

const DRCreate = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/signin");
    }
  }, []);

  const [email, setEmail] = useState("");
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const emailAddress = user.email;
        setEmail(emailAddress);
      } else {
      }
    });
  }, []);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await fetch(`http://localhost:4000/DailyRSpillwayRouter/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    navigate(`/dashboard/readingDReport`);
  };

  return (
    <div className="DRCreate_Container">
      <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}>
        <div className="User_Container daily-report-form-flex">
          <TextField
            id="user-email"
            label="User Email"
            type="text"
            value={email}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ readOnly: true }}
            className="crack-meter"
            {...register("UserEmail", { required: true })}
          />
        </div>
        <div className="Section_Container daily-report-form-flex">
          <label className="Input_Label">Section</label>

          <Controller
            control={control}
            rules={{ required: true }}
            name="Section"
            defaultValue="Spillway"
            render={({ field }) => (
              <RadioGroup
                {...field}
                aria-labelledby="Section"
                defaultValue="Spillway"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Spillway"
                  control={<Radio />}
                  label="Spillway"
                />
                <FormControlLabel
                  value="Tunnels"
                  control={<Radio />}
                  label="Tunnels"
                />
              </RadioGroup>
            )}
          />
        </div>
        <div className="Weather_Container daily-report-form-flex">
          <label className="Input_Label">Weather</label>
          <Controller
            control={control}
            rules={{ required: true }}
            name="Weather"
            defaultValue="Sunny"
            render={({ field }) => (
              <RadioGroup
                {...field}
                aria-labelledby="Weather"
                defaultValue="Sunny"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Sunny"
                  control={<Radio />}
                  label="Sunny"
                />
                <FormControlLabel
                  value="Cloudy"
                  control={<Radio />}
                  label="Cloudy"
                />
              </RadioGroup>
            )}
          />
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
          <Controller
            control={control}
            rules={{ required: true }}
            name="Shift"
            defaultValue="Dayshift"
            render={({ field }) => (
              <RadioGroup
                {...field}
                aria-labelledby="Shift"
                defaultValue="Dayshift"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Dayshift"
                  control={<Radio />}
                  label="Dayshift"
                />
                <FormControlLabel
                  value="Nightshift"
                  control={<Radio />}
                  label="Nightshift"
                />
              </RadioGroup>
            )}
          />
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
          >
            <span className="submit-span">Submit Form</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DRCreate;
