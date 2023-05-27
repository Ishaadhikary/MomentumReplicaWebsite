class Displaytime {
  constructor() {}

  updatetime() {
    let centerCenter = document.querySelector(".center-center");
    centerCenter.innerHTML = "";
    switch (timeView) {
      case "24hr":
        {
          let timeDisplay = document.createTextNode(
            currentHour + ":" + currentMin
          );
          centerCenter.appendChild(timeDisplay);
        }
        break;
      case "12hr":
        {
          let currentHour12 =
            currentHour > amPmCheck ? currentHour - 12 : currentHour;
          const timeDisplay = document.createTextNode(
            currentHour12 + ":" + currentMin + " " + period
          );
          centerCenter.append(timeDisplay);
        }
        break;
    }
  }
}

const time = new Displaytime();
time.updatetime();
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
        time.updatetime();
        popUpElement.innerHTML = "";
        popUpElement.textContent = "24hr Clock";
      } else {
        //To change the time to 24 hr display
        timeView = "24hr";
        time.updatetime();
        popUpElement.innerHTML = "";
        popUpElement.textContent = "12hr Clock";
      }
    });}
}
