let todoListContainer = document.querySelector(".todoListContainer")
let expand = document.getElementById("expand")
let countTodo=1
let todoTable= document.getElementById("todoTable")
let headerRow = document.querySelector("#todoTable tr")
console.log(headerRow)
let statusColumn = document.getElementById("statusColumn")
let taskColumn = document.getElementById("taskColumn")
let categoryColumn = document.getElementById("categoryColumn")
let timerColumn = document.getElementById("timerColumn")
let priorityColumn = document.getElementById("priorityColumn")

function todoList(){
    if(countTodo % 2 != 0)
    {
    todoListContainer.style.display ="block"
    categoryColumn.style.display="none"
    timerColumn.style.display="none"
    priorityColumn.style.display="none"
    
    countTodo++
    }
    else{
        todoListContainer.style.display="none"
        countTodo++
    }
}
//To expand the todo list for the user
let countE = 1
expand.addEventListener("click", function(){
    if((countE %2) != 0){
    todoListContainer.style.width="600px"
    todoListContainer.style.height="600px"
    expand.src="assets/images/collapse.svg"
    taskColumn.style.width="50%"
    categoryColumn.style.display="table-cell"
    timerColumn.style.display="table-cell"
    priorityColumn.style.display="table-cell"
    countE++
}
    else {
    todoListContainer.style.width="400px"
    todoListContainer.style.height="300px"
    taskColumn.style.width="90%"
    categoryColumn.style.display="none"
    timerColumn.style.display="none"
    priorityColumn.style.display="none"
    
    expand.src="assets/images/expand.svg"
    countE++
     }

})





