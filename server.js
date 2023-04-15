const ejs = require("ejs");
const express = require("express");
const connectDB = require("./config/dbConn");
const Dev = require("./models/Developer");
const dbSeedCheck = require("./database/dbSeedCheck");
const taskRoutes = require("./routes/taskRoutes");
const rootRoutes = require("./routes/root");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", rootRoutes);
app.use("/add-provider", taskRoutes);

connectDB();

dbSeedCheck();

app.listen(3000, () => {
  console.log("Server started listening on port 3000");
});
