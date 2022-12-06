import React, { useState, useEffect } from "react";
import axios from "axios";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import Rocktrip from "./RockTrip";
import "../../../stylesheets/damrocktrips.scss";

const DamRockTrips = () => {
  const [rockTrips, setRockTrips] = useState([]);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  console.log(date);

  const dateRangePost = () => {
    const configuration = {
      method: "post",
      url: "https://nodejs.tmwdp.co.ke/DailyRDamsRouter/dateAscending",
      data: {
        date,
      },
    };

    axios(configuration)
      .then((result) => {
        setRockTrips(result.data);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  console.log(rockTrips, "rocktrips");

  function rocktripList() {
    return rockTrips.map((rocktrip) => {
      return <Rocktrip key={rocktrip._id} rocktrip={rocktrip} />;
    });
  }
  // function getTotal() {
  //   const table = document.getElementById("table"),
  //     sumVal = 0;
  //   for (var i = 1; i < table.rows.length; i++) {
  //     sumVal = sumVal + parseInt(table.columns[i].cells[2].innerHTML);
  //   }
  //   console.log(sumVal);
  // }

  return (
    <div className="DamRockTripContainer container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="RockTrip_Container">
            <h1>Material Placemenet Data</h1>
            <DateRangePicker
              className="my-demo"
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              months={2}
              direction="horizontal"
            />
            <button
              className="Submit_Button Placement_Button"
              onClick={dateRangePost}
            >
              Generate Data
            </button>
            <table
              id="table"
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
              <tbody>
                {rocktripList()}
                <tr>
                  <td>Sum</td>
                </tr>
              </tbody>
            </table>
            {/* <button
              className="Submit_Button Placement_Button"
              onClick={getTotal}
            >
              Calculate sum
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamRockTrips;
