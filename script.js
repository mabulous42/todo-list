let input = document.getElementById("input");
let showTodo = document.getElementById('display');
let showStatusMessage = document.getElementById('showStatusMessage');
let showEditBox = document.getElementById("edit-container");
let showInputContainer = document.getElementById("input-container");
let editInput = document.getElementById("input-edit");

let arrayTodo = [];
showEditBox.style.display = "none";

function printArray() {
    OverallDisplay(locStorage);
}

let getter = ""
function getLocalStorage() {
    getter = JSON.parse(localStorage.getItem("todoList"));
    console.log(getter);
    OverallDisplay(getter);
}
getLocalStorage();

let locStorage = getter;

function addItems() {

    if (input.value === "") {
        showStatusMessage.innerHTML = "<p id='error-message'>" + "Input field cannot be empty!!!" + "</p>";

        return;
    }
    else {
        if (locStorage == "") {
            locStorage = []
            locStorage.push(input.value);
            localStorage.setItem('todoList', JSON.stringify(locStorage));
            arrayTodo.push(input.value);
            showStatusMessage.innerHTML = "<p id='success-message'>" + "Todo added successfully" + "</p>";
            printArray();
            input.value = "";
            
        } else {
            locStorage.push(input.value);
            localStorage.setItem('todoList', JSON.stringify(locStorage));
            arrayTodo.push(input.value);
            showStatusMessage.innerHTML = "<p id='success-message'>" + "Todo added successfully" + "</p>";
            printArray();
            input.value = "";
        }  
    }
}




function OverallDisplay(arrayName) {
    showTodo.innerHTML = "";
    arrayName.map((arrayElement, index) => {
        showTodo.innerHTML += `            
        <div class="display">
            <h1 id='arrayItem'>${index + 1} ${" "} ${arrayElement}</h1>
            <div>
                <button id='edit-btn' onclick='edit(${index})'>Edit</button>
                <button id='delete-btn' onclick='del(${index})'>Delete</button>
            </div>
        </div>
        `
    })
}

function del(rem) {
    arrayTodo.splice(rem, 1);
    locStorage.splice(rem, 1); //Add the text 'item1' to locStorage
    localStorage.setItem('todoList', JSON.stringify(locStorage));

    printArray();
}

let editIndex = 0;

function edit(index) {
    editIndex = index;
    console.log(index);
    editInput.value = "";
    showEditBox.style.display = "block";
    editInput.value = arrayTodo[index];
    showInputContainer.style.display = "none";
}

function done() {
    if (editInput.value === "") {
        alert("Input field cannot be empty");
        return;
    }
    else {
        arrayTodo.splice(editIndex, 1, editInput.value);

        locStorage.splice(editIndex, 1, editInput.value); //Add the text 'item1' to locStorage
        localStorage.setItem('todoList', JSON.stringify(locStorage));

        printArray();
        editInput.value = "";
        showInputContainer.style.display = "block";
        showEditBox.style.display = "none";
    }

}

