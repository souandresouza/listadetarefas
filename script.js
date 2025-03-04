document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '' && !isDuplicate(taskText)) { // Check for duplicates
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.onclick = function() {
        taskItem.classList.toggle('completed'); // Toggle completed class
        saveTasks();
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
        saveTasks(); // Save tasks after deletion
    };

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    saveTasks(); // Save tasks after addition
}

function isDuplicate(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks.includes(taskText);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(taskItem => {
        tasks.push(taskItem.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => addTask(taskText));
}

// Load tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);