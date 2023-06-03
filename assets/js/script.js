let changeOptionsContainer = document.querySelector(".changeOptionsContainer");
let centerCenter = document.querySelector(".center-center");
let centerTime = document.querySelector(".center-time");
let centerPercentage = document.querySelector(".center-percentage");
let centerPomodoro = document.querySelector(".center-pomodoro");
let click = new Audio("../assets/audio/click.mp3")
let alarm = new Audio("../assets/audio/alarm.mp3")

updateTime();
setInterval(updateTime, 1000);
function updateTime() {
  centerTime.innerHTML = "";
  const [currentHour, currentMin, period] = getTime();

  switch (timeView) {
    case "24hr":
      {
        let timeDisplay = document.createTextNode(
          currentHour + ":" + currentMin
        );
        centerTime.appendChild(timeDisplay);
      }
      break;
    case "12hr":
      {
        let currentHour12 =
          currentHour > amPmCheck ? currentHour - 12 : currentHour;
        const timeDisplay = document.createTextNode(
          currentHour12 + ":" + currentMin + " " + period
        );
        centerTime.append(timeDisplay);
      }
      break;
  }
}

// For Time Toggle bar
function TimerPopBox(popElementId) {
  const popUpElement = document.getElementById(popElementId);
  popUpElement.classList.toggle("show");
  if (popElementId === "popId") {
    //For changing the clock from and to 24hr and 12hr
    popUpElement.addEventListener("click", function () {
      if (timeView === "24hr") {
        //To change the time to 12hr display
        timeView = "12hr";
        updateTime();
        popUpElement.innerHTML = "";
        popUpElement.textContent = "24hr Clock";
      } else {
        //To change the time to 24 hr display
        timeView = "24hr";
        updateTime();
        popUpElement.innerHTML = "";
        popUpElement.textContent = "12hr Clock";
      }
    });
  }
}
//Change the display of time(percentage,pomodoro)
let countD = 1;
function changeDisplay() {
  if (countD % 2 != 0) {
    changeOptionsContainer.style.display = "flex";
    countD++;
  } else {
    changeOptionsContainer.style = "none";
    countD--;
  }
}

//Displays the Day in percentage
function percentageDisplay() {
  centerTime.style.display = "none";
  let outerCircle = document.createElement("div");
  let innerCircle = document.createElement("div");
  let innerText = document.createElement("div");
  innerText.id = "innerText";
  outerCircle.id = "outerCircle";
  innerCircle.id = "innerCircle";
  let dayPercentageTxt = dayPercentageTextDisplay();
  innerText.innerHTML = dayPercentageTxt + "%" + "<p>" + "Day" + "</p>";
  innerCircle.append(innerText);

  centerPercentage.append(outerCircle, innerCircle);
  centerPercentage.id = "centerPercentage";
  centerPercentage.style.display = "block";
}
function clockDisplay() {
  centerTime.style.display = "inline-block";
  centerPercentage.style.display = "none";
}
function pomodoroDisplay() {
  centerPercentage.style.display="none"
  centerTime.style.display="none"
  let pomodoroContainer= document.createElement("div")
  pomodoroContainer.id = "pomodoroContainer"
  let pomodoroTopContainer = document.createElement("div")
  let pomodoroCenterContainer = document.createElement("div")
  let pomodoroCenterLeft = document.createElement("span")
  let pomodoroCenterRight = document.createElement("span")
  let pomodoroBottomContainer = document.createElement("div")
  let pomodoroTopLeft = document.createElement("button")
  let pomodoroTopRight = document.createElement("button")
  let pomodoroBottom = document.createElement("button")
  let pomodoroBottomShortBreak = document.createElement("button")
  pomodoroTopContainer.id = "pomodoroTopContainer"
  pomodoroTopLeft.id = "pomodoroTopLeft"
  pomodoroTopRight.id = "pomodoroTopRight"
  pomodoroBottom.id = "pomodoroBottom" 
  pomodoroCenterLeft.id = "pomodoroCenterLeft"
  pomodoroCenterRight.id= "pomodoroCenterRight"
  pomodoroBottomShortBreak.id ="pomodoroBottomShortBreak"
  pomodoroTopLeft.innerText="Pomodoro"
  pomodoroTopRight.innerText="Break"
  pomodoroBottomShortBreak.innerHTML="BREAK"
  pomodoroBottom.innerText = "START"
  pomodoroCenterLeft.innerHTML="25 : "
  pomodoroCenterRight.innerHTML=" 00"
pomodoroCenterContainer.id = "pomodoroCenterContainer" 
pomodoroBottomContainer.id = "pomodoroBottomContainer"
pomodoroCenterContainer.append(pomodoroCenterLeft,pomodoroCenterRight)
pomodoroBottomContainer.append(pomodoroBottom,pomodoroBottomShortBreak)
pomodoroTopContainer.append(pomodoroTopLeft,pomodoroTopRight)
pomodoroContainer.append(pomodoroTopContainer,pomodoroCenterContainer,pomodoroBottomContainer)
centerPomodoro.append(pomodoroContainer) 
pomodoroTopLeft.style.backgroundColor="#424242"
pomodoroBottomShortBreak.style.display="none"
pomodoroBottom.onclick=()=>pomodoroTimer()
}

function pomodoroTimer(){
  click.play()
  let minIntervalId = setInterval(minChange,60000)
  let secInterval= setInterval(secChange,1000)
  setTimeout(function(){
    clearInterval(minIntervalId);
    clearInterval(secInterval)
    pomodoroTopLeft.style.background="none";
    pomodoroTopRight.style.backgroundColor="#424242"
    pomodoroCenterLeft.innerHTML= "05:"
    pomodoroCenterRight.innerHTML = "00"
    alarm.play() 
    breakTimer()
}, 60000);

}
let min = 0
function minChange(){
  
  let pomodoroCenterLeft = document.querySelector("#pomodoroCenterLeft")
  if(min>=0)
  {
    min--
    pomodoroCenterLeft.innerHTML=min + " : "
    
  }

  
 
}
let sec = 59
function secChange()
{ 
  let pomodoroCenterRight = document.querySelector("#pomodoroCenterRight")
  if(sec>0){
    sec--
  pomodoroCenterRight.innerHTML= (sec>=10)?sec: "0"+sec
  }
  else{
    sec = 59
  }
}
