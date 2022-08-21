import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../stylesheets/reactgraph.scss";

const DefandcumulList = (props) => {
  const defX = ((props.reading.X1 + props.reading.X2) / 2).toFixed(2);
  const defY = ((props.reading.Y1 + props.reading.Y2) / 2).toFixed(2);
  const defZ = ((props.reading.Z1 + props.reading.Z2) / 2).toFixed(2);
  const cumulX = (defX - 28.53).toFixed(2);
  const cumulY = (defY - 27.52).toFixed(2);
  const cumulZ = (defZ - 19.68).toFixed(2);
  console.log(defX);
  return (
    <>
      <tr>
        <td>{props.reading.Date}</td>
        <td>{defX}</td>
        <td>{defY}</td>
        <td>{defZ}</td>
        <td>{cumulX}</td>
        <td>{cumulY}</td>
        <td>{cumulZ}</td>
      </tr>
    </>
  );
};

export default function ReactGraph() {
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

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  function defandcumulList() {
    return readings.map((reading) => {
      return <DefandcumulList reading={reading} key={reading._id} />;
    });
  }

  return (
    <div className="ReactGraph_Container">
      <h1>Good</h1>

      <LineChart
        width={400}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Def X</th>
            <th>Def Y</th>
            <th>Def Z</th>
            <th>CUMUL X</th>
            <th>CUMUL Y</th>
            <th>CUMUL Z</th>
          </tr>
        </thead>
        <tbody>{defandcumulList()}</tbody>
      </table>
    </div>
  );
}
