import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC12() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={12}
        cmName={"C12"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C12Router/add`}
        dataLink={`/dashboard/readingC12`}
        graphLink={`/dashboard/graphC12`}
      />
    </div>
  );
}

export function EditReadingC12() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C12"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C12Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C12Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC12`}
      />
    </div>
  );
}

export function ReadingListC12() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C12`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C12Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C12Router`}
        graphLink={`/dashboard/graphC12`}
        createLink={`/dashboard/createReadingC12`}
      />
    </div>
  );
}

export function GraphC12() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C12"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C12Router/graphC12`}
        dataLink={`/dashboard/readingC12`}
        defX={19.36}
        defY={26.30}
        defZ={17.19}
        YaxisN={-1.0}
        YaxisP={1.5}
      />
    </div>
  );
}
