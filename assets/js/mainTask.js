let mainTaskCheckId = document.getElementById("mainTaskCheckId");
let mainTaskTextId = document.getElementById("mainTaskTextId");
let inputTask= document.querySelector(".inputTask")
console.log("UserTask:", mainTaskTextId)
function mainTask(){
    mainTaskTextId.addEventListener("keydown",function(e){
        if(e.key ==="Enter" ){
            localStorage.setItem("mainTaskText",mainTaskTextId.value)
            storageMainTask= localStorage.getItem("mainTaskText")
            inputTask.textContent=storageMainTask

        }
    })
}

mainTask()