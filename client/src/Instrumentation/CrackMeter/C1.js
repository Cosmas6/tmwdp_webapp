import React from "react";
import { useParams } from "react-router-dom";
import CMFormCreate from "./CMFormCreate";
import CMFormEdit from "./CMFormEdit";
import CMReading from "./CMReading";
import CMGraph from "./CMGraph";

export default function CreateReadingC1() {
  return (
    <div className="CM_Create">
      <CMFormCreate
        defaultValue={1}
        cmName={"C1"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C1Router/add`}
        readingLink={`https://nodejs.tmwdp.co.ke/C1Router/readingReview`}
        dataLink={`/dashboard/readingC1`}
        graphLink={`/dashboard/graphC1`}
      />
    </div>
  );
}

export function EditReadingC1() {
  const params = useParams();
  return (
    <div className="CM_Edit">
      <CMFormEdit
        cmName={"C1"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C1Router/${params.id.toString()}`}
        fetchLinkPost={`https://nodejs.tmwdp.co.ke/C1Router/update/${params.id}`}
        navigateLink={`/dashboard/readingC1`}
      />
    </div>
  );
}

export function ReadingListC1() {
  return (
    <div className="CM_Reading">
      <CMReading
        cmName={"C1"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C1Router`}
        deleteFetch={`https://nodejs.tmwdp.co.ke/C1Router`}
        graphLink={`/dashboard/graphC1`}
        createLink={`/dashboard/createReadingC1`}
      />
    </div>
  );
}

export function GraphC1() {
  return (
    <div className="CM_Graph">
      <CMGraph
        cmName={"C1"}
        fetchLink={`https://nodejs.tmwdp.co.ke/C1Router/graphC1`}
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
