import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../stylesheets/InstSections/crackmeter.scss";
import { ReadingListC1 } from "./C1";
import { ReadingListC2 } from "./C2";
import { ReadingListC3 } from "./C3";
import { ReadingListC4 } from "./C4";
import { ReadingListC5 } from "./C5";
import { ReadingListC6 } from "./C6";
import { ReadingListC7 } from "./C7";
import { ReadingListC8 } from "./C8";
import { ReadingListC9 } from "./C9";
import { ReadingListC10 } from "./C10";
import { ReadingListC11 } from "./C11";
import { ReadingListC12 } from "./C12";
import { ReadingListC13 } from "./C13";
import { ReadingListC14 } from "./C14";
import { ReadingListC15 } from "./C15";
import { ReadingListC16 } from "./C16";

const CrackMeterList = () => {
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
                  C1: <ReadingListC1 />,
                  C2: <ReadingListC2 />,
                  C3: <ReadingListC3 />,
                  C4: <ReadingListC4 />,
                  C5: <ReadingListC5 />,
                  C6: <ReadingListC6 />,
                  C7: <ReadingListC7 />,
                  C8: <ReadingListC8 />,
                  C9: <ReadingListC9 />,
                  C10: <ReadingListC10 />,
                  C11: <ReadingListC11 />,
                  C12: <ReadingListC12 />,
                  C13: <ReadingListC13 />,
                  C14: <ReadingListC14 />,
                  C15: <ReadingListC15 />,
                  C16: <ReadingListC16 />,
                }[crackmeter]
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrackMeterList;
