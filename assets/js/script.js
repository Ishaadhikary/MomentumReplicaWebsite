function time() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMin = currentTime.getMinutes();
  
 
  let timeView = prompt("Do you want 12 hr or 24 hr");
  switch (timeView) {
    case "12hr":
      {
        let period = currentHour > 12 ? "PM" : "AM";
        currentHour = currentHour > 12 ? currentHour - 12 : currentHour;
        currentHour = currentHour == 12 ? 00 : currentHour;
        currentHour = currentHour<10?"0"+currentHour:currentMin;
        currentMin = currentMin<10?"0"+currentMin:currentMin;
        const timeDisplay = document.createTextNode(currentHour + ":" + currentMin + " " + period);
        let centerCenter = document.querySelector('.center-center');
        centerCenter.appendChild(timeDisplay);
      }
      break;
    case "24hr": {
        currentHour = currentHour == 12 ? 00 : currentHour;
        currentHour = currentHour<10?"0"+currentHour:currentMin;
        currentMin = currentMin<10?"0"+currentMin:currentMin;
        let timeDisplay = document.createTextNode(currentHour + ":" + currentMin);
        let centerCenter = document.querySelector('.center-center');
        centerCenter.appendChild(timeDisplay);
    }
  }
}

time();
toggleBox();
function toggleBox(){
const popUpElement = document.querySelector('.popup-text')
console.log(popUpElement)
popUpElement.classList.toggle('show');

}

