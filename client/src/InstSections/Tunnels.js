import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "../stylesheets/InstSections/tunnels.scss";

export function CreateTunnels() {
  const [form, setForm] = useState({
    instrument: "",
    no_instrument: "",
    location: "",
    x: "",
    y: "",
    remarks: "",
  });
  const navigate = useNavigate();
  const textFieldRef = useRef();

  useEffect(() => {
    const handleWheel = (e) => e.preventDefault();
    textFieldRef.current.addEventListener("wheel", handleWheel);

    return () => {
      textFieldRef.current.removeEventListener("wheel", handleWheel);
    };
  }, []);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
    console.log(newPerson, "newPerson");

    await fetch("http://localhost:4000/instTunnel/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setForm({
      instrument: "",
      no_instrument: "",
      location: "",
      x: "",
      y: "",
      remarks: "",
    });
    navigate("/recordListTunnels");
  };

  return (
    <div className="Tunnels_Form_Container">
      <h1>Tunnel Instrumentation</h1>
      <form className="Form_Container" onSubmit={onSubmit}>
        <div className="Instrument_Dropdown">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Type of Instrument
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={form.instrument}
                label="Type of Instrument"
                onChange={(e) => updateForm({ instrument: e.target.value })}
              >
                <MenuItem value={"Convergence Points"}>
                  Convergence Points
                </MenuItem>
                <MenuItem value={"Optical Survey Prisms"}>
                  Optical Survey Prisms
                </MenuItem>
                <MenuItem value={"VW Multipoint Extensometers"}>
                  VW Multipoint Extensometers
                </MenuItem>
                <MenuItem value={"VW Pressure Cells"}>
                  VW Pressure Cells
                </MenuItem>
                <MenuItem value={"Strain Gauges"}>Strain Gauges</MenuItem>
                <MenuItem value={"Surface Mount 3D crack meter array"}>
                  Surface Mount 3D crack meter array
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="no_instruments">
          <TextField
            id="outlined-number"
            label="No. of Instruments"
            value={form.no_instrument}
            onChange={(e) => updateForm({ no_instrument: e.target.value })}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            ref={textFieldRef}
          />
        </div>
        <div className="location">
          <label htmlFor="location-input" className="Input_Label">
            Location
          </label>
          <input
            type="text"
            className="Form_Input"
            id="location"
            name="location-input"
            value={form.location}
            onChange={(e) => updateForm({ location: e.target.value })}
          />
          <label htmlFor="x-input" className="Input_Label">
            X Coordinate
          </label>
          <input
            type="text"
            className="Form_Input"
            id="x"
            name="x-input"
            value={form.x}
            onChange={(e) => updateForm({ x: e.target.value })}
          />
          <label htmlFor="y-input" className="Input_Label">
            Y Coordinate
          </label>
          <input
            type="text"
            className="Form_Input"
            id="y"
            name="y-input"
            value={form.y}
            onChange={(e) => updateForm({ y: e.target.value })}
          />
        </div>
        <div className="remarks">
          <label htmlFor="remarks-input" className="Input_Label">
            Remarks
          </label>
          <input
            type="text"
            className="Form_Input"
            id="remarks"
            name="remarks-input"
            value={form.remarks}
            onChange={(e) => updateForm({ remarks: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="Submit_Button" />
        </div>
      </form>
    </div>
  );
}

export function EditTunnels() {
  const [form, setForm] = useState({
    instrument: "",
    no_instrument: "",
    location: "",
    x: "",
    y: "",
    remarks: "",
    // records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:4000/instTunnel/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const instrument = await response.json();
      if (!instrument) {
        window.alert(`Tunnel Instrument with id ${id} not found`);
        navigate("/recordListTunnels");
        return;
      }

      setForm(instrument);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedInstTunnel = {
      instrument: form.instrument,
      no_instrument: form.no_instrument,
      location: form.location,
      x: form.x,
      y: form.y,
      remarks: form.remarks,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:4000/instTunnel/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedInstTunnel),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/recordListTunnels");
  }

  return (
    <div className="Tunnels_Form_Container">
      <h1>Tunnel Instrumentation</h1>
      <form className="Form_Container" onSubmit={onSubmit}>
        <div className="Instrument_Dropdown">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Type of Instrument
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={form.instrument}
                label="Type of Instrument"
                onChange={(e) => updateForm({ instrument: e.target.value })}
              >
                <MenuItem value={"Convergence Points"}>
                  Convergence Points
                </MenuItem>
                <MenuItem value={"Optical Survey Prisms"}>
                  Optical Survey Prisms
                </MenuItem>
                <MenuItem value={"VW Multipoint Extensometers"}>
                  VW Multipoint Extensometers
                </MenuItem>
                <MenuItem value={"VW Pressure Cells"}>
                  VW Pressure Cells
                </MenuItem>
                <MenuItem value={"Strain Gauges"}>Strain Gauges</MenuItem>
                <MenuItem value={"Surface Mount 3D crack meter array"}>
                  Surface Mount 3D crack meter array
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="no_instruments">
          <TextField
            id="outlined-number"
            label="No. of Instruments"
            value={form.no_instrument}
            onChange={(e) => updateForm({ no_instrument: e.target.value })}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="location">
          <label htmlFor="location-input" className="Input_Label">
            Location
          </label>
          <input
            type="text"
            className="Form_Input"
            id="location"
            name="location-input"
            value={form.location}
            onChange={(e) => updateForm({ location: e.target.value })}
          />
          <label htmlFor="x-input" className="Input_Label">
            X Coordinate
          </label>
          <input
            type="text"
            className="Form_Input"
            id="x"
            name="x-input"
            value={form.x}
            onChange={(e) => updateForm({ x: e.target.value })}
          />
          <label htmlFor="y-input" className="Input_Label">
            Y Coordinate
          </label>
          <input
            type="text"
            className="Form_Input"
            id="y"
            name="y-input"
            value={form.y}
            onChange={(e) => updateForm({ y: e.target.value })}
          />
        </div>
        <div className="remarks">
          <label htmlFor="remarks-input" className="Input_Label">
            Remarks
          </label>
          <input
            type="text"
            className="Form_Input"
            id="remarks"
            name="remarks-input"
            value={form.remarks}
            onChange={(e) => updateForm({ remarks: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="Submit_Button" />
        </div>
      </form>
    </div>
  );
}

export function RecordListTunnels() {
  const Instrument = (props) => (
    <tr>
      <td>{props.instrument.instrument}</td>
      <td>{props.instrument.no_instrument}</td>
      <td>{props.instrument.location}</td>
      <td>{props.instrument.x}</td>
      <td>{props.instrument.y}</td>
      <td>{props.instrument.remarks}</td>

      <td>
        <Link
          className="btn btn-link"
          to={`/editTunnels/${props.instrument._id}`}
        >
          Edit
        </Link>{" "}
        |
        <button
          className="btn btn-link"
          onClick={() => {
            props.deleteInstrument(props.instrument._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );

  const [instruments, setInstruments] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getInstruments() {
      const response = await fetch(`http://localhost:4000/instTunnel`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const instruments = await response.json();
      setInstruments(instruments);
    }

    getInstruments();

    return;
  }, [instruments.length]);

  // This method will delete a record
  async function deleteInstrument(id) {
    await fetch(`http://localhost:4000/instTunnel/${id}`, {
      method: "DELETE",
    });

    const newInstruments = instruments.filter((el) => el._id !== id);
    setInstruments(newInstruments);
  }

  // This method will map out the records on the table
  function instrumentList() {
    return instruments.map((instrument) => {
      return (
        <Instrument
          instrument={instrument}
          deleteInstrument={() => deleteInstrument(instrument._id)}
          key={instrument._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div className="Tunnels_Container">
      <div className="Tunnels_Title">
        <h3>Tunnel Instruments</h3>
      </div>
      <table
        className="table table-bordered border-dark"
        style={{ marginTop: 20 }}
      >
        <thead>
          <tr>
            <th>Instruments</th>
            <th>No. of Instruments</th>
            <th>Location</th>
            <th colSpan="2">Coordinates</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <th colSpan="3"></th>
            <th>X</th>
            <th>Y</th>
          </tr>
        </thead>
        <tbody>{instrumentList()}</tbody>
      </table>
      <div className="Add_Instrument_Button">
        <button>Add Instrument</button>
      </div>
    </div>
  );
}

export function Tunnels() {
  return <div>Tunnel Individual Component</div>;
}
