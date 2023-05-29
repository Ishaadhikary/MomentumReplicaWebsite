let mainTaskCheckId = document.getElementById("mainTaskCheckId");
let mainTaskTextId = document.getElementById("mainTaskTextId");
let inputTask = document.querySelector(".inputTask");

inputTask.addEventListener("click", function () {
  inputTask.textContent=""
  mainTaskTextId.style.display="block"
  addMainTaskInfo();
});
function mainTask() {
  let storageMainTask = localStorage.getItem("mainTaskText");
 
  inputTask.textContent = storageMainTask;
  mainTaskTextId.style.display="none"
}
function addMainTaskInfo() {

  mainTaskTextId.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      localStorage.setItem("mainTaskText", mainTaskTextId.value);
      localStorage.setItem("mainTaskText", mainTaskTextId.value);
      storageMainTask = localStorage.getItem("mainTaskText");
      inputTask.textContent = storageMainTask;
      mainTaskTextId.style.display="none"
    }
  });
}


mainTask();
addMainTaskInfo()
