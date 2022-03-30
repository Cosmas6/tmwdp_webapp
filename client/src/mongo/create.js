import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../stylesheets/create.scss";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    department: "",
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
    console.log(newPerson, "newPerson");

    await fetch("http://localhost:4000/records/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setForm({ name: "", brand: "", department: "" });
    navigate("/recordList");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="Create_Container">
      <h1>Laptop Inventory</h1>
      <form className="Form_Container" onSubmit={onSubmit}>
        <div className="name-group">
          <label htmlFor="name-input" className="Input_Label">
            Name
          </label>
          <input
            type="text"
            className="Form_Input"
            id="name"
            name="name-input"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="brand-group">
          <label htmlFor="brand" className="Input_Label">
            Laptop Brand
          </label>
          <div className="brand-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="brandHP"
              id="brandHP"
              value="HP"
              checked={form.brand === "HP"}
              onChange={(e) => updateForm({ brand: e.target.value })}
            />
            <label htmlFor="brandHP" className="Check_Label">
              HP
            </label>
          </div>
          <div className="brand-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="brandLenovo"
              id="brandLenovo"
              value="Lenovo"
              checked={form.brand === "Lenovo"}
              onChange={(e) => updateForm({ brand: e.target.value })}
            />
            <label htmlFor="brandLenovo" className="Check_Label">
              Lenovo
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="department" className="Input_Label">
            Department
          </label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentSurvey"
              id="departmentSurvey"
              value="Survey"
              checked={form.department === "Survey"}
              onChange={(e) => updateForm({ department: e.target.value })}
            />
            <label htmlFor="departmentSurvey" className="form-check-label">
              Survey
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentIT"
              id="departmentIT"
              value="IT"
              checked={form.department === "IT"}
              onChange={(e) => updateForm({ department: e.target.value })}
            />
            <label htmlFor="departmentIT" className="form-check-label">
              IT
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentSpillway"
              id="departmentSpillway"
              value="Spillway"
              checked={form.department === "Spillway"}
              onChange={(e) => updateForm({ department: e.target.value })}
            />
            <label htmlFor="departmentSpillway" className="form-check-label">
              Spillway
            </label>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="Submit_Button" />
        </div>
      </form>
    </div>
  );
}
