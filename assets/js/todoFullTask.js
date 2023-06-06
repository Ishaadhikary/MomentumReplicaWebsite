let todoListContainer = document.querySelector(".todoListContainer")
let addTaskPopUp = document.getElementById("addTaskPopUp")
let initialAddTask = document.getElementById("initialAddTask")
let countTodo=1
// let countAddTaskPopUp = 1
let todoTable= document.getElementById("todoTable")
let headerRow = document.querySelector("#todoTable tr")

let taskColumn = document.getElementById("taskColumn")

function todoList(){
    if(countTodo % 2 != 0 )
    {
    todoListContainer.style.display ="flex"
    todoListContainer.style.width="600px"
    taskColumn.style.width="55%"
    
    initialAddTask.style.display="block"
    // addItems()
    countTodo++
    }
    
    else{
        todoListContainer.style.display="none"
        addTaskPopUp.style.display="none"
        countTodo++
    }
}


function initialAddtaskPopUp(){
    addTaskPopUp.style.display="block"
    initialAddTask.style.display="none"

}