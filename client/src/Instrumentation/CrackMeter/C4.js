import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC4() {
  return (
    <div className="C4_Create">
      <CMFormCreate
        defaultValue={4}
        cmName={"C4"}
        fetchLink={`http://localhost:4000/C4Router/add`}
        dataLink={`/dashboard/readingC4`}
        graphLink={`/dashboard/graphC4`}
      />
    </div>
  );
}

export function EditReadingC4() {
  const params = useParams();
  return (
    <div className="C4_Edit">
      <CMFormEdit
        cmName={"C4"}
        fetchLink={`http://localhost:4000/C4Router/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/C4Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC4`}
      />
    </div>
  );
}

export function ReadingListC4() {
  return (
    <div className="C4_Reading">
      <CMReading
        cmName={`C4`}
        fetchLink={`http://localhost:4000/C4Router`}
        deleteFetch={`http://localhost:4000/C4Router`}
        graphLink={`/dashboard/graphC4`}
        createLink={`/dashboard/createReadingC4`}
      />
    </div>
  );
}

export function GraphC4() {
  return (
    <div className="C4_Graph">
      <CMGraph
        cmName={"C4"}
        fetchLink={`http://localhost:4000/C4Router/graphC4`}
        dataLink={`/dashboard/readingC4`}
        defX={23.33}
        defY={25.95}
        defZ={25.34}
        YaxisN={-0.5}
        YaxisP={1.5}
      />
    </div>
  );
}
