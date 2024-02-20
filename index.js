//* Initiate the server //
const mongoose = require("mongoose");
const userRouter = require("./routes/user_routes"); // changed variable name
const taskRouter = require("./routes/task_routes");


const app = require("./app");
require("./routes")(app);
app.use("./routes/user_routes", userRouter);
app.use("./routes/task_routes", taskRouter);

const port = 5500;

app.get("/");

mongoose
  .connect(
    "mongodb+srv://mdferaj143:1SIY3189XUEh6fQl@cluster0.fmdxzhu.mongodb.net/TaskBuddy?retryWrites=true&w=majority"
  )


  .then(() => console.log("Connected to Database ✨"))
  .catch((err) => console.log(err));

app.get("/");

app.listen(port, () => {
  console.log("Listening to the port 5500");
});
