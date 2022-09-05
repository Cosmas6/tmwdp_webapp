import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import "../../stylesheets/InstSections/crackmeter1.scss";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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
    alert(data.DateOfReading);
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newReading = { ...data };
    console.log(newReading, "newReading");

    await fetch("http://localhost:4000/C1Router/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    navigate("/dashboard/readingC1");
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
        <div className="Date_Input">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              control={control}
              name="DateOfReading"
              defaultValue={new Date()}
              render={({ field: { onChange, value } }) => (
                <DesktopDatePicker
                  label="Date Of Reading"
                  inputFormat="dd/MM/yyyy"
                  mask="__/__/____"
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
      <div className="view-data">
        <Link className="Extra_Button" to="/dashboard/readingC1">
          View Data
        </Link>
      </div>
      <div className="view-graph">
        <Link className="Extra_Button" to="/dashboard/graphC1">
          View Graph
        </Link>
      </div>
    </div>
  );
}

export function EditReadingC1() {
  // const [form, setForm] = useState([]);
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
  // console.log(form.X1);

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
        navigate("dashboard/readingC1");
        return;
      }

      reset(reading);
      // setForm(reading);
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
                  inputFormat="dd/MM/yyyy"
                  mask="__/__/____"
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
            step="0.01"
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
            step="0.01"
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
            step="0.01"
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
            step="0.01"
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
            step="0.01"
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
            step="0.01"
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

const Reading = (props) => {
  const dateString = new Date(String(props.reading.DateOfReading));
  const enUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <tr>
      <td>{props.reading.CrackMeter}</td>
      <td>{[enUSFormatter.format(dateString)].sort()}</td>
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
};

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
    console.log(readings);

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
          key={reading._id}
          reading={reading}
          deleteRecord={() => deleteRecord(reading._id)}
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
        <Link className="graph-link" to="/dashboard/graphC1">
          View Graph
        </Link>{" "}
        <Link className="graph-link" to="/dashboard/createReadingC1">
          Create Reading
        </Link>{" "}
      </div>
    </div>
  );
}

export function GraphC1() {
  const [readings, setReadings] = useState([]);
  useEffect(() => {
    async function getReadings() {
      const response = await fetch(`http://localhost:4000/C1Router/graphC1`);

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

  const data = [];

  function defandcumulList() {
    return readings.map((reading) => {
      const date = reading.DateOfReading;
      const X1int = parseFloat(reading.X1);
      const X2int = parseFloat(reading.X1);
      const Y1int = parseFloat(reading.Y1);
      const Y2int = parseFloat(reading.Y1);
      const Z1int = parseFloat(reading.Z1);
      const Z2int = parseFloat(reading.Z1);
      const defX = ((X1int + X2int) / 2).toFixed(2);
      const defY = ((Y1int + Y2int) / 2).toFixed(2);
      const defZ = ((Z1int + Z2int) / 2).toFixed(2);
      const cumulX = (defX - 28.53).toFixed(2);
      const cumulY = (defY - 27.52).toFixed(2);
      const cumulZ = (defZ - 19.68).toFixed(2);

      let d = {
        date: date,
        cumulX: cumulX,
        cumulY: cumulY,
        cumulZ: cumulZ,
      };

      data.push(d);
    });
  }

  return (
    <div className="ReactGraph_Container">
      <h1>C1 Graphical Layout</h1>
      <LineChart
        width={1200}
        height={600}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[-2.0, 1.5]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="cumulX"
          stroke="#0000FF"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="cumulY"
          stroke="#ff0000"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="cumulZ"
          stroke="#00FF00"
          strokeWidth={2}
        />
      </LineChart>
      {defandcumulList()}
      <Link className="graph-link" to="/dashboard/readingC1">
        View Data
      </Link>{" "}
    </div>
  );
}
