import React from "react";
import { useParams } from "react-router-dom";
import DRReading from "../../DRReading";
import DRDams from "../../Reports/DRDams";
import DRCreateDams from "./DRCreateDams";
import DREditDams from "./DREditDams";

export default function CreateDRDams() {
  return (
    <div className="DR_Create">
      <DRCreateDams
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter/add`}
        dataLink={`/dashboard/DRReadingDams`}
        sectionValue={"Dams"}
      />
    </div>
  );
}

export function EditDRDams() {
  const params = useParams();
  return (
    <div className="DR_Edit">
      <DREditDams
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter/update/${params.id}`}
        navigateLink={`/dashboard/DRDamsDisplay/${params.id.toString()}`}
      />
    </div>
  );
}

export function ReadingDRDams() {
  return (
    <div className="DR_Reading">
      <DRReading
        drName={"Dams"}
        fetchLink={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter`}
        createReportLink={`DRCreateDams`}
      />
    </div>
  );
}

export function DRDamsDisplay() {
  return (
    <div className="DR_Dams">
      <DRDams
        viewRoute={`DailyRDamsRouter`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/DailyRDamsRouter`}
      />
    </div>
  );
}
