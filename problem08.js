// You have a list of daily tasks with different priorities, and you want to sort them based on
// their priority so that you can focus on the most important ones first. Each task has a priority
// level (e.g., "High", "Medium", "Low").

// Define the list of tasks with priority levels
const tasks = [
  { name: "Complete project report", priority: "High" },
  { name: "Buy groceries", priority: "Medium" },
  { name: "Check emails", priority: "Low" },
  { name: "Team meeting", priority: "High" },
  { name: "Exercise", priority: "Low" },
];

// Define priority levels for sorting
const priorityLevels = {
  High: 1,
  Medium: 2,
  Low: 3,
};

// Sort tasks by priority
const sortedTasks = tasks.sort((a, b) => {
  return priorityLevels[a.priority] - priorityLevels[b.priority];
});

// Display sorted tasks
console.log("Tasks sorted by priority:");
sortedTasks.forEach((task) => {
  console.log(`${task.name} - Priority: ${task.priority}`);
});
