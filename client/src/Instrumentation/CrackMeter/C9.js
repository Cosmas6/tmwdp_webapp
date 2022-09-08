import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC9() {
  return (
    <div className="C9_Create">
      <CMFormCreate
        defaultValue={9}
        cmName={"C9"}
        fetchLink={`http://localhost:4000/C9Router/add`}
        dataLink={`/dashboard/readingC9`}
        graphLink={`/dashboard/graphC9`}
      />
    </div>
  );
}

export function EditReadingC9() {
  const params = useParams();
  return (
    <div className="C9_Edit">
      <CMFormEdit
        cmName={"C9"}
        fetchLink={`http://localhost:4000/C9Router/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/C9Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC9`}
      />
    </div>
  );
}

export function ReadingListC9() {
  return (
    <div className="C9_Reading">
      <CMReading
        cmName={`C9`}
        fetchLink={`http://localhost:4000/C9Router`}
        deleteFetch={`http://localhost:4000/C9Router`}
        graphLink={`/dashboard/graphC9`}
        createLink={`/dashboard/createReadingC9`}
      />
    </div>
  );
}

export function GraphC9() {
  return (
    <div className="C9_Graph">
      <CMGraph
        cmName={"C9"}
        fetchLink={`http://localhost:4000/C9Router/graphC9`}
        dataLink={`/dashboard/readingC9`}
        defX={17.19}
        defY={28.34}
        defZ={13.87}
        YaxisN={-4.0}
        YaxisP={2.0}
      />
    </div>
  );
}
