import React from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardSidebar from "../components/DashboardSidebar";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
  const { user, isSidebarOpen } = useAppContext();

  return (
    <main className=" flex flex-col">
      {/* Navbar */}
      <div className="bg-red-500 shadow-lg">
        <DashboardNav />
      </div>

      {/* sidebar and body */}
      <div className="flex ">
        {/* sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } bg-gray-100 h-screen fixed w-64 z-20 md:block`}
        >
          <DashboardSidebar />
        </aside>

        {/* Body */}
        <section className="md:ml-64">
          <h2 className="">Body</h2>
        </section>
      </div>
    </main>
  );
};
export default Dashboard;
