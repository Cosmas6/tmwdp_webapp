import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC13() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={13}
        cmName={"C13"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C13Router/add`}
        readingLink={`http://localhost:4000/C13Router/readingReview`}
        dataLink={`/dashboard/readingC13`}
        graphLink={`/dashboard/graphC13`}
      />
    </div>
  );
}

export function EditReadingC13() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C13"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C13Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C13Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC13`}
      />
    </div>
  );
}

export function ReadingListC13() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C13`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C13Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C13Router`}
        graphLink={`/dashboard/graphC13`}
        createLink={`/dashboard/createReadingC13`}
      />
    </div>
  );
}

export function GraphC13() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C13"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C13Router/graphC13`}
        dataLink={`/dashboard/readingC13`}
        defX={26.90}
        defY={25.39}
        defZ={10.49}
        YaxisN={-0.5}
        YaxisP={1.5}
      />
    </div>
  );
}
