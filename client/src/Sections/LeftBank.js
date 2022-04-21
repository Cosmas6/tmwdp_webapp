import React from "react";
import "../stylesheets/Sections/leftbank.scss";

function LeftBank(props) {
  return (
    <div className="LeftBank">
      <h1 className="Section_Title">Left Bank</h1>
      <table>
        <thead>
          <tr>
            <th>Instruments</th>
            <th>No. Installed</th>
            <th>Sections/Elevations</th>
            <th>Dates Installed</th>
            <th>Media</th>
            <th>Graph</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standpipe</td>
            <td>5</td>
            <td>840m</td>
            <td>06/04/2022</td>
            <td>Media</td>
            <td>Graph</td>
          </tr>
          <tr>
            <td>VW</td>
            <td>2</td>
            <td>840m</td>
            <td>06/04/2022</td>
            <td>Media</td>
            <td>Graph</td>
          </tr>
          <tr>
            <td>Pneumatic</td>
            <td>3</td>
            <td>840m</td>
            <td>06/04/2022</td>
            <td>Media</td>
            <td>Graph</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeftBank;
