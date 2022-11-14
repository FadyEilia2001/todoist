import {
  CalendarOutlined,
  ProfileOutlined,
  ProjectOutlined,
  DashboardOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useAppContext } from "../context/appContext";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  const { isSidebarOpen } = useAppContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } transition-all w-64 fixed md:relative z-10`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 bg-gray-50 h-screen">
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer "
        >
          <div className="flex items-center space-x-2">
            <DashboardOutlined className="text-red-500 text-base mt-1" />
            <span className="p-0 m-0">Stats</span>
          </div>
          <p className="p-0 m-0"></p>
        </NavLink>

        {/* Menu Item 1 */}
        <NavLink
          to="due-today"
          className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <CalendarOutlined className="text-red-500 text-base mt-1" />

            <span className="p-0 m-0">Due Today</span>
          </div>
          <p className="p-0 m-0">10</p>
        </NavLink>

        {/* Menu item 2 */}
        <NavLink
          to="all-tasks"
          className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <ProfileOutlined className="text-red-500 text-base mt-1" />

            <span className="p-0 m-0">All Tasks</span>
          </div>
          <p className="p-0 m-0">21</p>
        </NavLink>

        {/* Menu item 3 */}
        <NavLink
          to="urgent"
          className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <ProfileOutlined className="text-red-500 text-base mt-1" />

            <span className="p-0 m-0">Urgent</span>
          </div>
          <p className="p-0 m-0">21</p>
        </NavLink>
      </div>
    </aside>
  );
};
export default DashboardSidebar;
