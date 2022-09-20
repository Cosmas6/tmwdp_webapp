import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC16() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={16}
        cmName={"C16"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C16Router/add`}
        dataLink={`/dashboard/readingC16`}
        graphLink={`/dashboard/graphC16`}
      />
    </div>
  );
}

export function EditReadingC16() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C16"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C16Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C16Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC16`}
      />
    </div>
  );
}

export function ReadingListC16() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={`C16`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C16Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C16Router`}
        graphLink={`/dashboard/graphC16`}
        createLink={`/dashboard/createReadingC16`}
      />
    </div>
  );
}

export function GraphC16() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C16"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C16Router/graphC16`}
        dataLink={`/dashboard/readingC16`}
        defX={28.89}
        defY={27.45}
        defZ={13.85}
        YaxisN={-1.5}
        YaxisP={1.5}
      />
    </div>
  );
}
