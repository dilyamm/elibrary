document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = document.getElementById("new-task").value;
    if (taskText === "") {
        showError("Please enter a book name!");
        return false;
    }

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const markCompletedButton = document.createElement("button");
    markCompletedButton.className = "mark-completed";
    markCompletedButton.textContent = "Mark as Read";
    markCompletedButton.addEventListener("click", function() {
        taskSpan.style.textDecoration = "line-through";
        taskSpan.style.color = "gray";
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(markCompletedButton);
    listItem.appendChild(deleteButton);

    document.getElementById("todo-list").appendChild(listItem);
    document.getElementById("new-task").value = "";
});