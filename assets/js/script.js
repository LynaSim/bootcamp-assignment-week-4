var addNewTaskDiv = document.querySelector('.add-new-task');
var taskInput = document.getElementById('task-name');

addNewTaskDiv.addEventListener('click', function (event) {

    var newTask = taskInput.value;
    var newDivEl = document.createElement("div");
    newDivEl.className = "list-item";
    newDivEl.textContent = newTask;
    var mainContentEl = document.querySelector(".list-container");
    mainContentEl.appendChild(newDivEl);

});

