import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LeftBank from "./InstSections/LeftBank";
// import RightBank from "./InstSections/LeftBank";
// import Spillway from "./InstSections/Spillway";
import { Tunnels } from "./InstSections/Tunnels";
import "./stylesheets/instrumentation.scss";

const Instrumentation = () => {
  const [section, setSection] = useState("");
  const handleChange = (e) => {
    setSection(e.target.value);
  };

  const functionWithSwitch = () => {
    switch (section) {
      case "Right Bank":
        return <div>Right Bank</div>;
      case "Left Bank":
        return <LeftBank /*{handleClick={handleClick}}*/ />;
      case "Spillway Slopes":
        return <div>Spillway Slopes</div>;
      case "Tunnel Slopes":
        return <Tunnels />;
      case "Tunnel A and B":
        return <div>Tunnel A and B</div>;
      default:
        console.log(null);
    }
  };
  //   console.log(section);

  //   useEffect(() => {
  //     switch (section) {
  //       case "Right Bank":
  //         console.log("Right Bank");
  //       case "Left Bank":
  //         console.log("Left Bank");
  //       case "Spillway Slopes":
  //         console.log("Spillway Slopes");
  //       case "Tunnel Slopes":
  //         console.log("Tunnel Slopes");
  //       case "Tunnel A and B":
  //         console.log("Tunnel A and B");
  //       default:
  //         console.log("Null");
  //     }
  //   }, [section]);
  return (
    <div className="Instrumentation_Container">
      <div className="Section_Dropdown">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Dam Section
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={section}
              label="Select Dam Section"
              onChange={handleChange}
            >
              <MenuItem value={"Right Bank"}>Right Bank</MenuItem>
              <MenuItem value={"Left Bank"}>Left Bank</MenuItem>
              <MenuItem value={"Spillway Slopes"}>Spillway Slopes</MenuItem>
              <MenuItem value={"Tunnel Slopes"}>Tunnel Slopes</MenuItem>
              <MenuItem value={"Tunnel A and B"}>Tunnel A and B</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="section"> {functionWithSwitch()}</div>
    </div>
  );
};

export default Instrumentation;
