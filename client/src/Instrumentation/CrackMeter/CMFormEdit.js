import React,{useEffect} from "react";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm, Controller } from "react-hook-form";

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
    <form className="Form_Container" onSubmit={handleSubmit(onSubmit)}>
      <div className="Crack_Meter_Input">
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
      <div className="Date_Input">
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
          className="X1"
          {...register("X1", { required: true })}
        />
        <TextField
          id="X2"
          label="X2"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          className="X2"
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
          className="Y1"
          {...register("Y1", { required: true })}
        />
        <TextField
          id="Y2"
          label="Y2"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          className="Y2"
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
          className="Z1"
          {...register("Z1", { required: true })}
        />
        <TextField
          id="Z2"
          label="Z2"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          className="Z2"
          {...register("Z2", { required: true })}
        />
      </div>

      <div className="form-group">
        <input type="submit" value="Submit" className="Submit_Button" />
      </div>
    </form>
  );
};

export default CMFormEdit;
