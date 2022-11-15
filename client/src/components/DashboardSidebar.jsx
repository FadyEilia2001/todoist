import {
  CalendarOutlined,
  ProfileOutlined,
  DashboardOutlined,
  LogoutOutlined,
  PicRightOutlined,
} from "@ant-design/icons";
import { useAppContext } from "../context/appContext";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  const { isSidebarOpen } = useAppContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } transition-all h-screen w-64 fixed md:relative z-10`}
      aria-label="Sidebar"
    >
      <div className=" py-4 bg-gray-50 h-screen">
        {/* Dashboard */}

        {/* Menu Item 1 */}
        <NavLink
          to="due-today"
          className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <CalendarOutlined className="text-red-500 text-base mt-1" />

            <span className="p-0 m-0 text-black">Due Today</span>
          </div>
        </NavLink>

        {/* Menu item 2 */}
        <NavLink
          to="all-tasks"
          className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <ProfileOutlined className="text-red-500 text-base mt-1" />

            <span className="p-0 m-0 text-black">All Tasks</span>
          </div>
        </NavLink>

        {/* Menu item 3 */}
        <NavLink
          to="urgent"
          className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <PicRightOutlined className="text-red-500 text-base mt-1" />

            <span className="p-0 m-0 text-black">Critical</span>
          </div>
        </NavLink>

        <NavLink
          to="completed"
          className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <DashboardOutlined className="text-red-500 text-base mt-1" />
            <span className="p-0 m-0 text-black">Completed</span>
          </div>
        </NavLink>

        <div className="flex items-center w-full justify-between hover:bg-gray-200 p-4 transition-all cursor-pointer">
          <div className="flex items-center space-x-2">
            <LogoutOutlined className="text-red-500 text-base mt-1" />

            <span className="p-0 m-0 text-black">Log Out</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default DashboardSidebar;
