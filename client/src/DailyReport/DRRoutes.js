import React from "react";
import { Route } from "react-router-dom";
import DamRockTrips from "./Sections/Dams/DamRockTrips";
import CreateDRDams, {
  EditDRDams,
  ReadingDRDams,
  DRDamsDisplay,
} from "./Sections/Dams/Dams.js";
import CreateDRSpillway, {
  EditDRSpillway,
  ReadingDRSpillway,
  DRSpillwayDisplay,
} from "./Sections/Spillway";

import CreateDREmpCamp, {
  EditDREmpCamp,
  ReadingDREmpCamp,
  DREmpCampDisplay,
} from "./Sections/EmployersCamp";

import CreateDRInst, {
  EditDRInst,
  ReadingDRInst,
  DRInstDisplay,
} from "./Sections/Instrumentation";
import CreateDRTunnels, {
  EditDRTunnels,
  ReadingDRTunnels,
  DRTunnelsDisplay,
} from "./Sections/Tunnels";
import HomePage from "../Dashboard/HomePage";

const DRRoutes = [
  {
    path: "dashboard-overview",
    element: <HomePage />,
  },
  {
    path: "DRCreateSpillway",
    element: <CreateDRSpillway />,
  },
  {
    path: "DREditSpillway/:id",
    element: <EditDRSpillway />,
  },
  {
    path: "DRReadingSpillway",
    element: <ReadingDRSpillway />,
  },
  {
    path: "DRSpillwayDisplay/:id",
    element: <DRSpillwayDisplay />,
  },
  {
    path: "DRCreateEmpCamp",
    element: <CreateDREmpCamp />,
  },
  {
    path: "DREditEmpCamp/:id",
    element: <EditDREmpCamp />,
  },
  {
    path: "DRReadingEmpCamp",
    element: <ReadingDREmpCamp />,
  },
  {
    path: "DREmployersCampDisplay/:id",
    element: <DREmpCampDisplay />,
  },
  {
    path: "DRCreateInstrumentation",
    element: <CreateDRInst />,
  },
  {
    path: "DREditInstrumentation/:id",
    element: <EditDRInst />,
  },
  {
    path: "DRReadingInstrumentation",
    element: <ReadingDRInst />,
  },
  {
    path: "DRInstrumentationDisplay/:id",
    element: <DRInstDisplay />,
  },
  {
    path: "DRCreateTunnels",
    element: <CreateDRTunnels />,
  },
  {
    path: "DREditTunnels/:id",
    element: <EditDRTunnels />,
  },
  {
    path: "DRReadingTunnels",
    element: <ReadingDRTunnels />,
  },
  {
    path: "DRTunnelsDisplay/:id",
    element: <DRTunnelsDisplay />,
  },
  {
    path: "DRCreateDams",
    element: <CreateDRDams />,
  },
  {
    path: "DREditDams/:id",
    element: <EditDRDams />,
  },
  {
    path: "DRReadingDams",
    element: <ReadingDRDams />,
  },
  {
    path: "DRDamsDisplay/:id",
    element: <DRDamsDisplay />,
  },
  {
    path: "damRockTrips",
    element: <DamRockTrips />,
  },
];

export default DRRoutes;
