import React from "react";
import { Route } from "react-router-dom";
import CreateReadingC1 from "./C1";
import { EditReadingC1 } from "./C1";
import { ReadingListC1 } from "./C1";

export default [
  <>
    <Route path="createReadingC1" element={<CreateReadingC1 />} />
    <Route path="editReadingC1/:id" element={<EditReadingC1 />} />
    <Route path="readingC1" element={<ReadingListC1 />} />
  </>,
];
