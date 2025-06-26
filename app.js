// app.js
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li class="task-item">
        ${task}
        <button onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addBtn.addEventListener('click', addTask);
