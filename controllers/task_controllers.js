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

//*----------`exports`----------//
module.exports = {
  getAllTasks,
//   signup,
//   signin,
};