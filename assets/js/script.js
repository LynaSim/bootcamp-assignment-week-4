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
            alert("That one is already on :)")
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
                <button type="button" class="delete-button btn btn-outline-warning btn-sm">Delete</button>
                <button type=button class="edit-button btn btn-outline-secondary btn-sm">Edit</button>
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
            var parentDiv = button.parentNode;
            var labelToEdit = parentDiv.children[1];
            labelToEdit = labelToEdit.textContent;
            //Edit mode 
            mainContentEl.innerHTML = `<input type="text" id="edit-field" name="" required minlength="2" maxlength="100" value="${labelToEdit}" /><button class="btn btn-outline-success btn-sm" id="save-button" type="submit">Save</button>`;
            tasks = tasks.filter((item) => item !== labelToEdit);
            var saveButton = document.getElementById("save-button");
            console.log(saveButton);
            var newTask = document.getElementById("edit-field");
            newTask = newTask.value;
            // console.log(newTask);

            //Event listener for Save button
            saveButton.addEventListener('click', function (event) {
                validateEditInput();
            });

            //Event listener for Enter key
            var newTask = document.getElementById("edit-field");
            newTask.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    console.log("Enter key pressed");
                    validateEditInput();
                }
            });

            function validateEditInput() {
                var newTask = document.getElementById("edit-field");

                newTask = newTask.value;
                // console.log(newTask);
                if (newTask) {
                    if (tasks.includes(newTask) === false) {
                        tasks.push(newTask);
                        createNewDivEl();
                        activateCheckboxes();
                    } else {
                        alert("That one is already on :)")
                    };

                } else {
                    alert("Please add a task.");
                };
            }

        });

    });

}

function activateCheckboxes() {
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    console.log(allCheckboxes);
    allCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function (event) {
            if (checkbox.checked) {
                console.log("Checked");
                checkbox.nextElementSibling.style.textDecoration = "line-through";
                checkbox.nextElementSibling.style.backgroundColor = "#258292";
                checkbox.nextElementSibling.style.color = "white";
                confetti({
                    position: { x: 100, y: 100 },// Origin position
                    count: 200,			// Number of particles
                    size: 1,			// Size of the particles
                    velocity: 200,		// Initial particle velocity
                    fade: false			// Particles fall off the screen, or fade out
                });
            } else {
                console.log("Unchecked");
                checkbox.nextElementSibling.style.textDecoration = "none";
                checkbox.nextElementSibling.style.backgroundColor = "transparent";
                checkbox.nextElementSibling.style.color = "black";

            }
        })
    })
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

