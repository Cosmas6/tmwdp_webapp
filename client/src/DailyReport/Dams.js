import React from "react";
import { useParams } from "react-router-dom";
import DRReading from "./DRReading";
import DRDams from "./DRDams";
import DRCreateDams from "./DRCreateDams";
import DREditDams from "./DREditDams";

export default function CreateDRDams() {
  return (
    <div className="DR_Create">
      <DRCreateDams
        fetchLink={`http://localhost:4000/DailyRDamsRouter/add`}
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
        fetchLink={`http://localhost:4000/DailyRDamsRouter/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/DailyRDamsRouter/update/${params.id}`}
        navigateLink={`/dashboard/DRReadingDams`}
      />
    </div>
  );
}

export function ReadingDRDams() {
  return (
    <div className="DR_Reading">
      <DRReading
        drName={"Dams"}
        fetchLink={`http://localhost:4000/DailyRDamsRouter`}
        deleteFetch={`http://localhost:4000/DailyRDamsRouter`}
      />
    </div>
  );
}

export function DRDamsDisplay() {
  return (
    <div className="DR_Dams">
      <DRDams viewRoute={`DailyRDamsRouter`} />
    </div>
  );
}
