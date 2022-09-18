import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC10() {
  return (
    <div className="C10_Create">
      <CMFormCreate
        defaultValue={10}
        cmName={"C10"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C10Router/add`}
        dataLink={`/dashboard/readingC10`}
        graphLink={`/dashboard/graphC10`}
      />
    </div>
  );
}

export function EditReadingC10() {
  const params = useParams();
  return (
    <div className="C10_Edit">
      <CMFormEdit
        cmName={"C10"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C10Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C10Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC10`}
      />
    </div>
  );
}

export function ReadingListC10() {
  return (
    <div className="C10_Reading">
      <CMReading
        cmName={`C10`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C10Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C10Router`}
        graphLink={`/dashboard/graphC10`}
        createLink={`/dashboard/createReadingC10`}
      />
    </div>
  );
}

export function GraphC10() {
  return (
    <div className="C10_Graph">
      <CMGraph
        cmName={"C10"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C10Router/graphC10`}
        dataLink={`/dashboard/readingC10`}
        defX={21.87}
        defY={28.77}
        defZ={24.86}
        YaxisN={-5.0}
        YaxisP={2.0}
      />
    </div>
  );
}
