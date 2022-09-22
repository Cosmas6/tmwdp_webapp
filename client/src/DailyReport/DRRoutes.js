import React from "react";
import CreateDRSpillway, {
  EditDRSpillway,
  ReadingDRSpillway,
  DRSpillwayDisplay,
} from "./Spillway";
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
    <Route path="DRSpillwayDisplay" element={<DRSpillwayDisplay />} />
    <Route path="DRCreateTunnels" element={<CreateDRTunnels />} />
    <Route path="DREditTunnels/:id" element={<EditDRTunnels />} />
    <Route path="DRReadingTunnels" element={<ReadingDRTunnels />} />
    <Route path="DRTunnelsDisplay" element={<DRTunnelsDisplay />} />
  </>,
];
