const express = require("express");
const taskController = require("../controllers/task_controllers");
const router = express.Router();

router.get("/tasks", taskController.getAllTasks);
router.post("/create-task", taskController.createTasks);


module.exports = router;
