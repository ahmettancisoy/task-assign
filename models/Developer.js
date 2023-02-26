const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema({
  name: String,
  level: Number,
  workHoursPerWeek: Number,
});

module.exports = mongoose.model("Developer", developerSchema);
