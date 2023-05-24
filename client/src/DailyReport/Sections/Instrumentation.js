import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "../DRCreate";
import DREdit from "../DREdit";
import DRReading from "../DRReading";
import ReportView from "../Reports/ReportView";

export default function CreateDRInst() {
  return (
    <div className="DR_Create">
      <DRCreate
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRInstRouter/add`}
        dataLink={`/dashboard/DRReadingInstrumentation`}
        sectionValue={"Instrumentation"}
      />
    </div>
  );
}

export function EditDRInst() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <DREdit
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRInstRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyRInstRouter/update/${params.id}`}
        navigateLink={`/dashboard/DRInstrumentationDisplay/${params.id.toString()}`}
      />
    </div>
  );
}

export function ReadingDRInst() {
  return (
    <div className="DR_Reading">
      <DRReading
        drName={"Instrumentation"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRInstRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRInstRouter`}
        createReportLink={`DRCreateInstrumentation`}
      />
    </div>
  );
}

export function DRInstDisplay() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <ReportView
        department={`instrumentation`}
        viewRoute={`DailyRInstRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRInstRouter`}
      />
    </div>
  );
}
