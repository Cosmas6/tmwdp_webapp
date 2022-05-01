import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import DailyReport from "./components/DailyReport";
import SubmitSuccess from "./components/SubmitSuccess";
import FilterData from "./components/FilterData";
import DailyReportForm from "./components/DailyReportForm";
import Loading from "./components/Loading";
import Start from "./components/Start";
const Login = React.lazy(() => import("./components/Login"));
import Headcount from "./components/Headcount";
import Create from "./mongo/create";
import Edit from "./mongo/edit";
import RecordList from "./mongo/recordList";
import Instrumentation from "./components/Instrumentation";
import {
  CreateTunnels,
  EditTunnels,
  RecordListTunnels,
} from "./InstSections/Tunnels";

const MainRoutes = () => (
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
      <Route path="/createTunnels" element={<CreateTunnels />} />
      <Route path="/editTunnels/:id" element={<EditTunnels />} />
      <Route path="/recordListTunnels" element={<RecordListTunnels />} />
    </Routes>
  </Suspense>
);
export default MainRoutes;
