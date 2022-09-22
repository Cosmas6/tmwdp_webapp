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
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter/add`}
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
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter/update/${params.id}`}
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
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter`}
        editRoute={`DREditTunnels`}
        viewRoute={`DRTunnelsDisplay`}
      />
    </div>
  );
}

export function DRTunnelsDisplay() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <DRSpillwayAndTunnels viewRoute={`DailyRTunnelRouter`} />
    </div>
  );
}
