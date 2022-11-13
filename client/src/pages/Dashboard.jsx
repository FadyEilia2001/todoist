import React from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardSidebar from "../components/DashboardSidebar";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
  const { user } = useAppContext();
  return (
    <main className=" flex flex-col">
      {/* Navbar */}
      <div className="bg-red-500 shadow-lg">
        <DashboardNav />
      </div>

      {/* sidebar and body */}
      <div className="flex ">
        {/* sidebar */}
        <aside className="w-64 bg-gray-100 h-screen fixed">
          <DashboardSidebar />
        </aside>

        {/* Body */}
        <section className="p-8 ml-64">
          <h2 className="">Body</h2>
        </section>
      </div>
    </main>
  );
};
export default Dashboard;
