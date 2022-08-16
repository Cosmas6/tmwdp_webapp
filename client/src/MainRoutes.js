import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import DailyReport from "./components/DailyReport";
import SubmitSuccess from "./components/SubmitSuccess";
import FilterData from "./components/FilterData";
import DailyReportForm from "./components/DailyReportForm";
import Loading from "./components/Loading";
import Create from "./mongo/create";
import Edit from "./mongo/edit";
import RecordList from "./mongo/recordList";
import Instrumentation from "./components/Instrumentation";
import {
  CreateTunnels,
  EditTunnels,
  RecordListTunnels,
} from "./InstSections/Tunnels";
import SignIn from "./components/SignIn";
import InstGraph from "./components/InstGraph";

const MainRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<MainContent />}>
        <Route path="/" element={<Navigate replace to="login" />} />
        <Route path="loading" element={<Loading />} />
        {/* <Route path="signin" element={<SignIn />}> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* </Route> */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="dailyreportform" element={<DailyReportForm />}></Route>
          <Route path="instrumentation" element={<Instrumentation />} />
          <Route path="instgraph" element={<InstGraph />} />
          <Route path="submitsuccess" element={<SubmitSuccess />} />
        </Route>
        <Route path="dailyreport" element={<DailyReport />} />
        <Route path="filterdata" element={<FilterData />} />
        <Route path="create" element={<Create />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="recordList" element={<RecordList />} />
        <Route path="createTunnels" element={<CreateTunnels />} />
        <Route path="editTunnels/:id" element={<EditTunnels />} />
        <Route path="recordListTunnels" element={<RecordListTunnels />} />
      </Route>
    </Routes>
  </Suspense>
);
export default MainRoutes;
