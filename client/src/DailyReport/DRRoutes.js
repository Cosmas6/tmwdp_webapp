import React from "react";
import { Route } from "react-router-dom";
import DamRockTrips from "./DamRockTrips";
import CreateDRDams, { EditDRDams, ReadingDRDams, DRDamsDisplay } from "./Dams";
import CreateDRSpillway, {
  EditDRSpillway,
  ReadingDRSpillway,
  DRSpillwayDisplay,
} from "./Spillway";

import CreateDRInst, {
  EditDRInst,
  ReadingDRInst,
  DRInstDisplay,
} from "./Instrumentation";
import CreateDRTunnels, {
  EditDRTunnels,
  ReadingDRTunnels,
  DRTunnelsDisplay,
} from "./Tunnels";

export default [
  <>
    <Route path="DRCreateSpillway" element={<CreateDRSpillway />} />
    <Route path="DREditSpillway/:id" element={<EditDRSpillway />} />
    <Route path="DRReadingSpillway" element={<ReadingDRSpillway />} />
    <Route path="DRSpillwayDisplay/:id" element={<DRSpillwayDisplay />} />
    <Route path="DRCreateInstrumentation" element={<CreateDRInst />} />
    <Route path="DREditInstrumentation/:id" element={<EditDRInst />} />
    <Route path="DRReadingInstrumentation" element={<ReadingDRInst />} />
    <Route path="DRInstrumentationDisplay/:id" element={<DRInstDisplay />} />
    <Route path="DRCreateTunnels" element={<CreateDRTunnels />} />
    <Route path="DREditTunnels/:id" element={<EditDRTunnels />} />
    <Route path="DRReadingTunnels" element={<ReadingDRTunnels />} />
    <Route path="DRTunnelsDisplay/:id" element={<DRTunnelsDisplay />} />
    <Route path="DRCreateDams" element={<CreateDRDams />} />
    <Route path="DREditDams/:id" element={<EditDRDams />} />
    <Route path="DRReadingDams" element={<ReadingDRDams />} />
    <Route path="DRDamsDisplay/:id" element={<DRDamsDisplay />} />
    <Route path="damRockTrips" element={<DamRockTrips />} />
  </>,
];
