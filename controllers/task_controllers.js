 const Task = require("../models/task_list");

 //*----------`All Tasks`----------//
const getAllTasks = async (req, res) => {
  let tasks;
  try {
    tasks = await Task.find({});
    if (!tasks) {
      return res.status(404).json({ status: false, message: "Tasks Not Found" });
    }
    return res.status(200).json({ message: "All Tasks", tasks: tasks });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error" });
  }
};
 //*----------`Create Tasks`----------//

 const createTasks = async (req, res) => {
  let task;
  const { title, description, priority, startDate, dueDate, emails } = req.body;
  try {
    task = new Task({
      title,
      description,
      priority,
      startDate,
      dueDate,
      emails,
    });
    await task.save();
    console.log(`Task : ${task.title} created successfully 🚀`);
    res.status(201).json({ message: "Task created successfully", task });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Could not create task." });
  }
};

//*----------`exports`----------//
module.exports = {
  getAllTasks,
  createTasks,
};