import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../stylesheets/InstSections/crackmeter.scss";
import { GraphC1 } from "./C1";
import { GraphC2 } from "./C2";
import { GraphC3 } from "./C3";
import { GraphC4 } from "./C4";
import { GraphC5 } from "./C5";
import { GraphC6 } from "./C6";
import { GraphC7 } from "./C7";
import { GraphC8 } from "./C8";
import { GraphC9 } from "./C9";
import { GraphC10 } from "./C10";
import { GraphC11 } from "./C11";
import { GraphC12 } from "./C12";
import { GraphC13 } from "./C13";
import { GraphC14 } from "./C14";
import { GraphC15 } from "./C15";
import { GraphC16 } from "./C16";

const CrackMeterGraph = () => {
  const [crackmeter, setCrackmeter] = React.useState("");
  console.log(crackmeter);

  const handleChange = (event) => {
    setCrackmeter(event.target.value);
  };
  return (
    <div className="CMCreate_Container container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="Create_Container">
            <div className="Dropdown_Component">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Crack Meter
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={crackmeter}
                  label="Select Crack Meter"
                  onChange={handleChange}
                >
                  <MenuItem value={"C1"}>C1</MenuItem>
                  <MenuItem value={"C2"}>C2</MenuItem>
                  <MenuItem value={"C3"}>C3</MenuItem>
                  <MenuItem value={"C4"}>C4</MenuItem>
                  <MenuItem value={"C5"}>C5</MenuItem>
                  <MenuItem value={"C6"}>C6</MenuItem>
                  <MenuItem value={"C7"}>C7</MenuItem>
                  <MenuItem value={"C8"}>C8</MenuItem>
                  <MenuItem value={"C9"}>C9</MenuItem>
                  <MenuItem value={"C10"}>C10</MenuItem>
                  <MenuItem value={"C11"}>C11</MenuItem>
                  <MenuItem value={"C12"}>C12</MenuItem>
                  <MenuItem value={"C13"}>C13</MenuItem>
                  <MenuItem value={"C14"}>C14</MenuItem>
                  <MenuItem value={"C15"}>C15</MenuItem>
                  <MenuItem value={"C16"}>C16</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Selected_Component">
              {
                {
                  C1: <GraphC1 />,
                  C2: <GraphC2 />,
                  C3: <GraphC3 />,
                  C4: <GraphC4 />,
                  C5: <GraphC5 />,
                  C6: <GraphC6 />,
                  C7: <GraphC7 />,
                  C8: <GraphC8 />,
                  C9: <GraphC9 />,
                  C10: <GraphC10 />,
                  C11: <GraphC11 />,
                  C12: <GraphC12 />,
                  C13: <GraphC13 />,
                  C14: <GraphC14 />,
                  C15: <GraphC15 />,
                  C16: <GraphC16 />,
                }[crackmeter]
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrackMeterGraph;
