import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import "../stylesheets/dredit.scss";

const DREdit = (props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      UserEmail: "",
      Section: "",
      Weather: "",
      Shift: "",
      Activities: "",
      PlantEQ: "",
      SMEC_Ins: "",
      CGGC_Ins: "",
      Safety_Officer: "",
      Drivers: "",
      SMEC_Eng: "",
      Site_Foreman: "",
      Plant_Operator: "",
      Unskilled_Labour: "",
      Welder: "",
      Chinese_Staff: "",
    },
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchReport() {
      const id = params.id.toString();
      const response = await fetch(props.fetchLink);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const report = await response.json();

      if (!report) {
        window.alert(`Reading with id ${id} not found`);
        navigate(props.navigateLink);
        return;
      }

      reset(report);
    }

    fetchReport();

    return;
  }, [params.id, navigate]);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/signin");
    }
  }, []);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const editedReport = {
      UserEmail: data.UserEmail,
      Section: data.Section,
      Weather: data.Weather,
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
    };
    await fetch(props.fetchLinkPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        window.alert(error);
        return;
      });

    navigate(props.navigateLink);
  };

  return (
    <div className="DREdit_Container">
      <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}>
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
        {/* <div className="Date_Container daily-report-form-flex">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              control={control}
              name="Date"
              defaultValue={new Date()}
              render={({ field: { onChange, value, field } }) => (
                <DesktopDatePicker
                  {...field}
                  label="Date"
                  value={new Date(value)}
                  onChange={onChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </LocalizationProvider>
        </div> */}
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

export default DREdit;
