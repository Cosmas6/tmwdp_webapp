import React, { useEffect, useState } from "react";
import Start from "./Start";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import DailyReport from "./DailyReport";
import SubmitSuccess from "./SubmitSuccess";
import FilterData from "./FilterData";
import DailyReportForm from "./DailyReportForm";
import { Routes, Route } from "react-router-dom";

const App = () => {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dailyreport" element={<DailyReport />} />
        <Route path="/dailyreportform" element={<DailyReportForm />} />
        <Route path="/submitsuccess" element={<SubmitSuccess />} />
        <Route path="/filterdata" element={<FilterData />} />
      </Routes>
    </>
  );
};

export default App;
