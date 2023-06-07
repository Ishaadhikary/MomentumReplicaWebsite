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
  const [currentHour, currentMin] = getTime();
  let storedMainTaskStatus = JSON.parse(localStorage.getItem("mainTaskStatus"));
//To save the state of the stored task
  if (storedMainTaskStatus) {
    inputTask.style.textDecoration = "line-through";
    mainTaskCheckId.checked=true
  } else {
    inputTask.style.textDecoration = "none";
    mainTaskCheckId.checked=false
  }
  //To remove the main task after each day
  if (currentHour == "12" && currentMin == "53") {
    //This needs to be changed to 00:00
    localStorage.removeItem("mainTaskText");
    mainTaskCheckId.checked=false

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

      localStorage.setItem("mainTaskText", (mainTaskTextId.value));
      let storageMainTask = localStorage.getItem("mainTaskText");
      inputTask.textContent = storageMainTask;
      mainTaskTextId.style.display = "none";
      mainTaskCheckBox.style.display = "inline-block";
      inputTask.style.textDecoration = "none";
    }
  });
}

mainTask();
addMainTaskInfo();
// let count = 1;
mainTaskCheckId.addEventListener("change", function () {
  let randomIndexMainTask = randomNumbers(MainTaskPopUpTxt);

  if (mainTaskCheckId.checked) {
    let mainTaskStatus=true
    localStorage.setItem("mainTaskStatus",JSON.stringify(mainTaskStatus))
    inputTask.style.textDecoration = "line-through";
    mainTaskPopUp.textContent = MainTaskPopUpTxt[randomIndexMainTask] + "👏";
    mainTaskPopUp.style.display = "block";
    setTimeout(function () {
      mainTaskPopUp.style.display = "none";
    }, 10000);
  } else {
    mainTaskStatus=false
    inputTask.style.textDecoration = "none";
    localStorage.setItem("mainTaskStatus",JSON.stringify(mainTaskStatus))
    

  }
});

//Getting the stored mainTask Id


