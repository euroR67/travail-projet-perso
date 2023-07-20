// getting all required elements
const inputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todoLists"),
    pendingNum = document.querySelector(".pending-nums"),
    clearBtn = document.querySelector(".clear-btn");


function allTasks() {
    let tasks = document.querySelectorAll(".pendings");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length
}

// ============== Function that add tasks ================//
inputField.addEventListener("keyup", function (e) {
    let inputValue = inputField.value.trim(); // trim function removes white spaces from inputed value

    //if enter button is pressed and input value length is greater than 0.
    if (e.key === "Enter" && inputValue.length > 0) {
        let liTag = `<li class="list pendings" onclick="handleStatus(this)">
                        <input type="checkbox">
                        <span class="task">${inputValue}</span>
                        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
                    </li>`
        //inserting li tag inside the todolist div
        todoLists.insertAdjacentHTML("beforeend", liTag);
        inputField.value = "";// removing value from input field
        allTasks()
    }
})

// checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pendings");
    allTasks()
}

function deleteTask(e) {
    e.parentElement.remove();
}

clearBtn.addEventListener("click", function() {
    todoLists.innerHTML = ""
    allTasks()
})