var addButton = document.getElementById('add-button');
var taskInput = document.getElementById('task-name');
console.log(taskInput);

addButton.addEventListener('click', function (event) {
    //Creates a new task on every click
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
                        <button type="button" class="delete-button">Delete</button>
                    </div>
                </div>`;
    newDivEl.outerHTML = someHTML;
    taskInput.value = "";

    // Adds an eventlistener to each delete-button created
    // var mainContentEl = document.querySelector(".list-container");
    var deleteButtons = document.querySelectorAll(".delete-button");
    console.log(deleteButtons);
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function (event) {
            var nodeToDelete = button.parentNode;
            console.log(nodeToDelete);
            nodeToDelete.remove();
        });
    });

});





// deleteButton.addEventListener('click', function (event) {
//     var nodesToDelete = deleteButton.parentNode;
//     console.log(nodesToDelete);
// });



