import React from "react";
import ReportRoutes from "../DailyReport/ReportRoutes";
import Dashboard from "./Dashboard";

const DashboardRoutes = [
  {
    path: "",
    element: <Dashboard />,
    children: [...ReportRoutes],
  },
];

export default DashboardRoutes;
