let brainDumpInput = document.getElementById("brainDumpInput");
let brainDumpContainer = document.querySelector(".brainDumpContainer");
let bulbId = document.getElementById("bulb");
let brainDumpIdeas = document.querySelector(".brainDumpIdeas");
let editIdeasButton = document.getElementById("editIdeas");
let addIdeasButton = document.querySelector(".addIdeas");

let countB = 1;
function bulb() {
  if (countB % 2 != 0) {
    bulbId.src = "assets/images/bulbOn.svg";
    brainDumpInput.style.border="none"
    brainDumpContainer.style.display = "flex";
    countB++;
    editIdeasButton.style.display = "none";
    //Event Listner on clicking add option go
    addIdeas();
  } else {
    bulbId.src = "assets/images/bulbOff.svg";

    brainDumpContainer.style.display = "none";
    countB++;
  }
}
function addIdeas() {
  brainDumpInput.style.border="none"
  getTheBrainIdeas()//To add new idea to the container
}
function getTheBrainIdeas(){
  let newIdeas = brainDumpInput.value;//To get the input from the user
  if (localStorage.getItem("ideas") == null) {//To check if ideas are stored or not
    localStorage.setItem("ideas", "[]");//Initialize an array for ideas if not avaliable 
  }
  var oldIdeas = JSON.parse(localStorage.getItem("ideas"));//Get all the previously stored ideas
  if (newIdeas != "") {
    oldIdeas.unshift(newIdeas);//Store the ideas in desending order
  }
  localStorage.setItem("ideas", JSON.stringify(oldIdeas));
  let storedIdeas = JSON.parse(localStorage.getItem("ideas"));
  brainDumpIdeas.innerHTML = "";//Clear the container
  storedIdeas.forEach((storedIdea, editIndex) => {//To store all the ideas present in the local storage
    let eachIdeaContainer = document.createElement("div");
    eachIdeaContainer.id = "eachIdeaContainer";
    let editIcon = document.createElement("img");
    editIcon.src = "assets/images/edit.svg";
    editIcon.id = "editIcon";
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "assets/images/delete.svg";
    deleteIcon.id = "deleteIcon";
    let li = document.createElement("li");
    li.innerHTML = storedIdea;

    eachIdeaContainer.append(li, editIcon, deleteIcon);
    brainDumpIdeas.append(eachIdeaContainer);

    editIndex++;
    
    editIcon.onclick = () => editIdeas(editIndex);//Function to edit the idea
    deleteIcon.onclick=() =>deleteIdeas(editIndex);//Function to delete the idea 
     });
}

//Edit each of the Ideas: 
function editIdeas(editIndex) {
  editIdeasButton.style.display = "inline-block";
  let oldIdeas = JSON.parse(localStorage.getItem("ideas"));
  let editValue = oldIdeas.slice(editIndex - 1, editIndex);//Get the idea to edit
  brainDumpInput.value = editValue;// Append the idea to edit in the input container
  addIdeasButton.style.display = "none";
  editIdeasButton.addEventListener("click", function () {//When edit button is clicked
    oldIdeas.splice(editIndex-1,1)//Removing only the editing idea from the array
    localStorage.setItem("ideas",JSON.stringify(oldIdeas))//Storing all the ideas except the editing idea in localstorage
    editIdeasButton.style.display="none"
    addIdeasButton.style.display="inline-block"
    getTheBrainIdeas()//To add the edited idea into the idea container

  });
}
//Function to delete the selected item
function deleteIdeas(editIndex){
  let oldIdeas = JSON.parse(localStorage.getItem("ideas"))
  oldIdeas.splice(editIndex-1,1)
  localStorage.setItem("ideas",JSON.stringify(oldIdeas))
  brainDumpInput.value=null//So that the previous items on input box is not added to the list
  getTheBrainIdeas()
}
