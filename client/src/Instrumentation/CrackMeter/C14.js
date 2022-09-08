import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC14() {
  return (
    <div className="C14_Create">
      <CMFormCreate
        defaultValue={14}
        cmName={"C14"}
        fetchLink={`http://localhost:4000/C14Router/add`}
        dataLink={`/dashboard/readingC14`}
        graphLink={`/dashboard/graphC14`}
      />
    </div>
  );
}

export function EditReadingC14() {
  const params = useParams();
  return (
    <div className="C14_Edit">
      <CMFormEdit
        cmName={"C14"}
        fetchLink={`http://localhost:4000/C14Router/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/C14Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC14`}
      />
    </div>
  );
}

export function ReadingListC14() {
  return (
    <div className="C14_Reading">
      <CMReading
        cmName={`C14`}
        fetchLink={`http://localhost:4000/C14Router`}
        deleteFetch={`http://localhost:4000/C14Router`}
        graphLink={`/dashboard/graphC14`}
        createLink={`/dashboard/createReadingC14`}
      />
    </div>
  );
}

export function GraphC14() {
  return (
    <div className="C14_Graph">
      <CMGraph
        cmName={"C14"}
        fetchLink={`http://localhost:4000/C14Router/graphC14`}
        dataLink={`/dashboard/readingC14`}
        defX={21.63}
        defY={26.73}
        defZ={22.23}
        YaxisN={-0.5}
        YaxisP={1.5}
      />
    </div>
  );
}
