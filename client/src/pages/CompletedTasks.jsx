import React, { useEffect, useState } from "react";
import { Checkbox, Divider } from "antd";
import axios from "axios";
import { useAppContext } from "../context/appContext";

import { CalendarOutlined } from "@ant-design/icons";
import { format } from "date-fns/esm";

const CompletedTasks = () => {
  const { token } = useAppContext();
  const [allTasks, setAllTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/tasks", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const data = await response.data.tasks;

      const activeTasks = await data.filter((task) => {
        return task.status === "Complete";
      });

      setAllTasks(activeTasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="container mx-auto">
      <h2 className="mb-8 font-extrabold p-4">Your Completed Tasks</h2>
      <div className="flex flex-col p-4 items-start justify-center container-sm mx-auto w-full space-y-4">
        {allTasks.map((item) => {
          return (
            <div key={item._id} className="w-full">
              <div className="flex space-x-4 hover:bg-neutral-100 p-4 rounded-full cursor-pointer">
                <div>
                  <Checkbox onChange={onChange} defaultChecked={true} />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <span className="line-through">{item.title}</span>
                  <span className="text-red-500">
                    <CalendarOutlined className="mr-1" />
                    {format(new Date(item.dueDate), "EEEE MM-dd-yyyy")}
                  </span>
                  <div className="">
                    <span className=" mr-4 bg-red-400 text-white py-1 px-3 rounded-full">
                      {item.status}
                    </span>
                    <span className=" bg-gray-400 py-1 px-3 text-white rounded-full">
                      {item.priority}
                    </span>
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CompletedTasks;
