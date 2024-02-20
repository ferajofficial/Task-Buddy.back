const user = require("./user_routes");
const task = require("./task_routes");


// connect routes for initial endpoints
module.exports = (app) => {
  app.use("/admin", user);
  app.use("/admin", task);
  // app.use("/student", student);
};
