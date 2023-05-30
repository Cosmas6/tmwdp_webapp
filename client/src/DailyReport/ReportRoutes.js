import React from "react";
import ReportCalendar from "./ReportCalendar";
import CreateReportDam, {
  UpdateReportDams,
  ListReportsDams,
  ReportViewDams,
} from "./DamSection/Dams.js";

import CreateReportSpillway, {
  UpdateReportSpillway,
  ListReportSpillway,
  ReportViewSpillway,
} from "./DamSection/Spillway.js";

import CreateReportEmployersCamp, {
  UpdateReportEmployersCamp,
  ListReportEmployersCamp,
  ReportViewEmployersCamp,
} from "./DamSection/EmployersCamp.js";

import CreateReportInstrumentation, {
  UpdateReportInstrumentation,
  ListReportInstrumentation,
  ReportViewInstrumentation,
} from "./DamSection/Instrumentation.js";
import CreateReportTunnels, {
  UpdateReportTunnels,
  ListReportTunnels,
  ReportViewTunnels,
} from "./DamSection/Tunnels.js";

const ReportRoutes = [
  {
    path: "dashboard-overview",
    element: <ReportCalendar />,
  },
  {
    path: "spillway",
    children: [
      { path: "create", element: <CreateReportSpillway /> },
      { path: "edit/:id", element: <UpdateReportSpillway /> },
      { path: "read", element: <ListReportSpillway /> },
      { path: "display/:id", element: <ReportViewSpillway /> },
    ],
  },
  {
    path: "employerscamp",
    children: [
      { path: "create", element: <CreateReportEmployersCamp /> },
      { path: "edit/:id", element: <UpdateReportEmployersCamp /> },
      { path: "read", element: <ListReportEmployersCamp /> },
      { path: "display/:id", element: <ReportViewEmployersCamp /> },
    ],
  },
  {
    path: "instrumentation",
    children: [
      { path: "create", element: <CreateReportInstrumentation /> },
      { path: "edit/:id", element: <UpdateReportInstrumentation /> },
      { path: "read", element: <ListReportInstrumentation /> },
      { path: "display/:id", element: <ReportViewInstrumentation /> },
    ],
  },
  {
    path: "tunnels",
    children: [
      { path: "create", element: <CreateReportTunnels /> },
      { path: "edit/:id", element: <UpdateReportTunnels /> },
      { path: "read", element: <ListReportTunnels /> },
      { path: "display/:id", element: <ReportViewTunnels /> },
    ],
  },
  {
    path: "dams",
    children: [
      { path: "create", element: <CreateReportDam /> },
      { path: "edit/:id", element: <UpdateReportDams /> },
      { path: "read", element: <ListReportsDams /> },
      { path: "display/:id", element: <ReportViewDams /> },
    ],
  },
];

export default ReportRoutes;
