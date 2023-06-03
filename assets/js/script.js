let changeOptionsContainer = document.querySelector(".changeOptionsContainer");
let centerCenter = document.querySelector(".center-center");
let centerTime = document.querySelector(".center-time");
let centerPercentage = document.querySelector(".center-percentage");
let centerPomodoro = document.querySelector(".center-pomodoro");
let click = new Audio("../assets/audio/click.mp3");
let alarm = new Audio("../assets/audio/alarm.mp3");


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
let countP = 0;
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
  let pomodoroBottomLongBreak = document.createElement("button")
  pomodoroTopContainer.id = "pomodoroTopContainer"
  pomodoroTopLeft.id = "pomodoroTopLeft"
  pomodoroTopRight.id = "pomodoroTopRight"
  pomodoroBottom.id = "pomodoroBottom" 
  pomodoroCenterLeft.id = "pomodoroCenterLeft"
  pomodoroCenterRight.id= "pomodoroCenterRight"
  pomodoroBottomShortBreak.id ="pomodoroBottomShortBreak"
  pomodoroBottomLongBreak.id = "pomodoroBottomLongBreak"
pomodoroCenterContainer.id = "pomodoroCenterContainer" 
pomodoroBottomContainer.id = "pomodoroBottomContainer"
  pomodoroTopLeft.innerText="Pomodoro"
  pomodoroTopRight.innerText="Break"
  pomodoroBottomShortBreak.innerHTML="BREAK"
  pomodoroBottomLongBreak.innerHTML="LONG BREAK"
  pomodoroBottom.innerText = "START"
  pomodoroCenterLeft.innerHTML="24 : "
  pomodoroCenterRight.innerHTML=" 59"
pomodoroCenterContainer.append(pomodoroCenterLeft,pomodoroCenterRight)
pomodoroBottomContainer.append(pomodoroBottom,pomodoroBottomShortBreak,pomodoroBottomLongBreak)
pomodoroTopContainer.append(pomodoroTopLeft,pomodoroTopRight)
pomodoroContainer.append(pomodoroTopContainer,pomodoroCenterContainer,pomodoroBottomContainer)
centerPomodoro.append(pomodoroContainer) 
pomodoroTopLeft.style.backgroundColor="#424242"
pomodoroBottomShortBreak.style.display="none"
pomodoroBottomLongBreak.style.display="none"
pomodoroBottomShortBreak.addEventListener("click", shortBreakTimer)
pomodoroBottom.addEventListener("click", pomodoroTimer)   
pomodoroBottomLongBreak.addEventListener("click",longBreakTimer) 
}
let minIntervalId;
let secIntervalId;
//Pomodoro timer activated
function pomodoroTimer(){
  click.play()
  minIntervalId = setInterval(pomoMinChange,60000)
  secIntervalId= setInterval(secChange,1000)
  //Stopt the pomodoro time after 25 mins and activate short break function
  setTimeout(function(){
    clearInterval(minIntervalId);
    clearInterval(secIntervalId)
    pomodoroTopLeft.style.background="none";
    pomodoroTopRight.style.backgroundColor="#424242"
    pomodoroCenterLeft.innerHTML= "04:"
    pomodoroCenterRight.innerHTML = "59"
    alarm.play() 
    pomodoroBottom.style.display="none"
    pomodoroBottomLongBreak.style.display="none"
    pomodoroBottomShortBreak.style.display="inline-block" 
    console.log(countP,'count');
    countP++
    if (countP %4 ==0){
      pomodoroBottom.style.display="none"
      pomodoroBottomShortBreak.style.display="none"
      pomodoroBottomLongBreak.style.display="inline-block"
      pomodoroCenterLeft.innerHTML="15:"
      pomodoroCenterRight.innerHTML="59"
    }
}, 1500000);
//This is ending the timer in one min: change it to 25 min for demo
   //To check if the pomodoroTimer has been executed 4 times
 

}
let pomoMin =24
//function to change minutes for pomodoro
function pomoMinChange(){
  
  let pomodoroCenterLeft = document.querySelector("#pomodoroCenterLeft")
  if(pomoMin>=0)
  {
    pomoMin--
    pomodoroCenterLeft.innerHTML= (pomoMin<10)?"0"+pomoMin+ " :" : pomoMin + " :" 
    
  }
}


let sec = 59
//Function to change the second
function secChange()
{ 
  let pomodoroCenterRight = document.querySelector("#pomodoroCenterRight")
  if(sec>0){
    sec--
  pomodoroCenterRight.innerHTML= (sec>=10)?" " +sec: " 0"+sec
  }
  else{
    sec = 59
  }
}

//Function to run for the short break
function shortBreakTimer(){
  click.play()
  minIntervalId = setInterval(shortMinChange,60000)
  secIntervalId= setInterval(secChange,1000)
  setTimeout(function(){
    clearInterval(minIntervalId);
    clearInterval(secIntervalId)
    pomodoroTopLeft.style.background="#424242";
    pomodoroTopRight.style.background="none"
    pomodoroCenterLeft.innerHTML= "24:"
    pomodoroCenterRight.innerHTML = "00"
    alarm.play() 
    pomodoroBottom.style.display="inline-block"
    pomodoroBottomShortBreak.style.display="none"
    pomodoroBottomLongBreak.style.display="none" 
}, 300000);

}
let shortMin = 4
//function to change minutes for pomodoro
function shortMinChange(){
  let pomodoroCenterLeft = document.querySelector("#pomodoroCenterLeft")
  if(shortMin>=0)
  {
    shortMin--
    pomodoroCenterLeft.innerHTML= "0" + shortMin+ " :"

  }
}

function longBreakTimer(){
  click.play()
 
  minIntervalId = setInterval(longMinChange,60000)
  secIntervalId= setInterval(secChange,1000)
  setTimeout(function(){
    clearInterval(minIntervalId);
    clearInterval(secIntervalId)
    pomodoroCenterLeft.innerHTML="24:"
    pomodoroCenterRight.innerHTML="59"
    pomodoroTopLeft.style.background="#424242";
    pomodoroTopRight.style.background="none"
    alarm.play() 
    pomodoroBottom.style.display="inline-block"
    pomodoroBottomShortBreak.style.display="none"
    pomodoroBottomLongBreak.style.display="none" 
}, 900000);
}
let longMin =14
function longMinChange(){
  if(longMin>=0)
  {
    longMin--
    pomodoroCenterLeft.innerHTML= (longMin<10)?"0" + longMin+ " :" : longMin + " :"

  }
}

