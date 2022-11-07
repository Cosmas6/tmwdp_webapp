import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC5() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={5}
        cmName={"C5"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C5Router/add`}
        readingLink={`https://nodejs.tmwdp.co.ke/C5Router/readingReview`}
        dataLink={`/dashboard/readingC5`}
        graphLink={`/dashboard/graphC5`}
      />
    </div>
  );
}

export function EditReadingC5() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C5"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C5Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C5Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC5`}
      />
    </div>
  );
}

export function ReadingListC5() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C5`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C5Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C5Router`}
        graphLink={`/dashboard/graphC5`}
        createLink={`/dashboard/createReadingC5`}
      />
    </div>
  );
}

export function GraphC5() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C5"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C5Router/graphC5`}
        dataLink={`/dashboard/readingC5`}
        defX={22.68}
        defY={25.41}
        defZ={11.7}
        YaxisN={-1.5}
        YaxisP={2.0}
      />
    </div>
  );
}
