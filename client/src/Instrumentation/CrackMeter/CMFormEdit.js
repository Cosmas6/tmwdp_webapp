import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm, Controller } from "react-hook-form";
import "../../stylesheets/InstSections/createandedit.scss";

const CMFormEdit = (props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      DateOfReading: "",
      X1: "",
      X2: "",
      Y1: "",
      Y2: "",
      Z1: "",
      Z2: "",
    },
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(props.fetchLink);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const reading = await response.json();
      if (!reading) {
        window.alert(`Reading with id ${id} not found`);
        navigate(props.navigateLink);
        return;
      }

      reset(reading);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.

  async function onSubmit(data, e) {
    e.preventDefault();
    const editedReading = {
      CrackMeter: data.CrackMeter,
      DateOfReading: data.DateOfReading,
      X1: data.X1,
      X2: data.X2,
      Y1: data.Y1,
      Y2: data.Y2,
      Z1: data.Z1,
      Z2: data.Z2,
    };

    // This will send a post request to update the data in the database.
    await fetch(props.fetchLinkPost, {
      method: "POST",
      body: JSON.stringify(editedReading),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate(props.navigateLink);
  }

  return (
    <div className="CM_Container container-fluid">
      <div className="row">
        <div className="col-12">
          <form
            className="Form_Container card"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>{props.cmName}</h1>
            <div className="Crack_Meter_Input daily-report-form-flex">
              <TextField
                id="crack-meter"
                label="Crack Meter"
                type="number"
                defaultValue={1}
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
                  render={({ field: { onChange, value, field } }) => (
                    <DesktopDatePicker
                      {...field}
                      label="Date Of Reading"
                      inputFormat="dd MMMM yyyy"
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
                id="outlined-number"
                label="X1"
                type="text"
                step="any"
                InputLabelProps={{
                  shrink: true,
                }}
                className="X1 daily-report-form-flex"
                {...register("X1", { required: true })}
              />
              <TextField
                id="outlined-number"
                label="X2"
                type="text"
                step="any"
                InputLabelProps={{
                  shrink: true,
                }}
                className="X2 daily-report-form-flex"
                {...register("X2", { required: true })}
              />
            </div>

            <div className="Y-group">
              <TextField
                id="outlined-number"
                label="Y1"
                type="text"
                step="any"
                InputLabelProps={{
                  shrink: true,
                }}
                className="Y1 daily-report-form-flex"
                {...register("Y1", { required: true })}
              />
              <TextField
                id="outlined-number"
                label="Y2"
                type="text"
                step="any"
                InputLabelProps={{
                  shrink: true,
                }}
                className="Y2 daily-report-form-flex"
                {...register("Y2", { required: true })}
              />
            </div>

            <div className="Z-group">
              <TextField
                id="outlined-number"
                label="Z1"
                type="text"
                step="any"
                InputLabelProps={{
                  shrink: true,
                }}
                className="Z1 daily-report-form-flex"
                {...register("Z1", { required: true })}
              />
              <TextField
                id="outlined-number"
                label="Z2"
                type="text"
                step="any"
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
        </div>
      </div>
    </div>
  );
};

export default CMFormEdit;
