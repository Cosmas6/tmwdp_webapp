import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC3() {
  return (
    <div className="C3_Create">
      <CMFormCreate
        defaultValue={3}
        cmName={"C3"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C3Router/add`}
        dataLink={`/dashboard/readingC3`}
        graphLink={`/dashboard/graphC3`}
      />
    </div>
  );
}

export function EditReadingC3() {
  const params = useParams();
  return (
    <div className="C3_Edit">
      <CMFormEdit
        cmName={"C3"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C3Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C3Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC3`}
      />
    </div>
  );
}

export function ReadingListC3() {
  return (
    <div className="C3_Reading">
      <CMReading
        cmName={`C3`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C3Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C3Router`}
        graphLink={`/dashboard/graphC3`}
        createLink={`/dashboard/createReadingC3`}
      />
    </div>
  );
}

export function GraphC3() {
  return (
    <div className="C3_Graph">
      <CMGraph
        cmName={"C3"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C3Router/graphC3`}
        dataLink={`/dashboard/readingC3`}
        defX={27.40}
        defY={25.03}
        defZ={15.50}
        YaxisN={-0.5}
        YaxisP={1.5}
      />
    </div>
  );
}
