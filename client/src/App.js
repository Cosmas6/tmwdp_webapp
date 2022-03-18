import React, { Suspense } from "react";
import Start from "./Start";
const Login = React.lazy(() => import("./Login"));
import Register from "./Register";
import Dashboard from "./Dashboard";
import DailyReport from "./DailyReport";
import SubmitSuccess from "./SubmitSuccess";
import FilterData from "./FilterData";
import DailyReportForm from "./DailyReportForm";
import Loading from "./Loading";
import { Routes, Route } from "react-router-dom";
import Headcount from "./Headcount";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/headcount" element={<Headcount />} />
          <Route path="/dailyreport" element={<DailyReport />} />
          <Route path="/dailyreportform" element={<DailyReportForm />} />
          <Route path="/submitsuccess" element={<SubmitSuccess />} />
          <Route path="/filterdata" element={<FilterData />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
