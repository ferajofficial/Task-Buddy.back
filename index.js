//* Initiate the server //
const mongoose = require("mongoose");
const userRouter = require("./routes/user_routes");
const taskRouter = require("./routes/task_routes");
const dotenv = require("dotenv").config();

//* Import the app //
const app = require("./app");
require("./routes")(app);
app.use("./routes/user_routes", userRouter);
app.use("./routes/task_routes", taskRouter);

//* Connect to the database //
// const MONGO_URL = process.env.DB_CONNECT;
mongoose
  .connect(
    "mongodb+srv://mdferaj143:GYGh7rcqNt6B7Us7@cluster0.fmdxzhu.mongodb.net/TaskBuddy?retryWrites=true&w=majority&appName=Cluster0"

    // MONGO_URL
  )
  .then(() => console.log("Connected to Database ✨"))
  .catch((err) => console.log(err));

//* Start the server //
app.get("/");
const port = 5500;
app.listen(port, () => {
  console.log("Listening to the port 5500");
});
