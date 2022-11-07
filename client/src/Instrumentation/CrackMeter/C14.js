import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC14() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={14}
        cmName={"C14"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C14Router/add`}
        readingLink={`https://nodejs.tmwdp.co.ke/C14Router/readingReview`}
        dataLink={`/dashboard/readingC14`}
        graphLink={`/dashboard/graphC14`}
      />
    </div>
  );
}

export function EditReadingC14() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C14"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C14Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C14Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC14`}
      />
    </div>
  );
}

export function ReadingListC14() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C14`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C14Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C14Router`}
        graphLink={`/dashboard/graphC14`}
        createLink={`/dashboard/createReadingC14`}
      />
    </div>
  );
}

export function GraphC14() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C14"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C14Router/graphC14`}
        dataLink={`/dashboard/readingC14`}
        defX={21.63}
        defY={26.73}
        defZ={22.23}
        YaxisN={-1.0}
        YaxisP={2.0}
      />
    </div>
  );
}
