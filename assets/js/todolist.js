let todoListContainer = document.querySelector(".todoListContainer")
let expand = document.getElementById("expand")
let countTodo=1
function todoList(){
    if(countTodo % 2 != 0)
    {
    todoListContainer.style.display ="block"
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
    countE++
}
    else {
    todoListContainer.style.width="400px"
    todoListContainer.style.height="300px"
    expand.src="assets/images/expand.svg"
    countE++
     }

})





