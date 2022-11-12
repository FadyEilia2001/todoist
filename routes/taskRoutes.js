const {
  createNewTask,
  deleteTask,
  getAllTasks,
  getSingleTask,
  updateTask,
} = require("../controllers/taskController");

const express = require("express");

const router = express.Router();

//create task
router.post("/", createNewTask);

//get all tasks
router.get("/", getAllTasks);

//get single task
router.get("/:id", getSingleTask);

//update task
router.patch("/:id", updateTask);

//delete task
router.delete("/:id", deleteTask);

module.exports = router;
