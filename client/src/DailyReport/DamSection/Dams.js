import React from "react";
import { useParams } from "react-router-dom";
import ListReports from "../ListReport/ListReports";
import ReportViewDam from "../DisplayReport/ReportViewDam";
import CreateReportDam from "../CreateReport/CreateReportDam";
import UpdateReportDam from "../UpdateReport/UpdateReportDam";

export default function CreateReportDams() {
  return (
    <div className="DR_Create">
      <CreateReportDams
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"Dams"}
      />
    </div>
  );
}

export function UpdateReportDams() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <UpdateReportDam
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter/update/${params.id}`}
        navigateLink={`/dashboard/dams/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportsDams() {
  return (
    <div className="DR_Reading">
      <ListReports
        drName={"Dams"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter`}
        createReportLink={`dams`}
      />
    </div>
  );
}

export function ReportViewDams() {
  return (
    <div className="DR_Dams">
      <ReportViewDam
        viewRoute={`DailyRDamsRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter`}
        department={`dams`}
      />
    </div>
  );
}
