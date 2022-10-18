import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/InstSections/readings.scss";

const CMReading = (props) => {
  const Reading = (props) => {
    const dateString = new Date(String(props.reading.DateOfReading));
    const enUSFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return (
      <tr>
        <td>{props.reading.User}</td>
        <td>{props.reading.CrackMeter}</td>
        <td>{[enUSFormatter.format(dateString)].sort()}</td>
        <td>{parseFloat(props.reading.X1).toFixed(2)}</td>
        <td>{parseFloat(props.reading.X2).toFixed(2)}</td>
        <td>{parseFloat(props.reading.Y1).toFixed(2)}</td>
        <td>{parseFloat(props.reading.Y2).toFixed(2)}</td>
        <td>{parseFloat(props.reading.Z1).toFixed(2)}</td>
        <td>{parseFloat(props.reading.Z2).toFixed(2)}</td>
        <td>
          <Link
            className="btn btn-link edit-button"
            to={`/dashboard/editReadingC${parseInt(props.reading.CrackMeter)}/${
              props.reading._id
            }`}
          >
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <span>Edit</span>
          </Link>
          <button
            className="btn btn-link delete-button"
            onClick={() => {
              props.deleteRecord(props.reading._id);
            }}
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
            <span>Delete</span>
          </button>
        </td>
      </tr>
    );
  };
  const [readings, setReadings] = useState([]);
  useEffect(() => {
    async function getReadings() {
      const response = await fetch(props.fetchLink);

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
    await fetch(`${props.deleteFetch}` + `/` + id, {
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
    <div className="CM_Reading_Container container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="Reading_Table_Container card">
            <h3>Reading List</h3>
            <table
              className="table table-striped table-responsive"
              style={{ marginTop: 20 }}
            >
              <thead>
                <tr>
                  <th>Submitted By</th>
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
            <div className="view-graph daily-report-form-flex">
              <Link className="Submit_Button" to={props.graphLink}>
                View Graph
              </Link>
            </div>
            <div className="create-reading daily-report-form-flex">
              <Link className="Submit_Button" to={props.createLink}>
                Create Reading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMReading;
