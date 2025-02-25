import React, { useEffect } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import "./css/style.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/shared/Sidebar";
import Header from "./partials/Header";
import Footer from "./components/shared/Footer";
import JobCategories from "./pages/JobCategories/JobCategories";
import Notifications from "./pages/Notifications/Notifications";
import SystemLogs from "./pages/system-logs/SystemLogs";
import HierarchicalTree from "./pages/hierarchical-tree/HierarchicalTree";
import JobSector from "./pages/JobSector/JobSector";
import JobTypes from "./pages/JobTypes/JobTypes";
import JobQualification from "./pages/JobQualification/JobQualification";
import WorkPlace from "./pages/WorkPlace/WorkPlace";
import Jobs from "./pages/Jobs/Jobs";
import SearchCV from "./pages/SearchCV/SearchCV";

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  ************************ START HEADER ************************ */}
        {/*  Site header */}
        <Header />
        {/* <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"> */}
        <div className="w-full container_fluid mx-auto">
          <Outlet />
        </div>
        {/*  ************************ END HEADER ************************ */}

        {/* Main content */}
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/job-categories", element: <JobCategories /> },
        { path: "/job-sector", element: <JobSector /> },
        { path: "/job-types", element: <JobTypes /> },
        { path: "/work-place", element: <WorkPlace /> },
        { path: "/jobs", element: <Jobs /> },
        { path: "/search-cv-createria", element: <SearchCV /> },
        { path: "/job-qualification", element: <JobQualification /> },
        { path: "/send-notification", element: <Notifications /> },
        { path: "/system-logs", element: <SystemLogs /> },
        { path: "/hierarchical-tree", element: <HierarchicalTree /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
