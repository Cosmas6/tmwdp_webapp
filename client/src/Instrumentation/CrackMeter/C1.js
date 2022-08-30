import React, { useState, useEffect } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";

export default function CreateReadingC1() {
  const [form, setForm] = useState({
    CrackMeter: 1,
    DateOfReading: "",
    X1: "",
    X2: "",
    Y1: "",
    Y2: "",
    Z1: "",
    Z2: "",
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  const onSubmit = async (e) => {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newReading = { ...form };
    console.log(newReading, "newReading");

    await fetch("http://localhost:4000/C1Router/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReading),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setForm({
      CrackMeter: 1,
      DateOfReading: "",
      X1: "",
      X2: "",
      Y1: "",
      Y2: "",
      Z1: "",
      Z2: "",
    });
    navigate("/dashboard/readingC1");
  };
  return (
    <div className="Create_Container">
      <h1>Crack Meter C1 readings</h1>
      <form className="Form_Container" onSubmit={onSubmit}>
        {/* CrackMeter needs a different input */}
        <label htmlFor="crackmeter-input" className="Input_Label">
          Crack Meter
        </label>
        <input
          type="text"
          className="Form_Input"
          id="crackmeter"
          name="crackmeter-input"
          value={1}
          readOnly
          // onChange={(e) => updateForm({ CrackMeter: e.target.value })}
        />

        {/* Date needs a different input */}
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

        <div className="X-group">
          <label htmlFor="X1" className="Input_Label">
            X1
          </label>
          <input
            type="text"
            className="form-check-input"
            name="X1"
            id="X1"
            value={form.X1}
            onChange={(e) => updateForm({ X1: e.target.value })}
          />
          <label htmlFor="X2" className="Input_Label">
            X2
          </label>
          <input
            type="text"
            className="form-check-input"
            name="X2"
            id="X2"
            value={form.X2}
            onChange={(e) => updateForm({ X2: e.target.value })}
          />
        </div>

        <div className="Y-group">
          <label htmlFor="Y1" className="Input_Label">
            Y1
          </label>
          <input
            type="text"
            className="form-check-input"
            name="Y1"
            id="Y1"
            value={form.Y1}
            onChange={(e) => updateForm({ Y1: e.target.value })}
          />
          <label htmlFor="Y2" className="Input_Label">
            Y2
          </label>
          <input
            type="text"
            className="form-check-input"
            name="Y2"
            id="Y2"
            value={form.Y2}
            onChange={(e) => updateForm({ Y2: e.target.value })}
          />
        </div>

        <div className="Z-group">
          <label htmlFor="Z1" className="Input_Label">
            Z1
          </label>
          <input
            type="text"
            className="form-check-input"
            name="Z1"
            id="Z1"
            value={form.Z1}
            onChange={(e) => updateForm({ Z1: e.target.value })}
          />
          <label htmlFor="Z2" className="Input_Label">
            Z2
          </label>
          <input
            type="text"
            className="form-check-input"
            name="Z2"
            id="Z2"
            value={form.Z2}
            onChange={(e) => updateForm({ Z2: e.target.value })}
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
    <div className="Edit_Container">
      <h1>Crack Meter C1 readings</h1>
      <form className="Form_Container" onSubmit={onSubmit}>
        {/* CrackMeter needs a different input */}
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

        {/* Date needs a different input */}
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

        <div className="X-group">
          <label htmlFor="X1" className="Input_Label">
            X1
          </label>
          <input
            type="text"
            className="form-check-input"
            name="X1"
            id="X1"
            value={form.X1}
            onChange={(e) => updateForm({ x1: e.target.value })}
          />
          <label htmlFor="X2" className="Input_Label">
            X2
          </label>
          <input
            type="text"
            className="form-check-input"
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
            type="text"
            className="form-check-input"
            name="Y1"
            id="Y1"
            value={form.Y1}
            onChange={(e) => updateForm({ y1: e.target.value })}
          />
          <label htmlFor="Y2" className="Input_Label">
            Y2
          </label>
          <input
            type="text"
            className="form-check-input"
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
            type="text"
            className="form-check-input"
            name="Z1"
            id="Z1"
            value={form.Z1}
            onChange={(e) => updateForm({ z1: e.target.value })}
          />
          <label htmlFor="Z2" className="Input_Label">
            Z2
          </label>
          <input
            type="text"
            className="form-check-input"
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
    <div className="Reading_Container">
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
  );
}
