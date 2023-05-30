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
        fetchLink={`http://localhost:4001/report-spillway/add`}
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
        fetchLink={`http://localhost:4001/report-spillway/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4001/report-spillway/update/${params.id}`}
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
        fetchLink={`http://localhost:4001/report-spillway`}
        deleteFetch={`http://localhost:4001/report-spillway`}
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
        deleteFetch={`http://localhost:4001/report-spillway`}
      />
    </div>
  );
}
