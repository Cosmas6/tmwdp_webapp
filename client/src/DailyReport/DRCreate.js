import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import "../stylesheets/drcreate.scss";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const DRCreate = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm();
  const navigate = useNavigate();

  const location = useLocation();
  const selectedDate = location.state
    ? new Date(location.state.selectedDate).toISOString()
    : new Date().toISOString();

  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = cookies.get("TOKEN");
    const configuration = {
      method: "get",
      url: "https://nodejs.tmwdp.co.ke/login/currentUser",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        if (!result) {
          navigate("/login");
        }
        const userResult =
          `${result.data.userFirstName}` + ` ` + `${result.data.userLastName}`;
        setUserInfo(userResult);
      })
      .catch((error) => {
        //initialize error
        error = new Error();
      });
  }, []);

  const onSubmit = async (data, e) => {
    setLoading(true);
    e.preventDefault();
    const output = {
      ...data,
      User: userInfo,
    };
    await fetch(props.fetchLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(output),
    }).catch((error) => {
      setLoading(false);
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
    <div className="DRCreate_Container container-fluid">
      <div className="row">
        <div className="col-12">
          <form
            className="form-container card"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="Section_Container daily-report-form-block">
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
            <div className="Weather_Container daily-report-form-block">
              <label className="input-label">Weather</label>
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
                  defaultValue={selectedDate}
                  render={({ field: { onChange, value } }) => (
                    <DesktopDatePicker
                      label="Date"
                      inputFormat="dd MMMM yyyy"
                      disableMaskedInput
                      value={new Date(value)}
                      onChange={(date) => onChange(date.toISOString())}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            <div className="Shift_Container daily-report-form-block">
              <label className="input-label">Shift</label>
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
            <label className="input-label daily-report-form-block Bold_Text">
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
                  required: "This field is required",
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
              <ErrorMessage
                errors={errors}
                name="Activities"
                render={({ message }) => (
                  <p className="text-danger mt-2">{message}</p>
                )}
              />
            </div>
            <div className="ActandPlant_Container daily-report-form-block">
              <Controller
                name="PlantEQ"
                control={control}
                rules={{
                  required: "This field is required",
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
              <ErrorMessage
                errors={errors}
                name="PlantEQ"
                render={({ message }) => (
                  <p className="text-danger mt-2">{message}</p>
                )}
              />
            </div>
            <label className="input-label daily-report-form-block Bold_Text">
              Labour Force count
            </label>
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
                className="submit-button daily-report-form-flex"
                type="submit"
              >
                {loading ? (
                  <div className="Loading_Div_Buttons">
                    <TailSpin
                      height="30"
                      width="40"
                      color="#ffffff"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  <span className="submit-span">Submit Form</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DRCreate;
