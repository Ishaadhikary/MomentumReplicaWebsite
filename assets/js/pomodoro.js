//Initial Display when pomodoro is clicked
function pomodoroDisplay() {
  centerPomodoro.style.display = "block";
  createPomodoro();
  pomodoroImg.style.display = "none";
  percentageImg.style.display = "block";
  clockImg.style.display = "block";
}

function createPomodoro() {
  centerPercentage.style.display = "none";
  centerTime.style.display = "none";
  pomodoroTopLeft.innerText = "Pomodoro";
  pomodoroTopRight.innerText = "Break";
  pomodoroBottomShortBreak.innerHTML = "BREAK";
  pomodoroBottomLongBreak.innerHTML = "LONG BREAK";
  pomodoroBottom.innerText = "START";
  pomodoroCenterLeft.innerHTML = "24 : ";
  pomodoroCenterRight.innerHTML = " 59";
  pomodoroTopLeft.style.backgroundColor = "#424242";
  pomodoroBottomShortBreak.style.display = "none";
  pomodoroBottomLongBreak.style.display = "none";
  pomodoroPopUpContainer.style.display = "none";
  pomodoroBottomShortBreak.addEventListener("click", shortBreakTimer);
  pomodoroBottom.addEventListener("click", pomodoroTimer);
  pomodoroBottomLongBreak.addEventListener("click", longBreakTimer);
}
let minIntervalId;
let secIntervalId;

//Pomodoro timer activated
function pomodoroTimer() {
  click.play();
  pomodoroCenterLeft.innerHTML = "24:";
  pomodoroCenterRight.innerHTML = "59";
  secIntervalId = setInterval(pomoSecChange, 1000);
  minIntervalId = setInterval(pomoMinChange, 60000);
  //Stop the pomodoro time after 25 mins 
  setTimeout(function () {
    clearInterval(minIntervalId);
    clearInterval(secIntervalId);
    alarm.play();
    countP++;
    pomodoroTopLeft.style.background = "none";
    pomodoroTopRight.style.backgroundColor = "#424242";
    pomodoroPopUpContainer.style.display = "flex";
    if(countP%4 !=0){
    pomodoroPopUpDisplay(0);
    setTimeout(function () {
      pomodoroPopUpContainer.style.display = "none";
      pomodoroBottomShortBreak.style.display = "flex";
    }, 7000);
    pomodoroCenterLeft.innerHTML = "04:";
    pomodoroCenterRight.innerHTML = "59";
    pomodoroBottom.style.display = "none";
    pomodoroBottomLongBreak.style.display = "none";}
    
    //To check if the pomodoroTimer has been executed 4 times
    if (countP % 4 == 0) {
      pomodoroPopUpDisplay(2);
      setTimeout(function () {
        pomodoroPopUpContainer.style.display = "none";
        pomodoroBottomLongBreak.style.display = "flex";
      }, 7000);
      pomodoroBottom.style.display = "none";
      pomodoroBottomShortBreak.style.display = "none";
      pomodoroCenterLeft.innerHTML = "15:";
      pomodoroCenterRight.innerHTML = "59";
    }
   
    console.log(countP, "count");
   
  }, 5000);
  //This is ending the timer in one min: change it to 25 min for demo 1500000
  
}
let pomoMin = 24;
//function to change minutes for pomodoro
function pomoMinChange() {
  let pomodoroCenterLeft = document.querySelector("#pomodoroCenterLeft");
  if (pomoMin >= 0) {
    pomoMin--;
    pomodoroCenterLeft.innerHTML =
      pomoMin < 10 ? "0" + pomoMin + " :" : pomoMin + " :";
  }
}

let pomoSec = 60;
//Function to change the second for pomo
function pomoSecChange() {
  pomodoroBottom.style.display="none"

  let pomodoroCenterRight = document.querySelector("#pomodoroCenterRight");
  if (pomoSec > 0) {
    pomoSec--;
    pomodoroCenterRight.innerHTML = pomoSec >= 10 ? " " + pomoSec : " 0" + pomoSec;
  } else {
    pomoSec = 60;
  }
}

