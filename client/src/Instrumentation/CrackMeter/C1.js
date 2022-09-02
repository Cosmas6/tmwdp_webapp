import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { useForm, Controller } from "react-hook-form";
import "../../stylesheets/InstSections/crackmeter1.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CreateReadingC1() {
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
    alert(data);
    // When a post request is sent to the create url, we'll add a new record to the database.
    // const newReading = { ...data };
    // console.log(newReading, "newReading");

    // await fetch("http://localhost:4000/C1Router/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).catch((error) => {
    //   window.alert(error);
    //   return;
    // });

    // navigate("/dashboard/readingC1");
  };
  return (
    <div className="C1_Container">
      <h1>Crack Meter C1 readings</h1>
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
        {/* Date needs a different input */}
        <div className="Date_Input">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              control={control}
              name="DateOfReading"
              defaultValue={new Date()}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  label="Date Of Reading"
                  inputFormat="DD/MM/YYYY"
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
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="X1"
            {...register("X1", { required: true })}
          />
          <TextField
            id="X2"
            label="X2"
            type="number"
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
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="Y1"
            {...register("Y1", { required: true })}
          />
          <TextField
            id="Y2"
            label="Y2"
            type="number"
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
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="Z1"
            {...register("Z1", { required: true })}
          />
          <TextField
            id="Z2"
            label="Z2"
            type="number"
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
    </div>
  );
}

export function EditReadingC1() {
  const [form, setForm] = useState({
    CrackMeter: "",
    DateOfReading: "",
    X1: "",
    X2: "",
    Y1: "",
    Y2: "",
    Z1: "",
    Z2: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:4000/C1Router/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const reading = await response.json();
      if (!reading) {
        window.alert(`Reading with id ${id} not found`);
        navigate("/readingC1");
        return;
      }

      setForm(reading);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedReading = {
      CrackMeter: form.CrackMeter,
      DateOfReading: form.DateOfReading,
      X1: form.X1,
      X2: form.X2,
      Y1: form.Y1,
      Y2: form.Y2,
      Z1: form.Z1,
      Z2: form.Z2,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:4000/C1Router/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedReading),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/dashboard/readingC1");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="C1_Container">
      <h1>Crack Meter C1 readings</h1>
      <form className="Form_Container" onSubmit={onSubmit}>
        {/* CrackMeter needs a different input */}
        <div className="Crack_Meter_Input">
          <label htmlFor="crackmeter-input" className="Input_Label">
            Crack Meter
          </label>
          <input
            type="text"
            className="Form_Input"
            id="crackmeter"
            name="crackmeter-input"
            value={form.CrackMeter}
            onChange={(e) => updateForm({ CrackMeter: e.target.value })}
          />
        </div>
        {/* Date needs a different input */}
        <div className="Date_Input">
          <label htmlFor="date-input" className="Input_Label">
            Date Of Reading
          </label>
          <input
            type="text"
            className="Form_Input"
            id="date"
            name="date-input"
            value={form.DateOfReading}
            onChange={(e) => updateForm({ DateOfReading: e.target.value })}
          />
        </div>
        <div className="X-group">
          <TextField
            id="outlined-number"
            label="X1"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="X1"
            onChange={(e) => updateForm({ x1: e.target.value })}
          />
          <label htmlFor="X1" className="Input_Label">
            X1
          </label>
          <input
            type="number"
            className="Form_Input"
            name="X1"
            id="X1"
            value={form.X1}
            onChange={(e) => updateForm({ x1: e.target.value })}
          />
          <label htmlFor="X2" className="Input_Label">
            X2
          </label>
          <input
            type="number"
            className="Form_Input"
            name="X2"
            id="X2"
            value={form.X2}
            onChange={(e) => updateForm({ x2: e.target.value })}
          />
        </div>

        <div className="Y-group">
          <label htmlFor="Y1" className="Input_Label">
            Y1
          </label>
          <input
            type="number"
            className="Form_Input"
            name="Y1"
            id="Y1"
            value={form.Y1}
            onChange={(e) => updateForm({ y1: e.target.value })}
          />
          <label htmlFor="Y2" className="Input_Label">
            Y2
          </label>
          <input
            type="number"
            className="Form_Input"
            name="Y2"
            id="Y2"
            value={form.Y2}
            onChange={(e) => updateForm({ y2: e.target.value })}
          />
        </div>

        <div className="Z-group">
          <label htmlFor="Z1" className="Input_Label">
            Z1
          </label>
          <input
            type="number"
            className="Form_Input"
            name="Z1"
            id="Z1"
            value={form.Z1}
            onChange={(e) => updateForm({ z1: e.target.value })}
          />
          <label htmlFor="Z2" className="Input_Label">
            Z2
          </label>
          <input
            type="number"
            className="Form_Input"
            name="Z2"
            id="Z2"
            value={form.Z2}
            onChange={(e) => updateForm({ z2: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input type="submit" value="Submit" className="Submit_Button" />
        </div>
      </form>
    </div>
  );
}

const Reading = (props) => (
  <tr>
    <td>{props.reading.CrackMeter}</td>
    <td>{props.reading.DateOfReading}</td>
    <td>{props.reading.X1}</td>
    <td>{props.reading.X2}</td>
    <td>{props.reading.Y1}</td>
    <td>{props.reading.Y2}</td>
    <td>{props.reading.Z1}</td>
    <td>{props.reading.Z2}</td>
    <td>
      <Link
        className="btn btn-link"
        to={`/dashboard/editReadingC1/${props.reading._id}`}
      >
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.reading._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export function ReadingListC1() {
  const [readings, setReadings] = useState([]);
  useEffect(() => {
    async function getReadings() {
      const response = await fetch(`http://localhost:4000/C1Router`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const readings = await response.json();
      setReadings(readings);
    }

    getReadings();

    return;
  }, [readings.length]);

  async function deleteRecord(id) {
    await fetch(`http://localhost:4000/C1Router/${id}`, {
      method: "DELETE",
    });

    const newReadings = readings.filter((el) => el._id !== id);
    setReadings(newReadings);
  }

  function readingList() {
    return readings.map((reading) => {
      return (
        <Reading
          reading={reading}
          deleteRecord={() => deleteRecord(reading._id)}
          key={reading._id}
        />
      );
    });
  }

  return (
    <div className="C1_Container">
      <div className="C1_Table_Container">
        <h3>Reading List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Crack Meter</th>
              <th>Date Of Reading</th>
              <th>X1</th>
              <th>X2</th>
              <th>Y1</th>
              <th>Y2</th>
              <th>Z1</th>
              <th>Z2</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{readingList()}</tbody>
        </table>
      </div>
    </div>
  );
}
