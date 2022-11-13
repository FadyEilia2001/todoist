import {
  HomeOutlined,
  MenuOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Image } from "antd";

const DashboardNav = () => {
  return (
    <div className="h-12 p-4 flex items-center justify-between ">
      <div className="flex items-center w-28 justify-between mt-2">
        <MenuOutlined className="text-2xl text-white cursor-pointer" />
        <HomeOutlined className="text-2xl text-white cursor-pointer" />
      </div>

      <div className="flex w-28 items-center justify-between">
        <PlusCircleOutlined className="text-3xl mt-2 text-white cursor-pointer " />
        <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
          U
        </Avatar>
      </div>
    </div>
  );
};
export default DashboardNav;
