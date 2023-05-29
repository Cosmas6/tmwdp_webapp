import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "../DRCreate";
import DREdit from "../DREdit";
import DRReading from "../DRReading";
import ReportView from "../Reports/ReportView";

export default function CreateDRSpillway() {
  return (
    <div className="DR_Create">
      <DRCreate
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Spillway"}
      />
    </div>
  );
}

export function EditDRSpillway() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <DREdit
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter/update/${params.id}`}
        navigateLink={`/dashboard/spillway/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ReadingDRSpillway() {
  return (
    <div className="DR_Reading">
      <DRReading
        drName={"Spillway"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter`}
        createReportLink={`spillway`}
      />
    </div>
  );
}

export function DRSpillwayDisplay() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <ReportView
        department={`spillway`}
        viewRoute={`DailyRSpillwayRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter`}
      />
    </div>
  );
}
