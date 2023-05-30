import React from "react";
import ReportRoutes from "../DailyReport/ReportRoutes";
// import CMRoutes from "../Instrumentation/CrackMeter/CMRoutes";
// import GanttRoutes from "../components/Gantt/GanttRoutes";
import Dashboard from "./Dashboard";

const DashboardRoutes = [
  {
    path: "",
    element: <Dashboard />,
    children: [...ReportRoutes],
  },
];

export default DashboardRoutes;
