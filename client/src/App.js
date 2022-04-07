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
import Create from "./mongo/create";
import Edit from "./mongo/edit";
import RecordList from "./mongo/recordList";
import Instrumentation from "./Instrumentation";

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
          <Route path="/instrumentation" element={<Instrumentation />} />
          <Route path="/submitsuccess" element={<SubmitSuccess />} />
          <Route path="/filterdata" element={<FilterData />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/recordList" element={<RecordList />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
