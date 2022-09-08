import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC1() {
  return (
    <div className="C1_Create">
      <CMFormCreate
        defaultValue={1}
        cmName={"C1"}
        fetchLink={`http://localhost:4000/C1Router/add`}
        dataLink={`/dashboard/readingC1`}
        graphLink={`/dashboard/graphC1`}
      />
    </div>
  );
}

export function EditReadingC1() {
  const params = useParams();
  return (
    <div className="C1_Edit">
      <CMFormEdit
        cmName={"C1"}
        fetchLink={`http://localhost:4000/C1Router/${params.id.toString()}`}
        fetchLinkPost={`http://localhost:4000/C1Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC1`}
      />
    </div>
  );
}

export function ReadingListC1() {
  return (
    <div className="C1_Reading">
      <CMReading
        cmName={"C1"}
        fetchLink={`http://localhost:4000/C1Router`}
        deleteFetch={`http://localhost:4000/C1Router`}
        graphLink={`/dashboard/graphC1`}
        createLink={`/dashboard/createReadingC1`}
      />
    </div>
  );
}

export function GraphC1() {
  return (
    <div className="C1_Graph">
      <CMGraph
        cmName={"C1"}
        fetchLink={`http://localhost:4000/C1Router/graphC1`}
        dataLink={`/dashboard/readingC1`}
        defX={28.53}
        defY={27.52}
        defZ={19.68}
        YaxisN={-1.5}
        YaxisP={1.5}
      />
    </div>
  );
}
