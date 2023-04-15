const weeklyDistribution = (tasks) => {
  const hoursPerWeek = 45;
  let currentWeekTasks = [];
  let currentWeekTotal = 0;
  let currentWeek = 1;
  let weeks = [];
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    if (currentWeekTotal + task.estimated_duration > hoursPerWeek) {
      const diff = hoursPerWeek - currentWeekTotal;
      const remainingDuration = task.estimated_duration - diff;

      const modifiedTask = { ...task, estimated_duration: diff };
      task.estimated_duration = remainingDuration;

      currentWeekTotal += diff;
      currentWeekTasks.push(modifiedTask);

      weeks.push({
        week: currentWeek,
        tasks: currentWeekTasks,
        totalHours: currentWeekTotal,
      });

      currentWeek++;
      currentWeekTasks = [];
      currentWeekTotal = 0;
    }

    if (currentWeekTotal + task.estimated_duration === hoursPerWeek) {
      currentWeekTotal += task.estimated_duration;
      currentWeekTasks.push(task);

      weeks.push({
        week: currentWeek,
        tasks: currentWeekTasks,
        totalHours: currentWeekTotal,
      });

      currentWeek++;
      currentWeekTasks = [];
      currentWeekTotal = 0;
    } else {
      currentWeekTotal += task.estimated_duration;
      currentWeekTasks.push(task);
    }
  }

  if (currentWeekTotal > 0) {
    weeks.push({
      week: currentWeek,
      tasks: currentWeekTasks,
      totalHours: currentWeekTotal,
    });
  }

  return weeks;
  //console.log(JSON.stringify(weeks, null, 2));
};

module.exports = weeklyDistribution;
