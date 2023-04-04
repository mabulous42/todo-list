let reveal = document.getElementById("reveal");
let dis = document.getElementById("dis");
let showTodo = document.getElementById('list');



let arrNew = [];
function showBtn() {
    // arrNew = reveal.value;
    showTodo.innerHTML = "";
    arrNew.push(reveal.value);
    arrNew.map((sh, rem) => {
        console.log(sh, rem);
        showTodo.innerHTML +=`
        <div class="dis">
            <h1>${sh}</h1>
            <button id='d-btn' onclick='del(${rem})'>Delete</button>
        </div>
        `
    })
    // list.innerHTML += "<h1 id='dis'>" + arrNew + "<br>" + "<button id='d-btn' onclick='del('rem')'>"+"Delete"+"</button>"+"</h1>";
    
}

function del(rem) {
    arrNew.splice(rem,1);
    
    showTodo.innerHTML = "";
    arrNew.map((sh, rem) => {
        console.log(sh, rem);
        showTodo.innerHTML +=`
        <div class="dis">
            <h1>${sh}</h1>
            <button id='d-btn' onclick='del(${rem})'>Delete</button>
        </div>
        `
    })
}