import React from "react";
import HomePage from "../Dashboard/HomePage";
import CreateDRDams, {
  EditDRDams,
  ReadingDRDams,
  DRDamsDisplay,
} from "./Sections/Dams/Dams.js";
import CreateDRSpillway, {
  EditDRSpillway,
  ReadingDRSpillway,
  DRSpillwayDisplay,
} from "./Sections/Spillway.js";

import CreateDREmpCamp, {
  EditDREmpCamp,
  ReadingDREmpCamp,
  DREmpCampDisplay,
} from "./Sections/EmployersCamp.js";

import CreateDRInst, {
  EditDRInst,
  ReadingDRInst,
  DRInstDisplay,
} from "./Sections/Instrumentation.js";
import CreateDRTunnels, {
  EditDRTunnels,
  ReadingDRTunnels,
  DRTunnelsDisplay,
} from "./Sections/Tunnels.js";

const DRRoutes = [
  {
    path: "dashboard-overview",
    element: <HomePage />,
  },
  {
    path: "spillway",
    children: [
      { path: "create", element: <CreateDRSpillway /> },
      { path: "edit/:id", element: <EditDRSpillway /> },
      { path: "read", element: <ReadingDRSpillway /> },
      { path: "display/:id", element: <DRSpillwayDisplay /> },
    ],
  },
  {
    path: "employerscamp",
    children: [
      { path: "create", element: <CreateDREmpCamp /> },
      { path: "edit/:id", element: <EditDREmpCamp /> },
      { path: "read", element: <ReadingDREmpCamp /> },
      { path: "display/:id", element: <DREmpCampDisplay /> },
    ],
  },
  {
    path: "instrumentation",
    children: [
      { path: "create", element: <CreateDRInst /> },
      { path: "edit/:id", element: <EditDRInst /> },
      { path: "read", element: <ReadingDRInst /> },
      { path: "display/:id", element: <DRInstDisplay /> },
    ],
  },
  {
    path: "tunnels",
    children: [
      { path: "create", element: <CreateDRTunnels /> },
      { path: "edit/:id", element: <EditDRTunnels /> },
      { path: "read", element: <ReadingDRTunnels /> },
      { path: "display/:id", element: <DRTunnelsDisplay /> },
    ],
  },
  {
    path: "dams",
    children: [
      { path: "create", element: <CreateDRDams /> },
      { path: "edit/:id", element: <EditDRDams /> },
      { path: "read", element: <ReadingDRDams /> },
      { path: "display/:id", element: <DRDamsDisplay /> },
    ],
  },
];

export default DRRoutes;
