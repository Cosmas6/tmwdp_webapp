import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../stylesheets/InstSections/crackmetercreate.scss";
import CreateReadingC1 from "./C1";
import CreateReadingC2 from "./C2";
import CreateReadingC3 from "./C3";
import CreateReadingC4 from "./C4";
import CreateReadingC5 from "./C5";
import CreateReadingC6 from "./C6";
import CreateReadingC7 from "./C7";
import CreateReadingC8 from "./C8";
import CreateReadingC9 from "./C9";
import CreateReadingC10 from "./C10";
import CreateReadingC11 from "./C11";
import CreateReadingC12 from "./C12";
import CreateReadingC13 from "./C13";
import CreateReadingC14 from "./C14";
import CreateReadingC15 from "./C15";
import CreateReadingC16 from "./C16";

const CrackMeterCreate = () => {
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
                  C1: <CreateReadingC1 />,
                  C2: <CreateReadingC2 />,
                  C3: <CreateReadingC3 />,
                  C4: <CreateReadingC4 />,
                  C5: <CreateReadingC5 />,
                  C6: <CreateReadingC6 />,
                  C7: <CreateReadingC7 />,
                  C8: <CreateReadingC8 />,
                  C9: <CreateReadingC9 />,
                  C10: <CreateReadingC10 />,
                  C11: <CreateReadingC11 />,
                  C12: <CreateReadingC12 />,
                  C13: <CreateReadingC13 />,
                  C14: <CreateReadingC14 />,
                  C15: <CreateReadingC15 />,
                  C16: <CreateReadingC16 />,
                }[crackmeter]
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrackMeterCreate;
