import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../stylesheets/dredit.scss";

const DREditDams = (props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      Weather: "",
      Date: "",
      Shift: "",
      Activities: "",
      PlantEQ: "",
      // RockType: "",
      // Number_Of_Trips: "",
      rocktrip: "",
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rocktrip",
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

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await fetch(props.fetchLinkPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    navigate(props.navigateLink);
  };

  return (
    <div className="DREdit_Container container-fluid">
      <div className="row">
        <div className="col-12">
          <form
            className="Form_Container card"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="Weather_Container daily-report-form-block">
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
                  render={({ field: { onChange, value, field } }) => (
                    <DesktopDatePicker
                      {...field}
                      label="Date"
                      value={value}
                      onChange={onChange}
                      disableMaskedInput
                      inputFormat="dd MMMM yyyy"
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className="Shift_Container daily-report-form-block">
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
            <label className="Input_Label daily-report-form-block Bold_Text">
              <p>
                Press space then enter to go to a new line
                <strong>(Phone Users)</strong>
              </p>
            </label>
            <div className="ActandPlant_Container daily-report-form-block">
              <label className="Input_Label">Activities</label>
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
              <label className="Input_Label">Plant & Equipment</label>
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

            <ul>
              {fields.map((item, index) => {
                return (
                  <li key={item.id}>
                    <div className="Rocktype_Container daily-report-form-flex">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Rock type
                        </InputLabel>
                        <Controller
                          control={control}
                          name={`rocktrip.${index}.RockType`}
                          defaultValue={"None"}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={value}
                              label="RockType"
                              onChange={onChange}
                            >
                              <MenuItem value={"2A2"}>2A2</MenuItem>
                              <MenuItem value={"3A"}>3A</MenuItem>
                              <MenuItem value={"3B"}>3B</MenuItem>
                              <MenuItem value={"3C"}>3C</MenuItem>
                              <MenuItem value={"Oversize Rocks"}>
                                Oversize Rocks
                              </MenuItem>
                            </Select>
                          )}
                        />
                      </FormControl>
                      <TextField
                        id="outlined-number"
                        {...register(`rocktrip.${index}.Number_Of_Trips`, {
                          required: true,
                        })}
                        label="NO. OF TRIPS"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        className="no-of-trips"
                      />
                    </div>
                    <button
                      type="button"
                      className="Submit_Button daily-report-form-block"
                      onClick={() => remove(index)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              className="Submit_Button daily-report-form-block"
              onClick={() => append()}
            >
              Add no. of trips for rocks
            </button>
            <label className="Input_Label daily-report-form-block Bold_Text">
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
                className="Submit_Button daily-report-form-block"
                type="submit"
              >
                <span className="submit-span">Submit Form</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DREditDams;
