import React from "react";

const C1 = () => {
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
    setForm({
      CrackMeter: "",
      DateOfReading: "",
      X1: "",
      X2: "",
      Y1: "",
      Y2: "",
      Z1: "",
      Z2: "",
    });
    navigate("/dashboard/reading");
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
};

export default C1;
