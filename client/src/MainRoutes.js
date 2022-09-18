import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import DailyReport from "./components/DailyReport";
import Loading from "./components/Loading";
import CMRoutes from "./Instrumentation/CrackMeter/CMRoutes";
import DRCreate from "./components/DRCreate";
import DREdit from "./components/DREdit";
import DRThumbnails from "./components/DRThumbnails";

const MainRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes forceRefresh>
      <Route path="/" element={<MainContent />}>
        <Route path="/" element={<Navigate replace to="login" />} />
        <Route path="loading" element={<Loading />} />
        {/* <Route path="signin" element={<SignIn />}> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* </Route> */}
        <Route path="dashboard" element={<Dashboard />}>
          {CMRoutes}
          <Route path="createDReport" element={<DRCreate />} />
          <Route path="editDReport/:id" element={<DREdit />} />
          <Route path="viewDReport/:id" element={<DailyReport />} />
          <Route path="readingDReport" element={<DRThumbnails />} />
          <Route path="dailyreport" element={<DailyReport />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
);
export default MainRoutes;
