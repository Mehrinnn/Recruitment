let tasks = [];

function addTask() {

    const input =
        document.getElementById("taskInput");

    const taskText =
        input.value.trim();

    if(taskText === "") {

        alert("Please enter a task!");
        return;
    }

    tasks.push({

        id: Date.now(),

        text: taskText,

        completed: false
    });

    input.value = "";

    renderTasks();
}

function renderTasks() {

    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";

    if(tasks.length === 0) {

        taskList.innerHTML = `
            <div class="empty">
                🎯 No tasks available.<br>
                Add your first task!
            </div>
        `;

        updateStats();

        return;
    }

    tasks.forEach(task => {

        const li =
            document.createElement("li");

        li.className = "task";

        li.innerHTML = `

            <span class="task-text ${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div class="actions">

                <button
                    class="done-btn"
                    onclick="toggleTask(${task.id})">

                    ${task.completed ? "Undo" : "Done"}

                </button>

                <button
                    class="edit-btn"
                    onclick="editTask(${task.id})">

                    Edit

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">

                    Delete

                </button>

            </div>
        `;

        taskList.appendChild(li);
    });

    updateStats();
}

function toggleTask(id) {

    tasks = tasks.map(task =>

        task.id === id

        ? {
            ...task,
            completed: !task.completed
          }

        : task
    );

    renderTasks();
}

function editTask(id) {

    const task =
        tasks.find(t => t.id === id);

    const updatedText =
        prompt(
            "Edit Task",
            task.text
        );

    if(updatedText &&
       updatedText.trim() !== "") {

        task.text =
            updatedText.trim();

        renderTasks();
    }
}

function deleteTask(id) {

    const confirmDelete =
        confirm(
            "Delete this task?"
        );

    if(!confirmDelete) return;

    tasks =
        tasks.filter(
            task => task.id !== id
        );

    renderTasks();
}

function updateStats() {

    document.getElementById("total")
        .textContent = tasks.length;

    document.getElementById("completed")
        .textContent =
            tasks.filter(
                task => task.completed
            ).length;

    document.getElementById("pending")
        .textContent =
            tasks.filter(
                task => !task.completed
            ).length;
}

document
.getElementById("taskInput")
.addEventListener("keypress", function(e){

    if(e.key === "Enter") {

        addTask();
    }
});

renderTasks();
