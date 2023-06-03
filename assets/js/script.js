let changeOptionsContainer = document.querySelector(".changeOptionsContainer");
let centerCenter = document.querySelector(".center-center");
let centerTime = document.querySelector(".center-time");
let centerPercentage = document.querySelector(".center-percentage");
let centerPomodoro = document.querySelector(".center-pomodoro")

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
  let pomodoroBottomContainer = document.createElement("div")
  let pomodoroTopLeft = document.createElement("button")
  let pomodoroTopRight = document.createElement("button")
  let pomodoroBottom = document.createElement("button")
  pomodoroTopContainer.id = "pomodoroTopContainer"
  pomodoroTopLeft.id = "pomodoroTopLeft"
  pomodoroTopRight.id = "pomodoroTopRight"
  pomodoroBottom.id = "pomodoroBottom" 
  pomodoroTopLeft.innerText="Pomodoro"
  pomodoroTopRight.innerText="Break"
  pomodoroBottom.innerText = "START"
  pomodoroCenterContainer.innerText="Timer Here"
pomodoroCenterContainer.id = "pomodoroCenterContainer" 
pomodoroBottomContainer.id = "pomodoroBottomContainer"
pomodoroBottomContainer.append(pomodoroBottom)
pomodoroTopContainer.append(pomodoroTopLeft,pomodoroTopRight)
pomodoroContainer.append(pomodoroTopContainer,pomodoroCenterContainer,pomodoroBottomContainer)
centerPomodoro.append(pomodoroContainer)
  
}
