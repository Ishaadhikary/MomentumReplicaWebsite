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
          currentHour =
            currentHour > amPmCheck ? currentHour - 12 : currentHour;
          const timeDisplay = document.createTextNode(
            currentHour + ":" + currentMin + " " + period
          );
          centerCenter.append(timeDisplay);
        }
        break;
    }
  }
}

const time = new Displaytime();
time.updatetime();
// For toggle bar
function popBox(popElementId, parentElementId) {
  const parentElement = document.getElementById(parentElementId);
  const popUpElement = document.getElementById(popElementId);
  // console.log('child:'+ popUpElement);
  popUpElement.classList.toggle("show");
  popUpElement.addEventListener("click", function () {
    if(timeView==='24hr'){
    timeView = "12hr";
    console.log(timeView);
    time.updatetime();}
    else{
      timeView = "24hr";
    console.log(timeView);
    time.updatetime();
    }
  });
  // else console.log("hello")
}
