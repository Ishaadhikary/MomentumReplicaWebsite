class Displaytime{
  constructor(){
  }

updatetime() {
  switch (timeView) {

    case "24hr": {
      const timeDisplay =documet.
      timeDisplay = document.createTextNode( currentHour + ":" + currentMin);
      let centerCenter = document.querySelector(".center-center");
      centerCenter.appendChild(timeDisplay);
      console.log(timeDisplay)
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
        console.log(timeDisplay)
      }
      break;
  }
}
}

const time = new Displaytime()
time.updatetime()
// For toggle bar
function popBox(popElementId,parentElementId) {
  const parentElement = document.getElementById(parentElementId)
  const popUpElement = document.getElementById(popElementId);
  // console.log('child:'+ popUpElement);
  popUpElement.classList.toggle("show");
  popUpElement.addEventListener("click",function(){
    timeView ="12hr"
    console.log(timeView)
    time.updatetime()
  })
  // else console.log("hello")
}
  
  
