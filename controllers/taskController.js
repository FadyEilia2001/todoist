const UserModel = require("../models/UserModel");
const TaskModel = require("../models/TaskModel");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const { default: mongoose } = require("mongoose");

const createNewTask = async (req, res) => {
  const { email, title, description, status, dueDate, priority } = req.body;
  if (!title || !email) {
    throw new BadRequestError("must provide a title and a user email");
  }

  const user = await UserModel.findOne({ email });
  const task = await TaskModel.create({
    title: title,
    description,
    user: user._id,
    status: status,
    description: description,
    dueDate: dueDate,
    priority: priority,
  });

  res.status(StatusCodes.CREATED).json(task);
};
const deleteTask = (req, res) => {
  res.json({ msg: "Delete a task" });
};

const getAllTasks = async (req, res) => {
  const { email } = req.body;
 

  if (!email) {
    throw new BadRequestError("Please provide a valid user");
  }

  const user = await UserModel.findOne({ email });

  const tasks = await TaskModel.find({ user: user._id });
  res.status(200).json({ msg: "OK", count: tasks.length, tasks: tasks });
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
