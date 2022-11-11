import React from "react";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
  const { user } = useAppContext();
  return (
    <div className="p-4">
      <h2>Hello {user.firstName}</h2>
      <p>I am working on the dashboard, and it will be up shortly</p>
    </div>
  );
};
export default Dashboard;
