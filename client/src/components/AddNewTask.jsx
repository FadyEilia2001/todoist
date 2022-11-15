import React from "react";
import { Modal, Divider } from "antd";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import { HomeOutlined, BookOutlined, DollarOutlined } from "@ant-design/icons";

const AddNewTask = () => {
  const { isTaskModalOpen, toggleAddTaskModal } = useAppContext();
  return (
    <Modal
      title={
        <h2 className="mt-2">
          Add New <span className="text-red-500">Task</span>
        </h2>
      }
      open={isTaskModalOpen}
      onOk={toggleAddTaskModal}
      onCancel={toggleAddTaskModal}
      okText=""
      cancelText=""
      bodyStyle={{}}
      mask={true}
      keyboard={true}
      footer={
        <div className="space-x-4">
          <button className="py-1 px-4 text-red-500 border-none outline-none shadow-lg bg-white cursor-pointer  rounded-xl">
            Submit
          </button>
          <button className="py-1 px-4 text-white border-none outline-none shadow-lg cursor-pointer bg-red-300 rounded-xl">
            Close
          </button>
        </div>
      }
    >
      <input
        type="text"
        placeholder="Task title...."
        className=" outline-none w-full rounded-lg p-2 text-lg"
      />

      <textarea
        placeHolder="Task description...."
        className="w-full mt-3 rounded-lg p-2 text-lg outline-none"
      />

      <div className="flex justify-between mt-1 p-2 text-red-500">
        <span className="p-2 cursor-pointer shadow-lg rounded-xl">Status</span>
        <span className="p-2 cursor-pointer shadow-lg rounded-xl">
          Priority
        </span>
        <span className="p-2 cursor-pointer shadow-lg rounded-xl">
          Due Date
        </span>
      </div>
    </Modal>
  );
};
export default AddNewTask;
