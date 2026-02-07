var tasks = [];
var addButton = document.getElementById('add-button');
var taskInput = document.getElementById('task-name');
var newTask = taskInput.value;
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
}



// Function grabs input value and add to array
function AddtoArray() {
    var newTask = taskInput.value.trim();
    tasks.push(newTask);
    createNewDivEl();
}

// Function to generate new <div> for each value in the array
function createNewDivEl() {
    var mainContentEl = document.querySelector(".list-container");
    mainContentEl.innerHTML = "";//avoids duplicates

    for (var i = 0; i < tasks.length; i++) {
        var newLabel = tasks[i];
        var newDivEl = document.createElement("div");
        newDivEl.innerHTML = `<div class="list-item">
            <div>
                <input type="checkbox" name="task" value="task" unchecked />
                <label for="task">${newLabel}</label>
                <button type="button" class="delete-button">Delete</button>
                <button type=button class="edit-button">Edit</button>
            </div>
        </div>`;
        mainContentEl.appendChild(newDivEl);
    }

    taskInput.value = "";// clears the input field

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

    // Adds an eventlistener to each edit-button created
    var editButtons = document.querySelectorAll(".edit-button");

    editButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            console.log("Hello");
            var parentDiv = button.parentNode;
            console.log(parentDiv);
            var labelToEdit = parentDiv.children[1];
            console.log(labelToEdit);
            labelToEdit = labelToEdit.textContent;
            console.log(labelToEdit);
            parentDiv.innerHTML = `<input type="text" id="edit-field" name="" required minlength="2" maxlength="100" size="30" value="${labelToEdit}" /><button id="save-button" type="submit">Save</button>`;
            console.log(parentDiv);
            tasks = tasks.filter((item) => item !== labelToEdit);
            console.log(tasks);

            var saveButton = document.getElementById("save-button");
            console.log(saveButton);
            var newTask = document.getElementById("edit-field");

            //Event listener for Save button
            saveButton.addEventListener('click', function (event) {
                var newTask = document.getElementById("edit-field");

                newTask = newTask.value;
                console.log(newTask);
                if (newTask) {
                    if (tasks.includes(newTask) === false) {
                        tasks.push(newTask);
                        createNewDivEl();
                        activateCheckboxes();
                    } else {
                        alert("That one is already in :)")
                    };

                } else {
                    alert("Please add a task.");
                };

            });

        });

    });

}

function activateCheckboxes() {
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    console.log(allCheckboxes);
}

// Event listeners
addButton.addEventListener('click', function (event) {
    validateInput();
    activateCheckboxes();
});

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validateInput();
        activateCheckboxes();
    }
});

