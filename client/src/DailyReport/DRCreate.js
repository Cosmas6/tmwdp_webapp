import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from "../../firebase.config";
import "../stylesheets/drcreate.scss";

const DRCreate = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm();
  const navigate = useNavigate();

  // const [emailAddr, setEmailAddr] = useState("");
  const auth = getAuth();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const emailAddress = user.email;
  //       setEmailAddr(emailAddress);
  //       console.log(emailAddress);
  //     } else {
  //     }
  //   });
  // }, []);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/signin");
    }
  }, []);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await fetch(props.fetchLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    navigate(props.dataLink);
  };

  const mods = {
    keyboard: {
      bindings: keyboardBindings,
    },
  };

  const keyboardBindings = {
    linebreak: {
      key: 13,
      handler: function (range, _context) {
        this.quill.clipboard.dangerouslyPasteHTML(range.index, "<br/>");
      },
    },
    linebreak: {
      key: "enter",
      handler: function (range, _context) {
        this.quill.clipboard.dangerouslyPasteHTML(range.index, "<br/>");
      },
    },
  };

  return (
    <div className="DRCreate_Container">
      <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="Email_Container daily-report-form-flex">
          <Controller
            control={control}
            rules={{ required: true }}
            name="Email"
            defaultValue={emailAddr}
            render={({ field }) => (
              <TextField
                id="outlined-read-only-input"
                label="Email"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                className="email-input"
              />
            )}
          />
        </div> */}

        <div className="Section_Container daily-report-form-flex">
          <TextField
            id="outlined-read-only-input"
            label="Section"
            defaultValue={props.sectionValue}
            {...register("Section", { required: true })}
            InputProps={{
              readOnly: true,
            }}
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
        <label className="Input_Label daily-report-form-block">
          <p>
            Press space then enter to go to a new line
            <strong>(Phone Users)</strong>
          </p>
        </label>
        <div className="ActandPlant_Container daily-report-form-block">
          <Controller
            name="Activities"
            control={control}
            rules={{
              required: true,
            }}
            theme="snow"
            render={({ field }) => (
              <ReactQuill
                {...field}
                modules={mods}
                placeholder={"Write Activities"}
                onChange={(text) => {
                  field.onChange(text);
                }}
              />
            )}
          />
        </div>
        <div className="ActandPlant_Container daily-report-form-block">
          <Controller
            name="PlantEQ"
            control={control}
            rules={{
              required: true,
            }}
            theme="snow"
            render={({ field }) => (
              <ReactQuill
                {...field}
                modules={mods}
                placeholder={"Write Plants and Equipment"}
                onChange={(text) => {
                  field.onChange(text);
                }}
              />
            )}
          />
        </div>
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
