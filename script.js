let input = document.getElementById("input");
let showTodo = document.getElementById('display');
let showStatusMessage = document.getElementById('showStatusMessage');
let showEditBox = document.getElementById("edit-container");
let showInputContainer = document.getElementById("input-container");
let editInput = document.getElementById("input-edit");

let arrayTodo = [];
showEditBox.style.display = "none";

function printArray() {
    showTodo.innerHTML = "";
    arrayTodo.map((arrayElement, index) => {
        showTodo.innerHTML += `            
        <div class="display">
            <h1 id='arrayItem'>${index+1} ${" "} ${arrayElement}</h1>
            <div>
                <button id='edit-btn' onclick='edit(${index})'>Edit</button>
                <button id='delete-btn' onclick='del(${index})'>Delete</button>
            </div>
        </div>
        `
    })
}

function addItems() {
    if (input.value === "") {
        showStatusMessage.innerHTML = "<p id='error-message'>" + "Input field cannot be empty!!!" + "</p>";

        return;
    }
    else {
        arrayTodo.push(input.value);
        showStatusMessage.innerHTML = "<p id='success-message'>" + "Todo added successfully" + "</p>";
        printArray();
        input.value = "";
    }
}

function del(rem) {
    arrayTodo.splice(rem, 1);
    printArray();
}

let editIndex = 0;

function edit(rem) {
    editIndex = rem;
    console.log(rem);
    editInput.value = "";
    showEditBox.style.display = "block";
    editInput.value = arrayTodo[rem];
    showInputContainer.style.display = "none";
}

function done() {
    if (editInput.value === "") {
        alert("Input field cannot be empty");
        return;
    }
    else {
        arrayTodo.splice(editIndex, 1, editInput.value);
        printArray();
        editInput.value = "";
        showInputContainer.style.display = "block";
        showEditBox.style.display = "none";  
    }

}

