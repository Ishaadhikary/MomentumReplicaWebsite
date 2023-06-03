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
  secIntervalId = setInterval(secChange, 1000);
  minIntervalId = setInterval(pomoMinChange, 60000);
  //Stop the pomodoro time after 25 mins 
  setTimeout(function () {
    clearInterval(minIntervalId);
    clearInterval(secIntervalId);
    pomodoroTopLeft.style.background = "none";
    pomodoroTopRight.style.backgroundColor = "#424242";
    pomodoroPopUpContainer.style.display = "flex";
    pomodoroPopUpDisplay(0);
    setTimeout(function () {
      pomodoroPopUpContainer.style.display = "none";
      pomodoroBottomShortBreak.style.display = "flex";
    }, 1000);
    pomodoroCenterLeft.innerHTML = "04:";
    pomodoroCenterRight.innerHTML = "59";
    alarm.play();
    pomodoroBottom.style.display = "none";
    pomodoroBottomLongBreak.style.display = "none";
    console.log(countP, "count");
    countP++;//To check if the pomodoroTimer has been executed 4 times
    if (countP % 4 == 0) {
      pomodoroBottom.style.display = "none";
      pomodoroBottomShortBreak.style.display = "none";
      pomodoroBottomLongBreak.style.display = "inline-block";
      pomodoroCenterLeft.innerHTML = "15:";
      pomodoroCenterRight.innerHTML = "59";
    }
  }, 1500000);
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

let sec = 60;
//Function to change the second
function secChange() {
  let pomodoroCenterRight = document.querySelector("#pomodoroCenterRight");
  if (sec > 0) {
    sec--;
    pomodoroCenterRight.innerHTML = sec >= 10 ? " " + sec : " 0" + sec;
  } else {
    sec = 60;
  }
}

//Function to run when short break is activated
function shortBreakTimer() {
  let popUpIndex = 2;
  click.play();
  minIntervalId = setInterval(shortMinChange, 60000);
  secIntervalId = setInterval(secChange, 1000);
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
    }, 1000);
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
//Function to run when long break is activated
function longBreakTimer() {
  click.play();

  minIntervalId = setInterval(longMinChange, 60000);
  secIntervalId = setInterval(secChange, 1000);
  setTimeout(function () {
    clearInterval(minIntervalId);
    clearInterval(secIntervalId);
    pomodoroCenterLeft.innerHTML = "24:";
    pomodoroCenterRight.innerHTML = "59";
    pomodoroTopLeft.style.background = "#424242";  
    pomodoroPopUpContainer.style.display = "flex";
    pomodoroPopUpDisplay(2);
    setTimeout(function () {
      pomodoroPopUpContainer.style.display = "none";
      pomodoroBottom.style.display = "flex";
    }, 1000);
    pomodoroTopRight.style.background = "none";
    alarm.play();
    pomodoroBottom.style.display = "inline-block";
    pomodoroBottomShortBreak.style.display = "none";
    pomodoroBottomLongBreak.style.display = "none";
  }, 3000);
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
//Pop Ups after each interval(pomodoro-shortBreak-longBreak) is completed
function pomodoroPopUpDisplay(popUpIndex) {
  popUpImg.src=gifArray[popUpIndex]
  popUpTextH1.innerHTML=textArrayH1[popUpIndex]
  popUpTextH2.innerHTML=textArrayH2[popUpIndex]
  console.log(textArrayH1[popUpIndex],textArrayH2[popUpIndex])
}
