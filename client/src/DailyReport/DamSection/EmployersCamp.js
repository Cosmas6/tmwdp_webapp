import React from "react";
import { useParams } from "react-router-dom";
import CreateReport from "../CreateReport/CreateReport";
import UpdateReports from "../UpdateReport/UpdateReport";
import ListReports from "../ListReport/ListReports";
import ReportView from "../DisplayReport/ReportView";

export default function CreateReportEmployeeCamp() {
  return (
    <div className="DR_Create">
      <CreateReport
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"EmployersCamp"}
      />
    </div>
  );
}

export function UpdateReportEmployeeCamp() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <UpdateReports
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter/update/${params.id}`}
        navigateLink={`/dashboard/employerscamp/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportEmployeeCamp() {
  return (
    <div className="DR_Reading">
      <ListReports
        drName={"Employer's Camp"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter`}
        createReportLink={`employersCamp`}
      />
    </div>
  );
}

export function ReportViewEmployeeCamp() {
  return (
    <div className="DR_Employers_Camp">
      <ReportView
        department={`employerscamp`}
        viewRoute={`DailyREmpCampRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter`}
      />
    </div>
  );
}
