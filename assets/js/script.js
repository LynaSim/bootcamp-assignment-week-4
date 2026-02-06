var addButton = document.getElementById('add-button');
var taskInput = document.getElementById('task-name');
console.log(taskInput);

//Handling event of press enter in input field
taskInput.addEventListener('keydown', function (event) {
    console.log(event);

    if (event.key === 'Enter') {

        //Creates a new task on pressing 'enter' key
        var newTask = taskInput.value;

        //Checks the value is not empty
        if (newTask) {

            var newDivEl = document.createElement("div");
            newDivEl.className = "list-item";
            newDivEl.textContent = newTask;
            console.log(newDivEl);
            var mainContentEl = document.querySelector(".list-container");
            mainContentEl.appendChild(newDivEl);
            var someHTML = `<div class="list-item">
                    <div>
                        <input type="checkbox" name="task" value="task" unchecked />
                        <label for="task">${newTask}</label>
                        <button type="button" class="delete-button">Delete</button>
                    </div>
                </div>`;
            newDivEl.outerHTML = someHTML;
            taskInput.value = "";

            // Adds an eventlistener to each delete-button created
            var deleteButtons = document.querySelectorAll(".delete-button");
            console.log(deleteButtons);
            deleteButtons.forEach(function (button) {
                button.addEventListener('click', function (event) {
                    var nodesToDelete = button.parentNode;
                    console.log(nodesToDelete);
                    nodesToDelete.remove();
                });
            });

        } else {
            alert("Please type something.");
        };


    }

})


//Handling event of clicking the "add" button
addButton.addEventListener('click', function (event) {
    //Creates a new task on every click
    var newTask = taskInput.value;

    //Checks the value is not empty
    if (newTask) {

        var newDivEl = document.createElement("div");
        newDivEl.className = "list-item";
        newDivEl.textContent = newTask;
        console.log(newDivEl);
        var mainContentEl = document.querySelector(".list-container");
        mainContentEl.appendChild(newDivEl);
        var someHTML = `<div class="list-item">
                    <div>
                        <input type="checkbox" name="task" value="task" unchecked />
                        <label for="task">${newTask}</label>
                        <button type="button" class="delete-button">Delete</button>
                    </div>
                </div>`;
        newDivEl.outerHTML = someHTML;
        taskInput.value = "";

        // Adds an eventlistener to each delete-button created
        var deleteButtons = document.querySelectorAll(".delete-button");
        console.log(deleteButtons);
        deleteButtons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                var nodesToDelete = button.parentNode;
                console.log(nodesToDelete);
                nodesToDelete.remove();
            });
        });

    } else {
        alert("Please type something.");
    };

});