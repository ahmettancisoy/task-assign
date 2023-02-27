const calculate = require("../services/calculateDistribution");

const getData = async (req, res) => {
  const { tasks, result } = await calculate();

  console.log(result);
  res.render("index", {
    tasks: tasks,
    result: result,
  });
};

module.exports = { getData };
