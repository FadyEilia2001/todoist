import React from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardSidebar from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <main className=" flex">
        <DashboardSidebar />
        <section className=" block w-full">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
export default Dashboard;
