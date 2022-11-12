import React from "react";
import { Modal, Divider } from "antd";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import { HomeOutlined, BookOutlined, DollarOutlined } from "@ant-design/icons";

const MobileMenu = () => {
  const { toggleMobileMenu, mobilMenuDisplay } = useAppContext();
  return (
    <Modal
      title={<h2>Menu</h2>}
      open={mobilMenuDisplay}
      onOk={toggleMobileMenu}
      onCancel={toggleMobileMenu}
      okText=""
      cancelText="Close"
      bodyStyle={{}}
      mask={true}
      keyboard={true}
      footer={null}
    >
      <Link
        to="/"
        onClick={toggleMobileMenu}
        className="flex items-center w-full hover:bg-blue-100 py-3 px-3 rounded-2xl mb-4 hover:scale-105 transition-all"
      >
        <HomeOutlined className="text-3xl text-gray-700" />
        <span className="ml-4 text-red-500 text-lg">Home</span>
      </Link>

      <Divider />
      <Link
        to="/templates"
        onClick={toggleMobileMenu}
        className="flex items-center w-full hover:bg-blue-100 py-3 px-3 rounded-2xl mb-4 hover:scale-105 transition-all"
      >
        <BookOutlined className="text-3xl text-gray-700" />
        <span className="ml-4 text-red-500 text-lg">Templates</span>
      </Link>

      <Divider />

      <Link
        to="/pricing"
        onClick={toggleMobileMenu}
        className="flex items-center w-full hover:bg-blue-100 py-3 px-3 rounded-2xl mb-4 hover:scale-105 transition-all"
      >
        <DollarOutlined className="text-3xl text-gray-700" />
        <span className="ml-4 text-red-500 text-lg">Pricing</span>
      </Link>
      <Divider />

      <div className="flex flex-col space-y-4 items-center justify-center">
        <Link to="/register" className="text-white" onClick={toggleMobileMenu}>
          <button className="py-3 px-12 mr-4 bg-red-500 rounded-xl text-white border-none text-xl w-56 font-medium tracking-wide hover:bg-red-700 cursor-pointer hover:scale-105 transition-all ">
            Start for free
          </button>
        </Link>

        <Link to="/login" className="text-white" onClick={toggleMobileMenu}>
          <button className="py-3 px-12 mr-4 rounded-xl text-red-500 border-none text-xl w-56 font-medium tracking-wide hover:bg-red-700 cursor-pointer hover:scale-105 transition-all ">
            Log-in
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default MobileMenu;
