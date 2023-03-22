import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "../DRCreate";
import DREdit from "../DREdit";
import DRReading from "../DRReading";
import DRSpillway from "../Reports/DRSpillway";

export default function CreateDRSpillway() {
  return (
    <div className="DR_Create">
      <DRCreate
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter/add`}
        dataLink={`/dashboard/DRReadingSpillway`}
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
        navigateLink={`/dashboard/DRSpillwayDisplay/${params.id.toString()}`}
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
        createReportLink={`DRCreateSpillway`}
      />
    </div>
  );
}

export function DRSpillwayDisplay() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <DRSpillway
        viewRoute={`DailyRSpillwayRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter`}
      />
    </div>
  );
}