todoListContainer = document.querySelector(".todoListContainer")
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



