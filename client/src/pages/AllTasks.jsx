import React, { useEffect, useState } from "react";
import { Checkbox, List } from "antd";
import axios from "axios";
import { useAppContext } from "../context/appContext";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const AllTasks = () => {
  return (
    <div className="flex flex-col container mx-auto p-3">
      <h2 className="mb-4 font-extrabold">Your Tasks</h2>
      <List
        size="large"
        header={
          <div className="flex justify-between items-center">
            <h2>Tasks coming up</h2>
          </div>
        }
        footer={null}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="hover:bg-gray-100 transition-all rounded-2xl mb-3 mx-2 mt-3">
            <div>
              <Checkbox className="mr-2" />
              {item}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
export default AllTasks;
