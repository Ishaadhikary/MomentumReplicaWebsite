let brainDumpInput = document.getElementById("brainDumpInput");
let brainDumpContainer = document.querySelector(".brainDumpContainer");
let bulbId = document.getElementById("bulb");
let brainDumpIdeas = document.querySelector(".brainDumpIdeas");
let editIdeas = document.querySelectorAll(".brainDumpIdeas li")

let countB = 1;
function bulb() {
  if (countB % 2 != 0) {
    bulbId.src = "assets/images/bulbOn.svg";
    brainDumpContainer.style.display = "flex";
    countB++;
    addIdeas()
    //event Listner on clicking add option go
  } else {
    bulbId.src = "assets/images/bulbOff.svg";

    brainDumpContainer.style.display = "none";
    countB++;
  }
}
function addIdeas() {
  let newIdeas = brainDumpInput.value;
  if (localStorage.getItem("ideas") == null) {
    localStorage.setItem("ideas", "[]");

  }
  let oldIdeas = JSON.parse(localStorage.getItem("ideas"));
  oldIdeas.unshift(newIdeas);
  localStorage.setItem("ideas", JSON.stringify(oldIdeas));
  let storedIdeas = JSON.parse(localStorage.getItem("ideas"));
  brainDumpIdeas.innerHTML = "";
  storedIdeas.forEach((storedIdea) => {
    let eachIdeaContainer = document.createElement("div")
    eachIdeaContainer.id = "eachIdeaContainer"
    let editIcon = document.createElement("img")
    editIcon.src="assets/images/edit.svg"
    let deleteIcon = document.createElement("img")
    deleteIcon.src="assets/images/delete.svg"
    let li = document.createElement("li");
    li.innerHTML = storedIdea;
    if(li.innerHTML !=""){
      eachIdeaContainer.append(li,editIcon,deleteIcon)
      brainDumpIdeas.append(eachIdeaContainer);
    }
  
  });
}
//edit each of the Ideas

