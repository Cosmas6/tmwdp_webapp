import React from "react";
import LeftBank from "../InstSections/LeftBank";
// import RightBank from "./InstSections/LeftBank";
// import Spillway from "./InstSections/Spillway";
import { RecordListTunnels } from "../InstSections/Tunnels";
import "../stylesheets/instrumentation.scss";

const Instrumentation = () => {
  var pathname = window.location.pathname;
  console.log(pathname);
  // const functionWithSwitch = () => {
  //   switch (damSectionData) {
  //     case "Right Bank":
  //       return <div>Right Bank</div>;
  //     case "Left Bank":
  //       return <LeftBank /*{handleClick={handleClick}}*/ />;
  //     case "Spillway Slopes":
  //       return <div>Spillway Slopes</div>;
  //     case "Tunnels":
  //       return <RecordListTunnels />;
  //     default:
  //       console.log(null);
  //   }
  // };
  //   console.log(section);

  return (
    <div className="Instrumentation_Container">
      
    </div>
  );
};

export default Instrumentation;
