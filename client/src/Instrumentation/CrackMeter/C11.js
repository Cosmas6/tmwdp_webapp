import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC11() {
  return (
    <div className="C11_Create">
      <CMFormCreate
        defaultValue={11}
        cmName={"C11"}
        fetchLink={`http://localhost:4000/C11Router/add`}
        dataLink={`/dashboard/readingC11`}
        graphLink={`/dashboard/graphC11`}
      />
    </div>
  );
}

export function EditReadingC11() {
  const params = useParams();
  return (
    <div className="C11_Edit">
      <CMFormEdit
        cmName={"C11"}
        fetchLink={`http://localhost:4000/C11Router/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/C11Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC11`}
      />
    </div>
  );
}

export function ReadingListC11() {
  return (
    <div className="C11_Reading">
      <CMReading
        cmName={`C11`}
        fetchLink={`http://localhost:4000/C11Router`}
        deleteFetch={`http://localhost:4000/C11Router`}
        graphLink={`/dashboard/graphC11`}
        createLink={`/dashboard/createReadingC11`}
      />
    </div>
  );
}

export function GraphC11() {
  return (
    <div className="C11_Graph">
      <CMGraph
        cmName={"C11"}
        fetchLink={`http://localhost:4000/C11Router/graphC11`}
        dataLink={`/dashboard/readingC11`}
        defX={18.75}
        defY={26.31}
        defZ={13.34}
        YaxisN={-0.5}
        YaxisP={1.5}
      />
    </div>
  );
}
