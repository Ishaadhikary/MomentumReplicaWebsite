let brainDumpContainer = document.querySelector(".brainDumpContainer");
let bulbId = document.getElementById("bulb");
let brainDumpIdeas = document.querySelector(".brainDumpIdeas");
let ideas = [];

let countB = 1;
function bulb() {
  if (countB % 2 != 0) {
    bulbId.src = "assets/images/bulbOn.svg";
    brainDumpContainer.style.display = "flex";
    countB++;
    //event Listner on clicking add option go
  } else {
    bulbId.src = "assets/images/bulbOff.svg";

    brainDumpContainer.style.display = "none";
    countB++;
  }
}
let brainDumpInput = document.getElementById("brainDumpInput");
function addIdeas() {
  ideas.push(brainDumpInput.value);
  localStorage.setItem("ideas", JSON.stringify(ideas));
  let storedIdeas = JSON.parse(localStorage.getItem("ideas"));
  brainDumpIdeas.innerHTML=""
 storedIdeas.forEach(storedIdea => {

    let li = document.createElement("li")
    li.innerHTML = storedIdea
    brainDumpIdeas.append(li)
    
 });
}
