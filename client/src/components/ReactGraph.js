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

// const DefandcumulList = (props) => {
//   const defX = ((props.reading.X1 + props.reading.X2) / 2).toFixed(2);
//   const defY = ((props.reading.Y1 + props.reading.Y2) / 2).toFixed(2);
//   const defZ = ((props.reading.Z1 + props.reading.Z2) / 2).toFixed(2);
//   const cumulX = (defX - 28.53).toFixed(2);
//   const cumulY = (defY - 27.52).toFixed(2);
//   const cumulZ = (defZ - 19.68).toFixed(2);
//   console.log(defX);
//   return (
//     <>
//       <tr>
//         <td>{props.reading.Date}</td>
//         <td>{defX}</td>
//         <td>{defY}</td>
//         <td>{defZ}</td>
//         <td>{cumulX}</td>
//         <td>{cumulY}</td>
//         <td>{cumulZ}</td>
//       </tr>
//     </>
//   );
// };

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

  const data = [];

  function defandcumulList() {
    return readings.map((reading) => {
      const date = reading.Date;
      const defX = ((reading.X1 + reading.X2) / 2).toFixed(2);
      const defY = ((reading.Y1 + reading.Y2) / 2).toFixed(2);
      const defZ = ((reading.Z1 + reading.Z2) / 2).toFixed(2);
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

      return (
        <>
          <div className="defandcumulList"></div>
        </>
      );
    });
  }

  return (
    <div className="ReactGraph_Container">
      <h1>Good</h1>

      <LineChart
        width={800}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis  domain={[-1.5, 1.5]}/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="cumulX"
          stroke="#0000FF"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="cumulY" stroke="#ff0000" strokeWidth={2} />
        <Line type="monotone" dataKey="cumulZ" stroke="#00FF00" strokeWidth={2} />
      </LineChart>

      {defandcumulList()}
    </div>
  );
}
