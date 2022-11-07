import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC2() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={2}
        cmName={"C2"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C2Router/add`}
        readingLink={`http://localhost:4000/C2Router/readingReview`}
        dataLink={`/dashboard/readingC2`}
        graphLink={`/dashboard/graphC2`}
      />
    </div>
  );
}

export function EditReadingC2() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C2"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C2Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C2Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC2`}
      />
    </div>
  );
}

export function ReadingListC2() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C2`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C2Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C2Router`}
        graphLink={`/dashboard/graphC2`}
        createLink={`/dashboard/createReadingC2`}
      />
    </div>
  );
}

export function GraphC2() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C2"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C2Router/graphC2`}
        dataLink={`/dashboard/readingC2`}
        defX={21.14}
        defY={25.63}
        defZ={23.5}
        YaxisN={-0.5}
        YaxisP={1.5}
      />
    </div>
  );
}