//Function to run when short break is activated
function shortBreakTimer() {
  click.play();
  minIntervalId = setInterval(shortMinChange, 60000);
  secIntervalId = setInterval(shortSecChange, 1000);
  setTimeout(function () {
    clearInterval(minIntervalId);
    clearInterval(secIntervalId);
    pomodoroTopLeft.style.background = "#424242";
    pomodoroTopRight.style.background = "none"; 
    pomodoroPopUpContainer.style.display = "flex";
    pomodoroPopUpDisplay(1);
    setTimeout(function () {
      pomodoroPopUpContainer.style.display = "none";
      pomodoroBottom.style.display = "flex";
    }, 5000);
    pomodoroCenterLeft.innerHTML = "24:";
    pomodoroCenterRight.innerHTML = "00";
    alarm.play();
    pomodoroBottom.style.display = "inline-block";
    pomodoroBottomShortBreak.style.display = "none";
    pomodoroBottomLongBreak.style.display = "none";
  }, 3000);
  // 300000
}
let shortMin = 4;
//function to change minutes for short Break
function shortMinChange() {
  let pomodoroCenterLeft = document.querySelector("#pomodoroCenterLeft");
  if (shortMin >= 0) {
    shortMin--;
    pomodoroCenterLeft.innerHTML = "0" + shortMin + " :";
  }
}

let shortSec = 60;
//Function to change the second for pomo
function shortSecChange() {
  pomodoroBottomShortBreak.style.display="none"

  let pomodoroCenterRight = document.querySelector("#pomodoroCenterRight");
  if (shortSec > 0) {
    shortSec--;
    pomodoroCenterRight.innerHTML = shortSec >= 10 ? " " + shortSec : " 0" + shortSec;
  } else {
    shortSec = 60;
  }
}
//Function to run when long break is activated
function longBreakTimer() {
  
  pomodoroBottomLongBreak.style.display="none"
  click.play();
  minIntervalId = setInterval(longMinChange, 60000);
  secIntervalId = setInterval(longSecChange, 1000);
  setTimeout(function () {
    clearInterval(minIntervalId);
    clearInterval(secIntervalId);
    pomodoroCenterLeft.innerHTML = "24:";
    pomodoroCenterRight.innerHTML = "59";
    pomodoroTopLeft.style.background = "#424242";  
    pomodoroPopUpContainer.style.display = "flex";
    pomodoroPopUpDisplay(1);
    setTimeout(function () {
      pomodoroPopUpContainer.style.display = "none";
      pomodoroBottom.style.display = "flex";
    }, 5000);
    pomodoroTopRight.style.background = "none";
    alarm.play();
    pomodoroBottom.style.display = "inline-block";
    pomodoroBottomShortBreak.style.display = "none";
    pomodoroBottomLongBreak.style.display = "none";
  }, 5000);
  //900000
}
let longMin = 14;
function longMinChange() {
  if (longMin >= 0) {
    longMin--;
    pomodoroCenterLeft.innerHTML =
      longMin < 10 ? "0" + longMin + " :" : longMin + " :";
  }
}
let longSec = 60;
//Function to change the second for pomo
function longSecChange() {
  pomodoroBottom.style.display="none"

  let pomodoroCenterRight = document.querySelector("#pomodoroCenterRight");
  if (longSec > 0) {
    longSec--;
    pomodoroCenterRight.innerHTML = longSec >= 10 ? " " + longSec : " 0" + longSec;
  } else {
    longSec = 60;
  }
}
//Pop Ups after each interval(pomodoro-shortBreak-longBreak) is completed
function pomodoroPopUpDisplay(popUpIndex) {
  popUpImg.src=gifArray[popUpIndex]
  popUpTextH1.innerHTML=textArrayH1[popUpIndex]
  popUpTextH2.innerHTML=textArrayH2[popUpIndex]
  console.log(textArrayH1[popUpIndex],textArrayH2[popUpIndex])
}
