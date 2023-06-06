// let todoListContainer = document.querySelector(".todoListContainer")
// let expand = document.getElementById("expand")
// let countTodo=1
// let todoTable= document.getElementById("todoTable")
// let headerRow = document.querySelector("#todoTable tr")
// console.log(headerRow)
// let statusColumn = document.getElementById("statusColumn")
// let taskColumn = document.getElementById("taskColumn")
// let categoryColumn = document.getElementById("categoryColumn")
// let timerColumn = document.getElementById("timerColumn")
// let priorityColumn = document.getElementById("priorityColumn")
// let expandIcon = document.getElementById("expand")

// function todoList(){
//     if(countTodo % 2 != 0 )
//     {
//     todoListContainer.style.display ="block"
//     todoListContainer.style.width="600px"
//     todoListContainer.style.height="600px"
//     // categoryColumn.style.display="none"
//     // timerColumn.style.display="none"
//     // priorityColumn.style.display="none"
//     addingItems()
//     countTodo++
//     }
    
//     else{
//         todoListContainer.style.display="none"
//         countTodo++
//     }
// }
// //To expand the todo list for the user
// let countE = 1
// expand.addEventListener("click", function(){
//     if((countE %2) != 0){
//     todoListContainer.style.width="600px"
//     todoListContainer.style.height="600px"
//     expand.src="assets/images/collapse.svg"
//     taskColumn.style.width="50%"
//     categoryColumn.style.display="table-cell"
//     timerColumn.style.display="table-cell"
//     priorityColumn.style.display="table-cell"
//     countE++
// }
//     else {
//     todoListContainer.style.width="400px"
//     todoListContainer.style.height="300px"
//     taskColumn.style.width="90%"
//     categoryColumn.style.display="none"
//     timerColumn.style.display="none"
//     priorityColumn.style.display="none"
    
//     expand.src="assets/images/expand.svg"
//     countE++
//      }

// })

// function addingItems(){
//     task1 = document.createElement("tr")
//     status1 = document.createElement("td")
//     tasKName1 = document.createElement("td")
//     category1 = document.createElement("td")
//     timer1 = document.createElement("td")
//     priority1 = document.createElement("td")
//     status1.innerHTML="Test"
//     tasKName1.innerHTML="Test"
//     category1.innerHTML="Test"
//     timer1.innerHTML="Test"
//     priority1.innerHTML="Test"
// task1.append(status1,tasKName1,category1,timer1,priority1)
// todoTable.append(task1)
    

// }



