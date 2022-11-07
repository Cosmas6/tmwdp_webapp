import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC6() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={6}
        cmName={"C6"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C6Router/add`}
        readingLink={`https://nodejs.tmwdp.co.ke/C6Router/readingReview`}
        dataLink={`/dashboard/readingC6`}
        graphLink={`/dashboard/graphC6`}
      />
    </div>
  );
}

export function EditReadingC6() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C6"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C6Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C6Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC6`}
      />
    </div>
  );
}

export function ReadingListC6() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C6`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C6Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C6Router`}
        graphLink={`/dashboard/graphC6`}
        createLink={`/dashboard/createReadingC6`}
      />
    </div>
  );
}

export function GraphC6() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C6"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C6Router/graphC6`}
        dataLink={`/dashboard/readingC6`}
        defX={26.0}
        defY={26.25}
        defZ={12.73}
        YaxisN={-0.5}
        YaxisP={1.5}
      />
    </div>
  );
}
