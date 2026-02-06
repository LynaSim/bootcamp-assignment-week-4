var tasks = [];
console.log(tasks);
var addButton = document.getElementById('add-button');
var taskInput = document.getElementById('task-name');
console.log(taskInput);
var newTask = taskInput.value;
console.log(newTask);
var mainContentEl = document.querySelector(".list-container");

//Checks, validation
function validateInput() {
    var newTask = taskInput.value.trim();//removes "spaces"
    console.log(newTask);

    if (newTask) {
        if (tasks.includes(newTask)===false) {
            AddtoArray();
        } else {
            alert("You already have that one down.")
        };
        
    } else {
        alert("Please type something.");
    };
};



// Function grabs input value and add to array
function AddtoArray() {
    var newTask = taskInput.value.trim();
    tasks.push(newTask);
    console.log(tasks);
    console.log(newTask);
    createNewDivEl();

}

// Function to generate new <div> for each value in the array
function createNewDivEl() {
    for (var i = 0; i < tasks.length; i++) {
        var newLabel = tasks[i];
        console.log(newLabel);

        var newDivEl = document.createElement("div");
        newDivEl.className = "list-item";
        newDivEl.textContent = newLabel;
        console.log(newDivEl);
    };

    mainContentEl.appendChild(newDivEl);
    var someHTML = `<div class="list-item">
            <div>
                <input type="checkbox" name="task" value="task" unchecked />
                <label for="task">${newLabel}</label>
                <button type="button" class="delete-button">Delete</button>
            </div>
        </div>`;
    newDivEl.outerHTML = someHTML;
    taskInput.value = ""; 
};


// Event listeners
addButton.addEventListener('click', validateInput);



// addButton.addEventListener('click', function (event) { })
// taskInput.addEventListener('keydown', AddtoArray);






