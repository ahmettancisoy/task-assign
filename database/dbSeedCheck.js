const mongoose = require("mongoose");
const Developer = require("../models/Developer");

const dbSeedCheck = () => {
  mongoose.connection.once("open", () => {
    Developer.count({}, async (err, c) => {
      if (c === 0) {
        const devArr = [
          { name: "DEV1", level: 1, workHoursPerWeek: 45 },
          { name: "DEV2", level: 2, workHoursPerWeek: 45 },
          { name: "DEV3", level: 3, workHoursPerWeek: 45 },
          { name: "DEV4", level: 4, workHoursPerWeek: 45 },
          { name: "DEV5", level: 5, workHoursPerWeek: 45 },
        ];

        Developer.insertMany(devArr, async (err, docs) => {
          if (!err) {
            console.log("Dev seed inserted successfuly");
          }
        });
      }
    });
  });
};

module.exports = dbSeedCheck;
