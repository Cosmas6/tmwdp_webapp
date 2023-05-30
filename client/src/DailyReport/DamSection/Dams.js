import React from "react";
import { useParams } from "react-router-dom";
import ListReports from "../ListReport/ListReports";
import ReportViewDam from "../DisplayReport/ReportViewDam";
import CreateReportDam from "../CreateReport/CreateReportDam";
import UpdateReportDam from "../UpdateReport/UpdateReportDam";

export default function CreateReportDams() {
  return (
    <div className="create-report-dam">
      <CreateReportDam
        fetchLink={`http://localhost:4001/report-dams/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Dams"}
      />
    </div>
  );
}

export function UpdateReportDams() {
  const params = useParams();
  return (
    <div className="update-report-dam">
      <UpdateReportDam
        fetchLink={`http://localhost:4001/report-dams/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4001/report-dams/update/${params.id}`}
        navigateLink={`/dashboard/dams/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportsDams() {
  return (
    <div className="list-report-dam">
      <ListReports
        drName={"Dams"}
        fetchLink={`http://localhost:4001/report-dams`}
        deleteFetch={`http://localhost:4001/report-dams`}
        createReportLink={`dams`}
      />
    </div>
  );
}

export function ReportViewDams() {
  return (
    <div className="report-view-dam">
      <ReportViewDam
        viewRoute={`report-dams`}
        deleteFetch={`http://localhost:4001/report-dams`}
        department={`dams`}
      />
    </div>
  );
}
