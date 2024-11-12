// Imagine you’re managing daily tasks and find it challenging to track what needs to be done, what has been
// completed, and what tasks should be removed. A simple task list manager could help streamline this.

// Initialize an empty task list array
let tasks = [];

// Function to add a new task
function addTask(task) {
  const newTask = {
    id: tasks.length + 1,
    description: task,
    completed: false,
  };
  tasks.push(newTask);
  console.log(`Added task: ${task}`);
  displayTasks();
}

// Function to mark a task as complete
function completeTask(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
    console.log(`Task ${taskId} marked as complete.`);
  } else {
    console.log(`Task with ID ${taskId} not found.`);
  }
  displayTasks();
}

// Function to delete a task
function deleteTask(taskId) {
  tasks = tasks.filter((t) => t.id !== taskId);
  console.log(`Deleted task with ID ${taskId}`);
  displayTasks();
}

// Function to display all tasks
function displayTasks() {
  console.log("Task List:");
  tasks.forEach((task) => {
    console.log(
      `${task.id}. [${task.completed ? "✔" : " "}] ${task.description}`
    );
  });
}

// Sample Usage
addTask("Buy groceries");
addTask("Walk the dog");
addTask("Study JavaScript");
completeTask(2); // Marks "Walk the dog" as complete
deleteTask(1); // Deletes "Buy groceries"
displayTasks(); // Displays the current list of tasks
