import {
  HomeOutlined,
  LogoutOutlined,
  MenuOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import AddNewTask from "./AddNewTask";

const DashboardNav = () => {
  const { user, toggleSidebar, toggleAddTaskModal } = useAppContext();
  return (
    <div className="h-12 p-4 flex items-center justify-between bg-red-500 z-20">
      <div className="flex items-center w-28 justify-between mt-2">
        <MenuOutlined
          className="text-2xl text-white cursor-pointer"
          onClick={toggleSidebar}
        />
        <Link to="/dashboard">
          <HomeOutlined className="text-2xl text-white cursor-pointer" />
        </Link>
      </div>

      <div className="flex w-28 items-center justify-between">
        <PlusCircleOutlined
          className="text-3xl mt-2 text-white cursor-pointer "
          onClick={toggleAddTaskModal}
        />
        <Avatar
          style={{
            color: "white",
            backgroundColor: "#E73535",
            boxShadow: "2px 0px 2px 0px rgba(0,0,0,0.75)",
            border: "2.5px solid white",
            fontSize: "1.2rem",
          }}
        >
          <AddNewTask />
          {user.firstName.charAt(0).toUpperCase()}
        </Avatar>

        
      </div>
    </div>
  );
};
export default DashboardNav;
