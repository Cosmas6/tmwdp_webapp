import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../stylesheets/create.scss";

export default function CreateReading() {
  const [form, setForm] = useState({
    date: "",
    x1: "",
    x2: "",
    y1: "",
    y2: "",
    z1: "",
    z2: "",
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

    await fetch("http://localhost:4000/crackMeterRouter/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReading),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setForm({ date: "", x1: "", x2: "", y1: "", y2: "", z1: "", z2: "" });
    navigate("/dashboard/reading");
  };

  // This following section will display the form that takes the input from the user.
  return (
    <div className="Create_Container">
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
