const getData = async (uri) => {
  const data = await fetch(uri);
  const json = await data.json();
  return json;
};

const createTasks = async (uri) => {
  const tasks = [];
  const data = await getData(uri);
  data.forEach((task) => {
    Object.keys(task).forEach((key) => {
      tasks.push({
        provider: "EN",
        name: key,
        level: task[key].level,
        estimated_duration: task[key].estimated_duration,
      });
    });
  });

  return tasks;
};

module.exports = createTasks;
