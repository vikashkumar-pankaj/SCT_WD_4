function addTask() {
  const taskText = document.getElementById('taskText').value.trim();
  const taskTime = document.getElementById('taskTime').value;

  if (!taskText) return alert("Task title cannot be empty.");

  const list = document.getElementById('taskList');
  const li = document.createElement('li');

  li.innerHTML = `
    <div>
      <span class="task-title">${taskText}</span>
      <br>
      <small>${taskTime ? new Date(taskTime).toLocaleString() : ''}</small>
    </div>
    <div class="task-actions">
      <button onclick="markDone(this)">✔️</button>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;
  list.appendChild(li);
  document.getElementById('taskText').value = '';
  document.getElementById('taskTime').value = '';
}

function markDone(btn) {
  const li = btn.closest('li');
  li.classList.toggle('completed');
}

function deleteTask(btn) {
  const li = btn.closest('li');
  li.remove();
}

function editTask(btn) {
  const li = btn.closest('li');
  const titleSpan = li.querySelector('.task-title');
  const currentText = titleSpan.textContent;

  const newTask = prompt("Edit your task:", currentText);
  if (newTask) titleSpan.textContent = newTask;
}
