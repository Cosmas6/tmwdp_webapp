import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "../DRCreate";
import DREdit from "../DREdit";
import DRReading from "../DRReading";
import ReportView from "../Reports/ReportView";

export default function CreateDREmpCamp() {
  return (
    <div className="DR_Create">
      <DRCreate
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"EmployersCamp"}
      />
    </div>
  );
}

export function EditDREmpCamp() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <DREdit
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter/update/${params.id}`}
        navigateLink={`/dashboard/employerscamp/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ReadingDREmpCamp() {
  return (
    <div className="DR_Reading">
      <DRReading
        drName={"Employer's Camp"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter`}
        createReportLink={`employersCamp`}
      />
    </div>
  );
}

export function DREmpCampDisplay() {
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
