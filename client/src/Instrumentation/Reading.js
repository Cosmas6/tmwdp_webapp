import React, { useEffect, useState } from "react";
import "../stylesheets/reading.scss";

const Reading = (props) => (
  <tr>
    <td>{props.reading.date}</td>
    <td>{props.reading.x1}</td>
    <td>{props.reading.x2}</td>
    <td>{props.reading.y1}</td>
    <td>{props.reading.y2}</td>
    <td>{props.reading.z1}</td>
    <td>{props.reading.z2}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.reading._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function ReadingList() {
  const [readings, setReadings] = useState([]);
  useEffect(() => {
    async function getReadings() {
      const response = await fetch(`http://localhost:4000/crackMeterRouter`);

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
    await fetch(`http://localhost:4000/crackMeterRouter/${id}`, {
      method: "DELETE",
    });

    const newReadings = records.filter((el) => el._id !== id);
    setReadings(newReadings);
  }

  function readingList() {
    return readings.map((reading) => {
      return (
        <Reading
          reading={reading}
          deleteRecord={() => deleteRecord(record._id)}
          key={reading._id}
        />
      );
    });
  }

  return (
    <div>
      <h3>Reading List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Date</th>
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
