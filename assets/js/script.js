class Displaytime{
  constructor(){
  }

updatetime() {
  const timeView = prompt("12hr or 24hr")
  switch (timeView) {

    case "24hr": {
      const timeDisplay = document.createTextNode( currentHour + ":" + currentMin);
      let centerCenter = document.querySelector(".center-center");
      centerCenter.appendChild(timeDisplay);
    }
    break;
    case "12hr":
      {
        currentHour = currentHour > amPmCheck ?  currentHour - 12 :  currentHour;
        const timeDisplay = document.createTextNode(
        currentHour + ":" +  currentMin + " " + period
        );
        let centerCenter = document.querySelector(".center-center");
        console.log(timeDisplay)
        centerCenter.append(timeDisplay);
      }
      break;
  }
}
}

const time = new Displaytime()
time.updatetime()
// For toggle bar
function toggleBox() {
  const popUpElement = document.getElementById("popId");
  console.log(popUpElement);
  popUpElement.classList.toggle("show");
}
