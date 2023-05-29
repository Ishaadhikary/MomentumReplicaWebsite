let mainTaskCheckId = document.getElementById("mainTaskCheckId");
let mainTaskTextId = document.getElementById("mainTaskTextId");
console.log("UserTask:", mainTaskTextId)
function mainTask(){
    mainTaskTextId.addEventListener("keydown",function(e){
        if(e.key ==="Enter" ){
            localStorage.setItem("mainTaskText",mainTaskTextId.value)
        }
    })
}

mainTask()