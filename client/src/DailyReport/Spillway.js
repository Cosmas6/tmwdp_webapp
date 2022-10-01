import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "./DRCreate";
import DREdit from "./DREdit";
import DRReading from "./DRReading";
import DRSpillwayAndTunnels from "./DRSpillwayAndTunnels";

export default function CreateDRSpillway() {
  return (
    <div className="DR_Create">
      <DRCreate
        fetchLink={`http://localhost:4000/DailyRSpillwayRouter/add`}
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
        fetchLink={`http://localhost:4000/DailyRSpillwayRouter/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/DailyRSpillwayRouter/update/${params.id}`}
        navigateLink={`/dashboard/DRReadingSpillway`}
      />
    </div>
  );
}

export function ReadingDRSpillway() {
  return (
    <div className="DR_Reading">
      <DRReading
        drName={"Spillway"}
        fetchLink={`http://localhost:4000/DailyRSpillwayRouter`}
        deleteFetch={`http://localhost:4000/DailyRSpillwayRouter`}
        viewRoute={`/dashboard/DRSpillwayDisplay`}
      />
    </div>
  );
}

export function DRSpillwayDisplay() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <DRSpillwayAndTunnels viewRoute={`DailyRSpillwayRouter`} />
    </div>
  );
}
