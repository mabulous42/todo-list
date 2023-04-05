let input = document.getElementById("input");
let showTodo = document.getElementById('display');
let showStatusMessage = document.getElementById('showStatusMessage');

let arrayTodo = [];

function printArray() {
    showTodo.innerHTML = "";
    arrayTodo.map((arrayElement, index) => {
        showTodo.innerHTML += `            
        <div class="display">
            <h1 id='arrayItem'>${arrayElement}</h1>
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
        // alert("Input field cannot be empty");
        showStatusMessage.innerHTML = "<p id='error-message'>"+"Input field cannot be empty!!!"+"</p>";
        return;
    }
    else {
        arrayTodo.push(input.value);
        showStatusMessage.innerHTML = "<p id='success-message'>"+"Todo added successfully"+"</p>";
        printArray();
        input.value = "";
        // if (arrayTodo.includes(input.value)) {
        //     alert("Items already exist");
        //     input.value = "";
        //     return;
        // }
        // else {
        //     showTodo.innerHTML = "";
        //     arrayTodo.push(input.value);
        //     printArray();
        //     input.value = "";
        // }

    }
}

function del(rem) {
    arrayTodo.splice(rem, 1);
    printArray();
}

function edit(rem) {
    if (input.value === "") {
        alert("Input field cannot be empty");
        return;
    }
    else {
        arrayTodo.splice(rem, 1, input.value);
        printArray();
        input.value = "";
    }

}