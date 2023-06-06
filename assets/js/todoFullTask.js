let todoListContainer = document.querySelector(".todoListContainer")
let addTaskPopUp = document.getElementById("addTaskPopUp")
let initialAddTask = document.getElementById("initialAddTask")
let crossIcon = document.getElementById("crossIcon")
let addNewTaskbutton = document.getElementById("addNewTask")
let inputTaskName = document.getElementById("taskName")
let inputPriority= document.getElementById("priority")
let inputAlarm = document.getElementById("alarm")
let inputAlarmType = document.getElementById("alarmType")
let countTodo=1
let index= 0;
let priorityVal;
// let countAddTaskPopUp = 1
let todoTable= document.getElementById("todoTable")
let headerRow = document.querySelector("#todoTable tr")

let taskColumn = document.getElementById("taskColumn")
// let toDoTableheader

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
    addNewTaskbutton.addEventListener("click",function(e){e.preventDefault(); storeTaskInput()})
// Create array
// Add object to the array 
//Store input in local storage
    //add event Listner in submit
        //if input empty  
            //please enter the input
        //else
            //store in local storage
        //
}

crossIcon.addEventListener("click",function(){
    addTaskPopUp.style.display="none"
    initialAddTask.style.display="block"})

function storeTaskInput(){
    let newTask = inputTaskName.value
    let newPriority = inputPriority.value
    if(newPriority=="High"){priorityVal = 1}
    if(newPriority=="Medium"){priorityVal = 0}
    if(newPriority=="Low"){priorityVal = -1}
    let newAlarm = inputAlarm.value
    let newAlarmType = inputAlarmType.value
    let taskObj = {id:index, task:newTask, priority:priorityVal,alarm:newAlarm,alarmType:newAlarmType}
    console.log(taskObj)
    if (localStorage.getItem("todo")==null){
        localStorage.setItem("todo","[]")
    }
    let oldTasks =JSON.parse(localStorage.getItem("todo"))
    if(taskObj !=""){
        oldTasks.push(taskObj)
    }
    localStorage.setItem("todo", JSON.stringify(oldTasks))
let storedToDos = JSON.parse(localStorage.getItem("todo"))
console.log(storedToDos[1])
storedToDos.sort((a,b)=>b.priority-a.priority)
console.log(storedToDos)
}