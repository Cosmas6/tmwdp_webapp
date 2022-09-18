import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm, Controller } from "react-hook-form";
import "../../stylesheets/InstSections/createandedit.scss";

const CMFormCreate = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm();

  const navigate = useNavigate();

  // This function will handle the submission.
  const onSubmit = async (data, e) => {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.

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

  return (
    <div className="CM_Container">
      <h1>{props.cmName}</h1>
      <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}>
        <div className="Crack_Meter_Input daily-report-form-flex">
          <TextField
            id="crack-meter"
            label="Crack Meter"
            type="number"
            defaultValue={props.defaultValue}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ readOnly: true }}
            className="crack-meter"
            {...register("CrackMeter", { required: true })}
          />
        </div>
        <div className="Date_Input daily-report-form-flex">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              control={control}
              name="DateOfReading"
              defaultValue={new Date()}
              render={({ field: { onChange, value } }) => (
                <DesktopDatePicker
                  label="Date Of Reading"
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

        <div className="X-group">
          <TextField
            id="X1"
            label="X1"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            className="X1 daily-report-form-flex"
            {...register("X1", { required: true })}
          />
          <TextField
            id="X2"
            label="X2"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            className="X2 daily-report-form-flex"
            {...register("X2", { required: true })}
          />
        </div>

        <div className="Y-group">
          <TextField
            id="Y1"
            label="Y1"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            className="Y1 daily-report-form-flex"
            {...register("Y1", { required: true })}
          />
          <TextField
            id="Y2"
            label="Y2"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            className="Y2 daily-report-form-flex"
            {...register("Y2", { required: true })}
          />
        </div>

        <div className="Z-group">
          <TextField
            id="Z1"
            label="Z1"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            className="Z1 daily-report-form-flex"
            {...register("Z1", { required: true })}
          />
          <TextField
            id="Z2"
            label="Z2"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            className="Z2 daily-report-form-flex"
            {...register("Z2", { required: true })}
          />
        </div>
        <div className="form-group daily-report-form-flex">
          <input type="submit" value="Submit" className="Submit_Button" />
        </div>
      </form>
      <div className="view-data daily-report-form-flex">
        <Link className="Submit_Button" to={props.dataLink}>
          View Data
        </Link>
      </div>
      <div className="view-graph daily-report-form-flex">
        <Link className="Submit_Button" to={props.graphLink}>
          View Graph
        </Link>
      </div>
    </div>
  );
};

export default CMFormCreate;
