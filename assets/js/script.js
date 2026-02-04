var addButton = document.getElementById('add-button');
var taskInput = document.getElementById('task-name');
console.log(taskInput);

addButton.addEventListener('click', function (event) {

    var newTask = taskInput.value;
    var newDivEl = document.createElement("div");
    newDivEl.className = "list-item";
    newDivEl.textContent = newTask;
    console.log(newDivEl);
    var mainContentEl = document.querySelector(".list-container");
    mainContentEl.appendChild(newDivEl);
    var someHTML = `<div class="list-item">
                    <div>
                        <input type="checkbox" id="task" name="task" value="task" unchecked />
                        <label for="task">${newTask}</label>
                        <button type="button" class="delete-task">Delete</button>
                    </div>
                </div>`;
    newDivEl.outerHTML = someHTML;
    taskInput.value = "";

});

