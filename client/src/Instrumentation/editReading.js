import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "../stylesheets/edit.scss";

export default function EditReading() {
  const [form, setForm] = useState({
    date: "",
    x1: "",
    x2: "",
    y1: "",
    y2: "",
    z1: "",
    z2: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:4000/crackMeterRouter/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const reading = await response.json();
      if (!reading) {
        window.alert(`Reading with id ${id} not found`);
        navigate("/reading");
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
      date: form.date,
      x1: form.x1,
      x2: form.x2,
      y1: form.y1,
      y2: form.y2,
      z1: form.z1,
      z2: form.z2,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:4000/crackMeterRouter/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedReading),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/reading");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="Edit_Container">
      <h1>Crack Meter C1 readings</h1>
      <form className="Form_Container" onSubmit={onSubmit}>
        {/* Date needs a different input */}
        <label htmlFor="date-input" className="Input_Label">
          Date
        </label>
        <input
          type="text"
          className="Form_Input"
          id="date"
          name="date-input"
          value={form.date}
          onChange={(e) => updateForm({ date: e.target.value })}
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
            value={form.x1}
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
            value={form.x2}
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
            value={form.y1}
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
            value={form.y2}
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
            value={form.z1}
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
            value={form.z2}
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
