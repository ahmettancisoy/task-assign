const Task = require("../models/Tasks");

const getData = (data) => {
  Task.insertMany(data, (err, docs) => {
    if (!err) {
      console.log(`Tasks from ${docs[0].provider} provided`);
    }
  });
};

module.exports = getData;
