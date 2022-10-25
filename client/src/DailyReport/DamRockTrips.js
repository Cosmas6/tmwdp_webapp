import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import "../stylesheets/damrocktrips.scss";

const DamRockTrips = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div className="DamRockTripContainer container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="RockTrip_Container">
            <h1>Material Placemenet Data</h1>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              localeText={{ start: "Check-in", end: "Check-out" }}
            >
              <DateRangePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
            <table
              className="table table-striped table-responsive"
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
              {/* <tbody>{rocktripList()}</tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamRockTrips;
