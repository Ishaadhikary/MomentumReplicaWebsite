let mainTaskCheckId = document.getElementById("mainTaskCheckId");
let mainTaskTextId = document.getElementById("mainTaskTextId");
let inputTask = document.querySelector(".inputTask");
//To edit the main task
inputTask.addEventListener("click", function () {
  inputTask.textContent=""
  mainTaskTextId.style.display="inline-block"
  addMainTaskInfo();
});
//Initial Main Task container
function mainTask() {
  let storageMainTask = localStorage.getItem("mainTaskText");
  [currentHour] = getTime()
  if(currentHour===17){
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
    }
  });
}


mainTask();
addMainTaskInfo()
