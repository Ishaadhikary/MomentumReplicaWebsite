let brainDumpInput = document.getElementById("brainDumpInput");
let brainDumpContainer = document.querySelector(".brainDumpContainer");
let bulbId = document.getElementById("bulb");
let brainDumpIdeas = document.querySelector(".brainDumpIdeas");
let editIdeasButton = document.querySelector(".editIdeas");
let addIdeasButton = document.querySelector(".addIdeas")

let countB = 1;
function bulb() {
  if (countB % 2 != 0) {
    bulbId.src = "assets/images/bulbOn.svg";
    brainDumpContainer.style.display = "flex";
    countB++;
    editIdeasButton.style.display= "none"
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
    console.log("check")
  }
  var oldIdeas = JSON.parse(localStorage.getItem("ideas"));
  if(newIdeas != ""){
  oldIdeas.unshift(newIdeas);
 }
 localStorage.setItem("ideas", JSON.stringify(oldIdeas));
 let storedIdeas = JSON.parse(localStorage.getItem("ideas"));
  brainDumpIdeas.innerHTML = "";
  storedIdeas.forEach((storedIdea,editIndex) => {
    let eachIdeaContainer = document.createElement("div")
    eachIdeaContainer.id = "eachIdeaContainer"
    let editIcon = document.createElement("img")
    editIcon.src="assets/images/edit.svg"
    editIcon.id ="editIcon"
    let deleteIcon = document.createElement("img")
    deleteIcon.src="assets/images/delete.svg"
    deleteIcon.id = "deleteIcon"
    let li = document.createElement("li");
    li.innerHTML = storedIdea;
    if(li.innerHTML !=""){
      eachIdeaContainer.append(li,editIcon,deleteIcon)
      brainDumpIdeas.append(eachIdeaContainer);
    }
    if(li.innerHTML=="" && localStorage.getItem("ideas") == null){
      localStorage.removeItem("ideas", "")
    }
    editIndex++
    editIcon.onclick = () => editIdeas(editIndex);
  });
}
  
  // console.log(index)


//edit each of the Ideas
function editIdeas(editIndex){
  editIdeasButton.style.display= "inline-block"
  console.log(editIndex)
  let oldIdea = JSON.parse(localStorage.getItem("ideas"));
  let editValue = oldIdea.slice(editIndex-1,editIndex);
  brainDumpInput.value=editValue
  console.log(addIdeasButton)
  addIdeasButton.style.display="none"
  editIdeasButton.addEventListener("click",function(){console.log("Editing old Ideas")
  let oldIdeas = JSON.parse(localStorage.getItem("ideas"));
  console.log(oldIdeas)
  let oldIdea1= oldIdeas.splice(editIndex,oldIdeas.length)
  let oldIdea2 =oldIdeas.splice(0,editIndex-1 )
  let c=oldIdea1.concat(oldIdea2)
  console.log(c)
})
}
// function editOldIdeas(){
//   console.log("Editing old Ideas")
//   let oldIdeas = JSON.parse(localStorage.getItem("ideas"));
//   oldIdeas.splice(editIndex)
  
  
// }
// console.log("Old Ideas"+oldIdeas[index]) 
// brainDumpInput.value=oldIdeas[index]
// console.log(brainDumpInput.value)

