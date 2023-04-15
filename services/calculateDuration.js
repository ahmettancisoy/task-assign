const Tasks = require("../models/Tasks");
const Devs = require("../models/Developer");

const calculateDuration = async () => {
  const devs = await Devs.find({}).lean().exec();
  const tasks = await Tasks.find({}).lean().exec();

  let weeks = 0;
  let hours = 0;
  let totalDuration = 0;

  const unassignedTasks = [];

  tasks.sort((a, b) => {
    return b.level - a.level;
  });

  tasks.forEach((task) => {
    let assignedDev = null;
    devs.forEach((dev) => {
      if (dev.level === task.level) {
        assignedDev = dev.name;
        task.dev = assignedDev;
        if (dev.hasOwnProperty("totalDuration")) {
          dev.totalDuration += task.estimated_duration;
        } else {
          dev.totalDuration = task.estimated_duration;
        }
      }
    });
    if (assignedDev === null) {
      unassignedTasks.push(task);
    }
  });

  console.log(`Unassigned tasks: ${unassignedTasks.length}`);

  devs.forEach((dev) => {
    totalDuration += dev.totalDuration;
  });

  weeks = Math.floor(totalDuration / 45);
  hours = totalDuration % 45;

  result = `COMPLETION OF TASKS: ${weeks} WEEKS + ${hours} HOURS`;

  return { tasks, result };
};

module.exports = calculateDuration;
