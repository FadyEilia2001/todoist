const createNewTask = (req, res) => {
  res.json({ msg: "create a new task" });
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
