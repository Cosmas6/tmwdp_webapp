import React from "react";
import { useParams } from "react-router-dom";
import CreateReport from "../CreateReport/CreateReport";
import UpdateReports from "../UpdateReport/UpdateReport";
import ListReports from "../ListReport/ListReports";
import ReportView from "../DisplayReport/ReportView";

export default function CreateReportSpillway() {
  return (
    <div className="create-report-spillway">
      <CreateReport
        fetchLink={`https://nodejs.tmwdp.co.ke/report-spillway/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Spillway"}
      />
    </div>
  );
}

export function UpdateReportSpillway() {
  const params = useParams();
  return (
    <div className="update-report-spillway">
      <UpdateReports
        fetchLink={`https://nodejs.tmwdp.co.ke/report-spillway/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/report-spillway/update/${params.id}`}
        navigateLink={`/dashboard/spillway/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportSpillway() {
  return (
    <div className="list-report-spillway">
      <ListReports
        drName={"Spillway"}
        fetchLink={`https://nodejs.tmwdp.co.ke/report-spillway`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/report-spillway`}
        createReportLink={`spillway`}
      />
    </div>
  );
}

export function ReportViewSpillway() {
  return (
    <div className="report-view-spillway">
      <ReportView
        department={`spillway`}
        viewRoute={`report-spillway`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/report-spillway`}
      />
    </div>
  );
}
