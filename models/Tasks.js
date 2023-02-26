const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  provider: String,
  name: String,
  level: Number,
  estimated_duration: Number,
});

module.exports = mongoose.model("Task", taskSchema);
