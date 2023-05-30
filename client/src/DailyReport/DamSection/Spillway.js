import React from "react";
import { useParams } from "react-router-dom";
import CreateReport from "../CreateReport/CreateReport";
import UpdateReports from "../UpdateReport/UpdateReport";
import ListReports from "../ListReport/ListReports";
import ReportView from "../DisplayReport/ReportView";

export default function CreateReportSpillway() {
  return (
    <div className="DR_Create">
      <CreateReport
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Spillway"}
      />
    </div>
  );
}

export function UpdateReportSpillway() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <UpdateReports
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter/update/${params.id}`}
        navigateLink={`/dashboard/spillway/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportSpillway() {
  return (
    <div className="DR_Reading">
      <ListReports
        drName={"Spillway"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRSpillwayRouter`}
        createReportLink={`spillway`}
      />
    </div>
  );
}

export function ReportViewSpillway() {
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
