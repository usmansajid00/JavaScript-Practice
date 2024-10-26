// You’re trying to stay on top of your daily tasks. You have a list of tasks to complete today,
//  each with an estimated time (in hours). You want a function that can help determine if you have
//   enough hours in the day (assuming an 8-hour workday) to complete all the tasks. If you don’t,
//   the function should suggest which tasks to prioritize.

const dailyTaskScheduler = (tasks, workdayHours = 8) => {
  // Sort tasks by time estimate (assume shortest tasks are highest priority)
  const sortedTasks = tasks.sort((a, b) => a.timeEstimate - b.timeEstimate);

  // Calculate total time needed
  const totalTime = tasks.reduce((total, task) => total + task.timeEstimate, 0);

  // If total time fits within workday hours, all tasks can be completed
  if (totalTime <= workdayHours) {
    return {
      message: "All tasks can be completed within the workday.",
      tasks: sortedTasks.map((task) => task.taskName),
      overflowTasks: [],
    };
  }

  // Otherwise, determine tasks that fit within the workday limit
  const prioritizedTasks = [];
  let accumulatedTime = 0;

  for (let task of sortedTasks) {
    if (accumulatedTime + task.timeEstimate <= workdayHours) {
      prioritizedTasks.push(task.taskName);
      accumulatedTime += task.timeEstimate;
    } else {
      break;
    }
  }

  const overflowTasks = sortedTasks
    .filter((task) => !prioritizedTasks.includes(task.taskName))
    .map((task) => task.taskName);

  return {
    message: "Not all tasks fit within the workday. Prioritize the following:",
    prioritizedTasks,
    overflowTasks,
  };
};

// Example usage:
const tasks = [
  { taskName: "Write report", timeEstimate: 3 },
  { taskName: "Email responses", timeEstimate: 2 },
  { taskName: "Project meeting", timeEstimate: 1.5 },
  { taskName: "Code review", timeEstimate: 1 },
  { taskName: "Prepare presentation", timeEstimate: 2.5 },
];

console.log(dailyTaskScheduler(tasks));
