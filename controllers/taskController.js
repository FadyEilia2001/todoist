const UserModel = require("../models/UserModel");
const TaskModel = require("../models/TaskModel");
const { StatusCodes } = require("http-status-codes");

const createNewTask = async (req, res) => {
  const { user, title, description, status, dueDate, priority } = req.body;
  //   try {
  //     const userAccount = await UserModel.findOne({ email: user });
  //     console.log(userAccount._id);
  //     const task = await TaskModel.create({
  //       title,
  //       description,
  //       user: userAccount._id,
  //     });
  //     res.status(StatusCodes.CREATED).json(task);
  //   } catch (error) {
  //     console.log(error);
  //   }
};
const deleteTask = (req, res) => {
  res.json({ msg: "Delete a task" });
};

const getAllTasks = (req, res) => {
  res.json({ msg: "getAllTasks" });
};
const getSingleTask = (req, res) => {
  res.json({ msg: "getSingleTask" });
};

const updateTask = (req, res) => {
  res.json({ msg: "updateTask" });
};

module.exports = {
  createNewTask,
  deleteTask,
  getAllTasks,
  getSingleTask,
  updateTask,
};
