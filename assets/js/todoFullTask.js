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
let priorityVal;
let todoTable= document.getElementById("todoTable")
let headerRow = document.querySelector("#todoTable tr")
let taskColumn = document.getElementById("taskColumn")
let tableBody = document.getElementById("tableBody")
let todoContain;
var flag = 0
addNewTaskbutton.addEventListener("click", function(event) {
    let pattern = /^[A-Za-z0-9]{1,20}$/;
    if (inputTaskName.validity.valueMissing || !pattern.test(inputTaskName.value)) {
      event.preventDefault();
      alert("Invalid Input!");
      flag = 1
    }
    else{
        flag = 0
    }
  });
// let toDoTableheader
storeTaskInput()

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
    let newStatus=false
    let newAlarmType = inputAlarmType.value
    if (localStorage.getItem("todo")==null){
        localStorage.setItem("todo","[]")
        console.log("Empty")
    }
    let oldTasks = JSON.parse(localStorage.getItem("todo"))
    let taskObj = {status:newStatus,task:newTask, priority:priorityVal,alarm:newAlarm,alarmType:newAlarmType}
    if(newTask != "" && flag ==0){
        oldTasks.push(taskObj)
    }
    localStorage.setItem("todo", JSON.stringify(oldTasks))
    let storedToDos = JSON.parse(localStorage.getItem("todo"))
    storedToDos.sort((a,b)=>b.priority-a.priority)
    localStorage.setItem("todo",JSON.stringify(storedToDos))
    showtoDOList()
}

// ...

function showtoDOList() {
    let storedToDos = JSON.parse(localStorage.getItem("todo"));
    if (storedToDos == null) {
      storedToDos = [];
    }
    todoContain = "";
    storedToDos.forEach((oldTask) => {
      let checkedAttribute = oldTask.status ? "checked" : "";
      let taskStyle = oldTask.status ? "text-decoration: line-through;" : "";
      todoContain += `
        <tr scope="row">
          <td><input type="checkbox" ${checkedAttribute}></td>
          <td style="${taskStyle}">${oldTask.task}</td>
          <td>${oldTask.priority}</td>
          <td>${oldTask.alarm}</td>
          <td>${oldTask.alarmType}</td>
        </tr>`;
    });
    tableBody.innerHTML = todoContain;
  
    //To add strike through when checked
    let checkboxes = tableBody.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        let row = checkbox.parentNode.parentNode;
        let taskCompleted = row.querySelector("td:nth-child(2)");
        let taskName = taskCompleted.innerText;
        let storedToDos = JSON.parse(localStorage.getItem("todo"));
        let taskIndex = storedToDos.findIndex((task) => task.task === taskName);
  
        if (checkbox.checked) {
          taskCompleted.style.setProperty("text-decoration", "line-through");
          storedToDos[taskIndex].status = true;
        } else {
          taskCompleted.style.removeProperty("text-decoration");
          storedToDos[taskIndex].status = false;
        }
  
        localStorage.setItem("todo", JSON.stringify(storedToDos));
      });
    });
  }
  
  // ...
  






