import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "./DRCreate";
import DREdit from "./DREdit";
import DRReading from "./DRReading";
import DRSpillwayAndTunnels from "./DRSpillwayAndTunnels";

export default function CreateDRTunnels() {
  return (
    <div className="DR_Create">
      <DRCreate
        fetchLink={`http://localhost:4000/DailyRTunnelsRouter/add`}
        dataLink={`/dashboard/DRReadingTunnels`}
        sectionValue={"Tunnels"}
      />
    </div>
  );
}

export function EditDRTunnels() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <DREdit
        fetchLink={`http://localhost:4000/DailyRTunnelsRouter/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/DailyRTunnelsRouter/update/${params.id}`}
        navigateLink={`/dashboard/DRReadingTunnels`}
      />
    </div>
  );
}

export function ReadingDRTunnels() {
  return (
    <div className="DR_Reading">
      <DRReading
        drName={"Tunnels"}
        fetchLink={`http://localhost:4000/DailyRTunnelsRouter`}
        deleteFetch={`http://localhost:4000/DailyRTunnelsRouter`}
      />
    </div>
  );
}

export function DRTunnelsDisplay() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <DRSpillwayAndTunnels viewRoute={`DailyRTunnelsRouter`} />
    </div>
  );
}
