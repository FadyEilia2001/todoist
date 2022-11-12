const mongoose = require("mongoose");
const UserModel = require("./UserModel");

const TaskSchema = new mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
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
    enum: ["inProgress", "Pending", "Inbox", "Complete"],
    default: "Inbox",
  },
  dueDate: {
    type: Date,
    validate: validator.isDate,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High", "Critical"],
    default: "Low",
  },
});

module.exports = new mongoose.model("Task", TaskSchema);
