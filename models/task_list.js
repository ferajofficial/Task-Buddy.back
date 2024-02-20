// task_model.js
const mongoose = require("mongoose");

// Define the schema for tasks
const taskSchema = new mongoose.Schema({
  title: {
    // The title of the task
    type: String,
    required: true,
  },
  description: {
    // The description of the task
    type: String,
    required: true,
  },
  priority: {
    // The priority of the task, can be low, medium, or high
    type: String,
    enum: ["low", "medium", "high"],
    required: true,
  },
  startDate: {
    // The starting date of the task
    type: Date,
    required: true,
  },
  dueDate: {
    // The due date of the task
    type: Date,
    required: true,
  },
  emails: {
    // The list of emails of the assignees of the task
    type: [String],
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("Task", taskSchema);
