import React, { useEffect, useState } from "react";
import { Checkbox, Divider } from "antd";
import axios from "axios";
import { useAppContext } from "../context/appContext";

import {
  CalendarOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const AllTasks = () => {
  const { token } = useAppContext();
  const [allTasks, setAllTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/tasks", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setAllTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  console.log(allTasks);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="container mx-auto">
      <h2 className="mb-8 font-extrabold p-4">Your Tasks</h2>
      <div className="">
        {allTasks.map((item) => {
          return (
            <>
              <div
                key={item._id}
                className="container-sm flex items-start space-x-4 p-3 hover:bg-gray-200 rounded-tr-3xl rounded-bl-3xl transition-all cursor-pointer relative"
              >
                <Checkbox className="mt-2" />
                <div>
                  <h2 className="p-0 m-0">{item.title}</h2>
                  <span>{item.description}</span>
                  {item.dueDate && (
                    <span className="inline-block text-red-400 md:ml-3">
                      <CalendarOutlined className="mr-3" />
                      {item.dueDate}
                    </span>
                  )}
                </div>
                <span className="absolute right-3 top-2 bg-red-400 text-white py-1 px-3 rounded-full">
                  {item.status}
                </span>
                <span className="absolute right-3 top-11 bg-gray-400 py-1 px-3 text-white rounded-full">
                  {item.priority}
                </span>
              </div>
              <Divider />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default AllTasks;
