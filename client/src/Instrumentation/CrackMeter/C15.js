import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC15() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={15}
        cmName={"C15"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C15Router/add`}
        readingLink={`https://nodejs.tmwdp.co.ke/C15Router/readingReview`}
        dataLink={`/dashboard/readingC15`}
        graphLink={`/dashboard/graphC15`}
      />
    </div>
  );
}

export function EditReadingC15() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C15"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C15Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C15Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC15`}
      />
    </div>
  );
}

export function ReadingListC15() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C15`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C15Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C15Router`}
        graphLink={`/dashboard/graphC15`}
        createLink={`/dashboard/createReadingC15`}
      />
    </div>
  );
}

export function GraphC15() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C15"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C15Router/graphC15`}
        dataLink={`/dashboard/readingC15`}
        defX={25.58}
        defY={25.49}
        defZ={25.35}
        YaxisN={-0.5}
        YaxisP={3.0}
      />
    </div>
  );
}
