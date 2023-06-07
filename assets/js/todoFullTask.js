addNewTaskbutton.addEventListener("click", function(event) {
    let pattern = /^[A-Za-z0-9\s]{1,20}$/;
    if (inputTaskName.validity.valueMissing || !pattern.test(inputTaskName.value)  || inputTaskName.value == " ") {
      event.preventDefault();
      invalidPopUp.style.display="block"
      invalidPopUp.style.background="red"
      invalidPopUp.textContent="Invalid Input Please Enter a valid Input"
      setTimeout(function(){
        invalidPopUp.style.display="none"},3000
      )
      flagTodo = 1
    }
    else{
      flagTodo = 0
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
    invalidPopUp.style.display="none"
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
    let newStatus=false
    if (localStorage.getItem("todo")==null){
        localStorage.setItem("todo","[]")
        console.log("Empty")
    }
    let oldTasks = JSON.parse(localStorage.getItem("todo"))
    let taskObj = {status:newStatus,task:newTask, priority:priorityVal}
    if(newTask != "" && flagTodo ==0){
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
    inputTaskName.value=null
    let storedToDos = JSON.parse(localStorage.getItem("todo"));
    if (storedToDos == null) {
      storedToDos = [];
    }
    todoContain = "";
    storedToDos.forEach((oldTask) => {
      let checkedAttribute = oldTask.status ? "checked" : "";
      let taskStyle = oldTask.status ? "text-decoration: line-through;" : "";
      if(oldTask.priority==1){priorityVal= "High"}
      if(oldTask.priority==0){priorityVal= "Medium"}
      if(oldTask.priority==-1){priorityVal= "Low"}
      todoContain += `
        <tr scope="row">
          <td><input type="checkbox" ${checkedAttribute}></td>
          <td style="${taskStyle}">${oldTask.task}</td>
          <td>${priorityVal}</td>
          <td><img src="../assets/images/delete.svg"></td>
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
//To delete the items from the todo list
    let deletItems = tableBody.querySelectorAll("img")
    deletItems.forEach(function(deleteItem){
      deleteItem.addEventListener("click",function(){
          let row = deleteItem.parentNode.parentNode.rowIndex
          console.log("Clicked Row:",row)
          let storedToDos = JSON.parse(localStorage.getItem("todo"))
          console.log("Before:",storedToDos)
          storedToDos.splice(row-1,1)
          console.log("After",storedToDos)
          localStorage.setItem("todo",JSON.stringify(storedToDos))
          showtoDOList()
      })
      
    })
  }

  //To Delete an element

  
  // ...
  






