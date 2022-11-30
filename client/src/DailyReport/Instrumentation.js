import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "./DRCreate";
import DREdit from "./DREdit";
import DRInstrumentation from "./DRInst";
import DRReading from "./DRReading";

export default function CreateDRInst() {
  return (
    <div className="DR_Create">
      <DRCreate
        fetchLink={`http://localhost:4000/DailyRInstRouter/add`}
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
        fetchLink={`http://localhost:4000/DailyRInstRouter/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/DailyRInstRouter/update/${params.id}`}
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
        fetchLink={`http://localhost:4000/DailyRInstRouter`}
        deleteFetch={`http://localhost:4000/DailyRInstRouter`}
      />
    </div>
  );
}

export function DRInstDisplay() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <DRInstrumentation
        viewRoute={`DailyRInstRouter`}
        deleteFetch={`http://localhost:4000/DailyRInstRouter`}
      />
    </div>
  );
}
