const calculate = require("../services/calculateDuration");
const distribution = require("../services/weeklyDistribution");

const getData = async (req, res) => {
  const { tasks, result } = await calculate();
  const distributedTasks = [];
  const devs = [...new Set(tasks.map((t) => t.dev))];
  devs.forEach(async (dev) => {
    const filteredTasksByDev = tasks.filter((t) => t.dev === dev);
    const getDistribution = distribution(filteredTasksByDev);
    distributedTasks.push({ dev: dev, data: getDistribution });
  });

  console.log(distributedTasks);

  res.render("index", {
    data: distributedTasks.flat(),
    result: result,
  });
};

module.exports = { getData };
