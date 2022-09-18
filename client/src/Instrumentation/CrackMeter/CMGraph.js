import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../../stylesheets/InstSections/graph.scss";

const CMGraph = (props) => {
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

  const data = [];

  function defandcumulList() {
    return readings.map((reading) => {
      const dateString = new Date(String(reading.DateOfReading));
      const enUSFormatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const date = enUSFormatter.format(dateString);
      const X1int = parseFloat(reading.X1);
      const X2int = parseFloat(reading.X1);
      const Y1int = parseFloat(reading.Y1);
      const Y2int = parseFloat(reading.Y1);
      const Z1int = parseFloat(reading.Z1);
      const Z2int = parseFloat(reading.Z1);
      const defX = ((X1int + X2int) / 2).toFixed(2);
      const defY = ((Y1int + Y2int) / 2).toFixed(2);
      const defZ = ((Z1int + Z2int) / 2).toFixed(2);
      const X = (defX - props.defX).toFixed(2);
      const Y = (defY - props.defY).toFixed(2);
      const Z = (defZ - props.defZ).toFixed(2);

      let d = {
        date: date,
        X: X,
        Y: Y,
        Z: Z,
      };

      data.push(d);
    });
  }

  return (
    <div className="ReactGraph_Container">
      <h1>{props.cmName} Graphical Layout</h1>
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
        <YAxis domain={[props.YaxisN, props.YaxisP]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="X"
          stroke="#0000FF"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Y" stroke="#ff0000" strokeWidth={2} />
        <Line type="monotone" dataKey="Z" stroke="#00FF00" strokeWidth={2} />
      </LineChart>
      {defandcumulList()}
      <div className="view-data daily-report-form-flex">
        <Link className="Submit_Button" to={props.dataLink}>
          View Data
        </Link>
      </div>
    </div>
  );
};

export default CMGraph;
