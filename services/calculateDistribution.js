const Tasks = require("../models/Tasks");
const Devs = require("../models/Developer");

const calculateDistribution = async () => {
  const devs = await Devs.find({}).lean().exec();
  const tasks = await Tasks.find({}).lean().exec();

  let weeks = 0;
  let hours = 0;

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

  devs.sort((a, b) => {
    return b.totalDuration - a.totalDuration;
  });

  const longestDuration = devs[0].totalDuration;

  weeks = Math.floor(longestDuration / 45);
  hours = longestDuration % 45;

  result = `İŞLERİN TAMAMLANMA SÜRESİ: ${weeks} HAFTA + ${hours} SAAT`;

  return { tasks, result };
};

module.exports = calculateDistribution;
