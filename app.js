let taskInput = document.getElementById("task-input");
let addForm = document.getElementById("add-form");
let taskListContainer = document.getElementById("task-list-container");
let tasks = [];
// Add validation for the task input
taskInput.addEventListener("input", function() {
    let taskValue = taskInput.value.trim();
    if (taskValue.length > 0) {
      taskInput.classList.remove("error");
      taskInput.classList.add("success");
    } else {
      taskInput.classList.remove("success");
      taskInput.classList.add("error");
    }
  });
  

// Add task to the list when the "Add Task" button is clicked
addForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get the task from the input field
  let task = taskInput.value;
  if (task) {
    // Clear the input field
    taskInput.value = "";
    // Add the task to the array of tasks
    tasks.push({ task: task, completed: false });
    // Add the task to the task list
    let li = createTaskElement(task, tasks.length - 1);
    taskListContainer.appendChild(li);
  }
});

// Function to create a task element and append it to the task list
function createTaskElement(task, taskId) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = task;
  li.appendChild(span);

  // Add a "Completed" button to the task element
  let completedButton = document.createElement("button");
  completedButton.innerText = "Completed";
  completedButton.classList.add("completed-btn");
  completedButton.addEventListener("click", function() {
    tasks[taskId].completed = true;
    li.classList.add("completed");
    
  });
  li.appendChild(completedButton);

  // Add a "Edit" button to the task element
  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("edit-btn");
  editButton.addEventListener("click", function() {
    let newTask = prompt("Edit task", task);
    if (newTask) {
      tasks[taskId].task = newTask;
      span.innerText = newTask;
    }33
  });
  li.appendChild(editButton);

  // Add a "Delete" button to the task element
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", function() {
    tasks.splice(taskId, 1);
    taskListContainer.removeChild(li);
  });
  li.appendChild(deleteButton);

  return li;
}
