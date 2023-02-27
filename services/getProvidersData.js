const Task = require("../models/Tasks");

const getData = (data, res) => {
  Task.insertMany(data, (err, docs) => {
    if (!err) {
      console.log(`Tasks from ${docs[0].provider} provided`);
      res.redirect("/add-provider");
    }
  });
};

module.exports = getData;
