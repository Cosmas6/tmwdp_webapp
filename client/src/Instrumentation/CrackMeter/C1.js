import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../../stylesheets/InstSections/crackmeter1.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";

export default function CreateReadingC1() {
  return (
    <div className="C1_Container">
      <h1>Crack Meter C1 readings</h1>
      <CMFormCreate
        defaultValue={1}
        fetchLink={`http://localhost:4000/C1Router/add`}
        dataLink={`/dashboard/readingC1`}
        graphLink={`/dashboard/graphC1`}
      />
    </div>
  );
}

export function EditReadingC1() {
  const params = useParams();
  return (
    <div className="C1_Container">
      <h1>Crack Meter C1 readings</h1>
      <CMFormEdit
        fetchLink={`http://localhost:4000/C1Router/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/C1Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC1`}
      />
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
