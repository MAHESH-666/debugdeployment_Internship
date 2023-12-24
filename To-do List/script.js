function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new task item
    var newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
}

function deleteTask(button) {
    // Remove the task's parent li element
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
