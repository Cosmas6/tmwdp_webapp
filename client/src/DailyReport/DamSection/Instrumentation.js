import React from "react";
import { useParams } from "react-router-dom";
import CreateReport from "../CreateReport/CreateReport";
import UpdateReports from "../UpdateReport/UpdateReport";
import ListReports from "../ListReport/ListReports";
import ReportView from "../DisplayReport/ReportView";

export default function CreateReportInstrumentation() {
  return (
    <div className="DR_Create">
      <CreateReport
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRInstRouter/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Instrumentation"}
      />
    </div>
  );
}

export function UpdateReportInstrumentation() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <UpdateReports
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRInstRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyRInstRouter/update/${params.id}`}
        navigateLink={`/dashboard/instrumentation/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportInstrumentation() {
  return (
    <div className="DR_Reading">
      <ListReports
        drName={"Instrumentation"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRInstRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRInstRouter`}
        createReportLink={`instrumentation`}
      />
    </div>
  );
}

export function ReportViewInstrumentation() {
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
