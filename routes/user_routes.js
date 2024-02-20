const express = require("express");
const userController = require("../controllers/user_controllers");
const router = express.Router();

router.get("/users", userController.getAllUsers);
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;
