//For Time Display
function getTime() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMin = currentTime.getMinutes();
  let period = currentHour > amPmCheck ? "PM" : "AM";
  currentHour = currentHour < oneDigitCheck ? "0" + currentHour : currentHour;
  currentMin = currentMin < oneDigitCheck ? "0" + currentMin : currentMin;

  return [currentHour, currentMin, period];
}

//generate random Numbers
function randomNumbers(arrayName) {
  let randomIndex = Math.floor(Math.random() * arrayName.length);
  return randomIndex;
}

//to display time in percentage
function dayPercentageTextDisplay() {
  const [currentHour, currentMin] = getTime();
  let dayPercentageTextDisplay = (
    ((parseFloat(currentHour) + currentMin / 60) / 24) *
    100
  ).toFixed(2);
  let minConversion = currentMin / 60;
  let currentTime = parseFloat(currentHour) + minConversion;
  let perDay = currentTime / 24;
  let perc = perDay * 100;
  console.log("min corv", minConversion);
  console.log("time", currentTime);
  console.log("perDay", perDay);
  console.log("perc", perc);

  console.log("M", currentMin);
  console.log(dayPercentageTextDisplay);
  return dayPercentageTextDisplay;
}

//Initializing for pomodoro timer
// Initializing the container for pomodoro timer
let pomodoroContainer = document.createElement("div");
pomodoroContainer.id = "pomodoroContainer";
let pomodoroTopContainer = document.createElement("div");
let pomodoroPopUpContainer = document.createElement("div");
let popUpImg = document.createElement("img");
let popUpTextH1 = document.createElement("h1");
let popUpTextH2 = document.createElement("h2");
let pomodoroCenterContainer = document.createElement("div");
let pomodoroCenterLeft = document.createElement("span");
let pomodoroCenterRight = document.createElement("span");
let pomodoroBottomContainer = document.createElement("div");
let pomodoroTopLeft = document.createElement("button");
let pomodoroTopRight = document.createElement("button");
let pomodoroBottom = document.createElement("button");
let pomodoroBottomShortBreak = document.createElement("button");
let pomodoroBottomLongBreak = document.createElement("button");
pomodoroTopContainer.id = "pomodoroTopContainer";
pomodoroTopLeft.id = "pomodoroTopLeft";
pomodoroTopRight.id = "pomodoroTopRight";
pomodoroPopUpContainer.id = "pomodoroPopUpContainer";
popUpImg.id = "popUpImg";
popUpTextH1.id = "popUpTextH1";
popUpTextH2.id = "popUpTextH2";
pomodoroBottom.id = "pomodoroBottom";
pomodoroCenterLeft.id = "pomodoroCenterLeft";
pomodoroCenterRight.id = "pomodoroCenterRight";
pomodoroBottomShortBreak.id = "pomodoroBottomShortBreak";
pomodoroBottomLongBreak.id = "pomodoroBottomLongBreak";
pomodoroCenterContainer.id = "pomodoroCenterContainer";
pomodoroBottomContainer.id = "pomodoroBottomContainer";
pomodoroCenterContainer.append(pomodoroCenterLeft, pomodoroCenterRight);
pomodoroBottomContainer.append(
  pomodoroBottom,
  pomodoroBottomShortBreak,
  pomodoroBottomLongBreak
);
pomodoroPopUpContainer.append(popUpImg,popUpTextH1,popUpTextH2)
pomodoroTopContainer.append(
  pomodoroTopLeft,
  pomodoroTopRight,
  pomodoroPopUpContainer
);
pomodoroContainer.append(
  pomodoroTopContainer,
  pomodoroCenterContainer,
  pomodoroBottomContainer
);
centerPomodoro.append(pomodoroContainer);
