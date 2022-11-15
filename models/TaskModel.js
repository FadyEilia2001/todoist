const mongoose = require("mongoose");
const UserSchema = require("./UserModel");
const validator = require("validator");

const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserSchema,
    required: [true, "please provide a user email"],
  },
  title: {
    type: String,
    required: [true, "Please provide a task name"],
    minLength: 3,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["InProgress", "Pending", "Inbox", "Complete"],
    default: "Inbox",
  },
  dueDate: {
    type: Date,
    validate: validator.isDate,
    default: Date.now(),
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High", "Critical"],
    default: "Low",
  },
});

module.exports = new mongoose.model("Task", TaskSchema);
