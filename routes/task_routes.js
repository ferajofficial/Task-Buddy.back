const express = require("express");
const taskController = require("../controllers/task_controllers");
const router = express.Router();

router.get("/tasks", taskController.getAllTasks);
// router.post("/signup", userController.signup);
// router.post("/signin", userController.signin);

module.exports = router;
