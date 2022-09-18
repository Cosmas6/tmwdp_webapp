import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC8() {
  return (
    <div className="C8_Create">
      <CMFormCreate
        defaultValue={8}
        cmName={"C8"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C8Router/add`}
        dataLink={`/dashboard/readingC8`}
        graphLink={`/dashboard/graphC8`}
      />
    </div>
  );
}

export function EditReadingC8() {
  const params = useParams();
  return (
    <div className="C8_Edit">
      <CMFormEdit
        cmName={"C8"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C8Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C8Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC8`}
      />
    </div>
  );
}

export function ReadingListC8() {
  return (
    <div className="C8_Reading">
      <CMReading
        cmName={`C8`}
        fetchLink={`https://nodejs.tmwdp.co.ke/C8Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C8Router`}
        graphLink={`/dashboard/graphC8`}
        createLink={`/dashboard/createReadingC8`}
      />
    </div>
  );
}

export function GraphC8() {
  return (
    <div className="C8_Graph">
      <CMGraph
        cmName={"C8"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C8Router/graphC8`}
        dataLink={`/dashboard/readingC8`}
        defX={23.56}
        defY={26.49}
        defZ={20.21}
        YaxisN={-1.0}
        YaxisP={1.5}
      />
    </div>
  );
}
