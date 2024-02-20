const user = require("./user_routes");


// connect routes for initial endpoints
module.exports = (app) => {
  app.use("/admin", user);
  // app.use("/student", student);
};
