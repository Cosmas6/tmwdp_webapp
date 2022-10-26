import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import dayjs from "dayjs";
import { MonthPicker } from "@mui/x-date-pickers";
import Rocktrip from "./RockTrip";
import "../stylesheets/damrocktrips.scss";

const DamRockTrips = () => {
  const [rockTrips, setRockTrips] = useState([]);
  useEffect(() => {
    async function getRockTrip() {
      const response = await fetch(
        `http://localhost:4000/DailyRDamsRouter/dateAscending`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const rockTripJson = await response.json();
      setRockTrips(rockTripJson);
    }

    getRockTrip();

    return;
  }, [rockTrips.length]);
  const [monthValue, setMonthValue] = useState(new Date());
  // console.log(monthValue.getMonth() + 1);

  // {rockTrip.rocktrip &&
  //   rockTrip.rocktrip?.map((item, index) => {
  //     return (
  //       <li key={index}>
  //         {item.Number_Of_Trips} trips made for Rock Type{" "}
  //         {item.RockType}
  //       </li>
  //     );
  //   })}

  function rocktripList() {
    return rockTrips.map((rocktrip) => {
      return (
        <Rocktrip
          key={rocktrip._id}
          rocktrip={rocktrip}
        />
      );
    });
  }
  return (
    <div className="DamRockTripContainer container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="RockTrip_Container">
            <h1>Material Placemenet Data</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <MonthPicker
                  minDate={dayjs("2022-08-01")}
                  maxDate={dayjs("2023-12-01")}
                  value={monthValue}
                  onChange={(newValue) => {
                    setMonthValue(newValue);
                  }}
                />
              </Stack>
            </LocalizationProvider>
            <table
              className="table table-bordered table-responsive"
              style={{ marginTop: 20 }}
            >
              <thead>
                <tr>
                  <th>Date</th>
                  <th colSpan="2">2A1</th>
                  <th colSpan="2">2A2</th>
                  <th colSpan="2">2B</th>
                  <th colSpan="2">3A</th>
                  <th colSpan="2">3B</th>
                  <th colSpan="2">3C</th>
                  <th colSpan="2">Oversize Rocks</th>
                </tr>
                <tr>
                  <th></th>
                  <th colSpan="1">Day</th>
                  <th colSpan="1">Night</th>
                  <th colSpan="1">Day</th>
                  <th colSpan="1">Night</th>
                  <th colSpan="1">Day</th>
                  <th colSpan="1">Night</th>
                  <th colSpan="1">Day</th>
                  <th colSpan="1">Night</th>
                  <th colSpan="1">Day</th>
                  <th colSpan="1">Night</th>
                  <th colSpan="1">Day</th>
                  <th colSpan="1">Night</th>
                  <th colSpan="1">Day</th>
                  <th colSpan="1">Night</th>
                </tr>
              </thead>
              {/* Is state undefined? (display loader) otherwise display function */}
              <tbody>{rocktripList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamRockTrips;
