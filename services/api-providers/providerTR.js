const getData = async (uri) => {
  const data = await fetch(uri);
  const json = await data.json();
  return json;
};

const createTasks = async (uri) => {
  const tasks = [];
  const data = await getData(uri);
  data.forEach((task) => {
    tasks.push({
      provider: "TR",
      name: task.id,
      level: task.zorluk,
      estimated_duration: task.sure,
    });
  });

  return tasks;
};

module.exports = createTasks;
