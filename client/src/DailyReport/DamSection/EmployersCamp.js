import React from "react";
import { useParams } from "react-router-dom";
import CreateReport from "../CreateReport/CreateReport";
import UpdateReports from "../UpdateReport/UpdateReport";
import ListReports from "../ListReport/ListReports";
import ReportView from "../DisplayReport/ReportView";

export default function CreateReportEmployersCamp() {
  return (
    <div className="create-report-employers-camp">
      <CreateReport
        fetchLink={`http://localhost:4001/report-employers-camp/add`}
        dataLink={`/dashboard/dashboard-overview`}
        sectionValue={"EmployersCamp"}
      />
    </div>
  );
}

export function UpdateReportEmployersCamp() {
  const params = useParams();
  return (
    <div className="update-report-employers-camp">
      <UpdateReports
        fetchLink={`http://localhost:4001/report-employers-camp/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4001/report-employers-camp/update/${params.id}`}
        navigateLink={`/dashboard/employerscamp/display/${params.id.toString()}`}
      />
    </div>
  );
}

export function ListReportEmployersCamp() {
  return (
    <div className="list-report-employers-camp">
      <ListReports
        drName={"Employer's Camp"}
        fetchLink={`http://localhost:4001/report-employers-camp`}
        deleteFetch={`http://localhost:4001/report-employers-camp`}
        createReportLink={`employersCamp`}
      />
    </div>
  );
}

export function ReportViewEmployersCamp() {
  return (
    <div className="report-view-employers-camp">
      <ReportView
        department={`employerscamp`}
        viewRoute={`report-employers-camp`}
        deleteFetch={`http://localhost:4001/report-employers-camp`}
      />
    </div>
  );
}
