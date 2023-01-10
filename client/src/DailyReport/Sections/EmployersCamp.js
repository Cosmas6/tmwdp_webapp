import React from "react";
import { useParams } from "react-router-dom";
import DRCreate from "../DRCreate";
import DREdit from "../DREdit";
import DRReading from "../DRReading";
import DREmployersCamp from "../Reports/DREmployersCamp";

export default function CreateDREmpCamp() {
  return (
    <div className="DR_Create">
      <DRCreate
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter/add`}
        dataLink={`/dashboard/DRReadingEmpCamp`}
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
        navigateLink={`/dashboard/DREmployersCampDisplay/${params.id.toString()}`}
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
        createReportLink={`DRCreateEmpCamp`}
      />
    </div>
  );
}

export function DREmpCampDisplay() {
  return (
    <div className="DR_Employers_Camp">
      <DREmployersCamp
        viewRoute={`DailyREmpCampRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyREmpCampRouter`}
      />
    </div>
  );
}
