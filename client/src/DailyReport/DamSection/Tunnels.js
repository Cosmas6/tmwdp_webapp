import React from "react";
import { useParams } from "react-router-dom";
import CreateReport from "../CreateReport/CreateReport";
import UpdateReports from "../UpdateReport/UpdateReport";
import ListReports from "../ListReport/ListReports";
import ReportView from "../DisplayReport/ReportView";

export default function CreateReportTunnels() {
  return (
    <div className="DR_Create">
      <CreateReport
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Tunnels"}
      />
    </div>
  );
}

export function UpdateReportTunnels() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <UpdateReports
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter/update/${params.id}`}
        navigateLink={`/dashboard/tunnels/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportTunnels() {
  return (
    <div className="DR_Reading">
      <ListReports
        drName={"Tunnels"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter`}
        createReportLink={`tunnels`}
      />
    </div>
  );
}

export function ReportViewTunnels() {
  return (
    <div className="DR_Spillway_And_Tunnels">
      <ReportView
        department={`tunnels`}
        viewRoute={`DailyRTunnelsRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRTunnelsRouter`}
      />
    </div>
  );
}
