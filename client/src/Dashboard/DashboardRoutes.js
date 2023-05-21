import React from "react";
import DRRoutes from "../DailyReport/DRRoutes";
// import CMRoutes from "../Instrumentation/CrackMeter/CMRoutes";
// import GanttRoutes from "../components/Gantt/GanttRoutes";
import Dashboard from "./Dashboard";

const DashboardRoutes = [
  {
    path: "",
    element: <Dashboard />,
    children: [...DRRoutes],
  },
];

export default DashboardRoutes;
