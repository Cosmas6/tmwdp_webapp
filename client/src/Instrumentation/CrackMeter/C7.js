import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC7() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={7}
        cmName={"C7"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C7Router/add`}
        dataLink={`/dashboard/readingC7`}
        graphLink={`/dashboard/graphC7`}
      />
    </div>
  );
}

export function EditReadingC7() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C7"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C7Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C7Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC7`}
      />
    </div>
  );
}

export function ReadingListC7() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C7`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C7Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C7Router`}
        graphLink={`/dashboard/graphC7`}
        createLink={`/dashboard/createReadingC7`}
      />
    </div>
  );
}

export function GraphC7() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C7"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C7Router/graphC7`}
        dataLink={`/dashboard/readingC7`}
        defX={24.89}
        defY={23.26}
        defZ={13.42}
        YaxisN={-0.5}
        YaxisP={5.0}
      />
    </div>
  );
}
