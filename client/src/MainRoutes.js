import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import DailyReport from "./components/DailyReport";
import SubmitSuccess from "./components/SubmitSuccess";
import DailyReportForm from "./components/DailyReportForm";
import Loading from "./components/Loading";
import CMRoutes from "./Instrumentation/CrackMeter/CMRoutes";

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
          <Route path="dailyreportform" element={<DailyReportForm />} />
          {CMRoutes}
          <Route path="submitsuccess" element={<SubmitSuccess />} />
        </Route>
        <Route path="dailyreport" element={<DailyReport />} />
      </Route>
    </Routes>
  </Suspense>
);
export default MainRoutes;
