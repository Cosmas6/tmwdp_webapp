import React from "react";
import { useParams } from "react-router-dom";
import CreateReport from "../CreateReport/CreateReport";
import UpdateReports from "../UpdateReport/UpdateReport";
import ListReports from "../ListReport/ListReports";
import ReportView from "../DisplayReport/ReportView";

export default function CreateReportTunnels() {
  return (
    <div className="create-report-tunnels">
      <CreateReport
        fetchLink={`https://nodejs.tmwdp.co.ke/report-tunnels/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Tunnels"}
      />
    </div>
  );
}

export function UpdateReportTunnels() {
  const params = useParams();
  return (
    <div className="update-report-tunnels">
      <UpdateReports
        fetchLink={`https://nodejs.tmwdp.co.ke/report-tunnels/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/report-tunnels/update/${params.id}`}
        navigateLink={`/dashboard/tunnels/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportTunnels() {
  return (
    <div className="list-report-tunnels">
      <ListReports
        drName={"Tunnels"}
        fetchLink={`https://nodejs.tmwdp.co.ke/report-tunnels`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/report-tunnels`}
        createReportLink={`tunnels`}
      />
    </div>
  );
}

export function ReportViewTunnels() {
  return (
    <div className="report-view-tunnels">
      <ReportView
        department={`tunnels`}
        viewRoute={`report-tunnels`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/report-tunnels`}
      />
    </div>
  );
}
