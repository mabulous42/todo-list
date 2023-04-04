let input = document.getElementById("input");
let showTodo = document.getElementById('display');

let arrayTodo = [];
function addItems() {    
    if (input.value === "") {
        alert("Input Something");
        return;
    }
    else {        
        if (arrayTodo.includes(input.value)) {
            alert("Items already exist");
            return;
        }
        else {
            showTodo.innerHTML = "";
            arrayTodo.push(input.value);
        arrayTodo.map((arrayElement, index) => {
            showTodo.innerHTML += `            
        <div class="dis">
            <h1>${arrayElement}</h1>
            <div>
            <button id='delete-btn' onclick='edit(${index})'>Edit</button>
            <button id='delete-btn' onclick='del(${index})'>Delete</button>
            </div>
        </div>
        `
        })
        }
        
    }
}

function del(rem) {
    arrayTodo.splice(rem, 1);
    showTodo.innerHTML = "";
    arrayTodo.map((sh, rem) => {
        console.log(sh, rem);
        showTodo.innerHTML += `
        <div class="dis">
            <h1>${sh}</h1>
            <div>
                <button id='delete-btn' onclick='edit(${rem})'>Edit</button>
                <button id='delete-btn' onclick='del(${rem})'>Delete</button>
            </div>
        </div>
        `
    })
}

function edit(rem) {
    arrayTodo.splice(rem, 1, input.value);
    showTodo.innerHTML = "";
    arrayTodo.map((sh, rem) => {
        console.log(sh, rem);
        showTodo.innerHTML += `
        <div class="dis">
            <h1>${sh}</h1>
            <div>
                <button id='delete-btn' onclick='edit(${rem})'>Edit</button>
                <button id='delete-btn' onclick='del(${rem})'>Delete</button>
            </div>
        </div>
        `
    })
}