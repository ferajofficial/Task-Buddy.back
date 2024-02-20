//* Initiate the server //
const mongoose = require("mongoose");
const router = require("./routes/user_routes");
const app = require("./app");
require("./routes")(app);

const port = 5500;

app.get("/");

mongoose
  .connect(
    "mongodb+srv://mdferaj143:1SIY3189XUEh6fQl@cluster0.fmdxzhu.mongodb.net/TaskBuddy?retryWrites=true&w=majority"
  )

  //1SIY3189XUEh6fQl
  .then(() => console.log("Connected to Database ✨"))
  .catch((err) => console.log(err));

app.get("/");

app.listen(port, () => {
  console.log("Listening to the port 8080");
});
