let mainTaskCheckId = document.getElementById("mainTaskCheckId");
let mainTaskTextId = document.getElementById("mainTaskTextId");
let mainTaskCheckBox = document.querySelector(".mainTaskCheckBox");
let inputTask = document.querySelector(".inputTask");
let mainTaskPopUp = document.querySelector(".mainTaskPopUp");

//To edit the main task
inputTask.addEventListener("click", function () {
  inputTask.textContent = "";
  mainTaskTextId.style.display = "inline-block";
  mainTaskCheckBox.style.display = "none";
  addMainTaskInfo();
});
//Initial Main Task container
function mainTask() {
  let storageMainTask = localStorage.getItem("mainTaskText");
  [currentHour, currentMin] = getTime();
  //To remove the main task after each day
  if (currentHour === 17 && currentMin === "08") {
    //This needs to be changed to 00:00
    localStorage.removeItem(mainTaskText);
  }
  if (storageMainTask != null) {
    inputTask.textContent = storageMainTask; //Get the main Task from Storage
    mainTaskTextId.style.display = "none";
  } else {
    mainTaskTextId.style.display = "inline-block";
  }
}
function addMainTaskInfo() {
  //To add the new main task
  mainTaskTextId.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      localStorage.setItem("mainTaskText", mainTaskTextId.value);
      storageMainTask = localStorage.getItem("mainTaskText");
      inputTask.textContent = storageMainTask;
      mainTaskTextId.style.display = "none";
      mainTaskCheckBox.style.display = "inline-block";
      inputTask.style.textDecoration = "none";
    }
  });
}

mainTask();
addMainTaskInfo();
let count = 1;
mainTaskCheckId.addEventListener("click", function () {
  let randomIndexMainTask = randomNumbers(MainTaskPopUpTxt);

  if (count % 2 != 0) {
    inputTask.style.textDecoration = "line-through";
    mainTaskPopUp.textContent = MainTaskPopUpTxt[randomIndexMainTask] + "👏";
    mainTaskPopUp.style.display = "block";
    setTimeout(function () {
      mainTaskPopUp.style.display = "none";
    }, 10000);
    count++;
  } else {
    inputTask.style.textDecoration = "none";
    count++;
  }
});
