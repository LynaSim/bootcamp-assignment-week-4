var tasks = [];
// console.log(tasks);
var addButton = document.getElementById('add-button');
var taskInput = document.getElementById('task-name');
// console.log(taskInput);
var newTask = taskInput.value;
// console.log(newTask);
var mainContentEl = document.querySelector(".list-container");

//Checks, validation
function validateInput() {
    var newTask = taskInput.value.trim();//removes "spaces"

    if (newTask) {
        if (tasks.includes(newTask) === false) {
            AddtoArray();
        } else {
            alert("That one is already in :)")
        };

    } else {
        alert("Please add a task.");
    };
};



// Function grabs input value and add to array
function AddtoArray() {
    var newTask = taskInput.value.trim();
    tasks.push(newTask);
    createNewDivEl();
}

// Function to generate new <div> for each value in the array
function createNewDivEl() {
    var mainContentEl = document.querySelector(".list-container");
    mainContentEl.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var newLabel = tasks[i];
        var newDivEl = document.createElement("div");
        newDivEl.innerHTML = `<div class="list-item">
            <div>
                <input type="checkbox" name="task" value="task" unchecked />
                <label for="task">${newLabel}</label>
                <button type="button" class="delete-button">Delete</button>
            </div>
        </div>`;
        mainContentEl.appendChild(newDivEl);
    };

    taskInput.value = "";

    // Adds an eventlistener to each delete-button created
    var deleteButtons = document.querySelectorAll(".delete-button");
    
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var labelToDelete = button.previousElementSibling.textContent;
            console.log(labelToDelete);
            tasks = tasks.filter((item) => item !== labelToDelete);
            console.log(tasks);
            var nodesToDelete = button.parentNode;
            nodesToDelete.remove();
        });
    });

}



// Event listeners
addButton.addEventListener('click', validateInput);

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validateInput();
    }
})

