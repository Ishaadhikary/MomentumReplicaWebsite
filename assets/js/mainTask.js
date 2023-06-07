

//To edit the main task
inputTask.addEventListener("click", function () {
  inputTask.textContent = "";
  mainTaskTextId.style.display = "inline-block";
  mainTaskCheckBox.style.display = "none";
  mainTaskCheckId.checked=false
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
      let pattern = /^[A-Za-z0-9\s]{1,30}$/;
      if (mainTaskTextId.value==""|| !pattern.test(mainTaskTextId.value)  || mainTaskTextId.value == " ") {
        invalidPopUp.style.display="block"
        invalidPopUp.style.background="red"
        invalidPopUp.textContent="Invalid Input Please Enter a valid Input"
        console.log("invalid Input")
        flagMain=1
        setTimeout(function(){
          invalidPopUp.style.display="none"},3000
        )}
        else{
          flagMain=0
        }
        if(flagMain==0){
          localStorage.setItem("mainTaskText", (mainTaskTextId.value));
          let storageMainTask = localStorage.getItem("mainTaskText");
          inputTask.textContent = storageMainTask;
          mainTaskTextId.style.display = "none";
          mainTaskCheckBox.style.display = "inline-block";
          inputTask.style.textDecoration = "none";}
        
     
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


