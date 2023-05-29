let mainTaskCheckId = document.getElementById("mainTaskCheckId");
let mainTaskTextId = document.getElementById("mainTaskTextId");
let mainTaskCheckBox = document.querySelector(".mainTaskCheckBox")
let inputTask = document.querySelector(".inputTask");
//To edit the main task
inputTask.addEventListener("click", function () {
  inputTask.textContent=""
  mainTaskTextId.style.display="inline-block"
  mainTaskCheckBox.style.display="none"
  addMainTaskInfo();
});
//Initial Main Task container
function mainTask() {
  let storageMainTask = localStorage.getItem("mainTaskText");
  [currentHour, currentMin] = getTime()
  //To remove the main task after each day
  if(currentHour===17 && currentMin==="08"){//This needs to be changed to 00:00
    localStorage.removeItem(mainTaskText)
  }
  if (storageMainTask!=null){
  inputTask.textContent = storageMainTask;//Get the main Task from Storage
  mainTaskTextId.style.display="none"}
  else{
    mainTaskTextId.style.display="inline-block"
  }
}
function addMainTaskInfo() {
//To add the new main task
  mainTaskTextId.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      localStorage.setItem("mainTaskText", mainTaskTextId.value);
      storageMainTask = localStorage.getItem("mainTaskText");
      inputTask.textContent = storageMainTask;
      mainTaskTextId.style.display="none"
      mainTaskCheckBox.style.display="inline-block"
    }
  });
}

mainTask();
addMainTaskInfo();
let count = 1
mainTaskCheckId.addEventListener("click",function(){
  
  console.log("beforeif",count)
    if ((count % 2 ) != 0 ){
    inputTask.style.textDecoration="line-through"
    count=count+1
    console.log("if",count)
  }
    else{
      inputTask.style.textDecoration="none"
      count++
      console.log("else",count)
    }

})
//When the task is marked as done
//Check box tick:
  //subscript the inputTask
  //Pop up good job
