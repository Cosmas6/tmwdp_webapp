import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "../stylesheets/edit.scss";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    department: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:4000/records/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/recordListTunnels");
        return;
      }

      setForm(record);
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
    const editedPerson = {
      name: form.name,
      brand: form.brand,
      department: form.department,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:4000/records/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/recordList");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="Edit_Container">
      <h1>Laptop Inventory</h1>
      <form className="Form_Container" onSubmit={onSubmit}>
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
