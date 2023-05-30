import React from "react";
import { useParams } from "react-router-dom";
import CreateReport from "../CreateReport/CreateReport";
import UpdateReports from "../UpdateReport/UpdateReport";
import ListReports from "../ListReport/ListReports";
import ReportView from "../DisplayReport/ReportView";

export default function CreateReportInstrumentation() {
  return (
    <div className="create-report-instrumentation">
      <CreateReport
        fetchLink={`https://nodejs.tmwdp.co.ke/report-instrumentation/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Instrumentation"}
      />
    </div>
  );
}

export function UpdateReportInstrumentation() {
  const params = useParams();
  return (
    <div className="update-report-instrumentation">
      <UpdateReports
        fetchLink={`https://nodejs.tmwdp.co.ke/report-instrumentation/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/report-instrumentation/update/${params.id}`}
        navigateLink={`/dashboard/instrumentation/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportInstrumentation() {
  return (
    <div className="list-report-instrumentation">
      <ListReports
        drName={"Instrumentation"}
        fetchLink={`https://nodejs.tmwdp.co.ke/report-instrumentation`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/report-instrumentation`}
        createReportLink={`instrumentation`}
      />
    </div>
  );
}

export function ReportViewInstrumentation() {
  return (
    <div className="report-view-instrumentation">
      <ReportView
        department={`instrumentation`}
        viewRoute={`report-instrumentation`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/report-instrumentation`}
      />
    </div>
  );
}
