import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "../DRCreate";
import DREdit from "../DREdit";
import DRReading from "../DRReading";
import DRTunnels from "../Reports/DRTunnels";

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
        navigateLink={`/dashboard/DRTunnelsDisplay/${params.id.toString()}`}
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
        createReportLink={`DRCreateTunnels`}
      />
    </div>
  );
}

export function DRTunnelsDisplay() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <DRTunnels
        viewRoute={`DailyRTunnelsRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter`}
      />
    </div>
  );
}
