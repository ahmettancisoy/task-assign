const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/workingPlanDB");
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
