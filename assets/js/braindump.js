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
  let oldIdeas = JSON.parse(localStorage.getItem("ideas"));//Get all the previously stored ideas
  if (newIdeas != "") {
    oldIdeas.push(newIdeas);//Store the ideas in desending order
  }
  localStorage.setItem("ideas", JSON.stringify(oldIdeas));
  let storedIdeas = JSON.parse(localStorage.getItem("ideas"));
  brainDumpIdeas.innerHTML = "";//Clear the container
  storedIdeas.forEach((storedIdea, index) => {
    //To store all the ideas present in the local storage
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

    index++;
    console.log(index)
    editIcon.onclick = () => editIdeas(index);
    deleteIcon.onclick=() =>deleteIdeas(index);//Function to delete the idea 
  });
}

//Edit each of the Ideas: 
function editIdeas(index) {
  console.log(index)
  editIdeasButton.style.display = "inline-block";
  let oldIdeas = JSON.parse(localStorage.getItem("ideas"));
  let editValue = oldIdeas.slice(index - 1, index);//Get the idea to edit
  oldIdeas.splice(index-1,1)
  brainDumpInput.value = editValue;// Append the idea to edit in the input container
  addIdeasButton.style.display = "none";
  editIdeasButton.addEventListener("click", function () {//When edit button is clicked
    editTheBrainIdea(index)
    editIdeasButton.style.display="none"
    addIdeasButton.style.display="inline-block"
    
  });
}

function editTheBrainIdea(editIndex){
  //Getting the element from the input
  let editValue = brainDumpInput.value
  // console.log(editValue,editIndex)
  let storedIdeas = JSON.parse(localStorage.getItem("ideas"));
  storedIdeas.forEach((storedIdea,index)=>{
    if(editIndex==(index+1)){
      console.log(editValue,storedIdea)
      storedIdeas[index]=editValue 
    }
  })
  localStorage.setItem("ideas",JSON.stringify(storedIdeas))
  brainDumpInput.value=null
  getTheBrainIdeas()
  }
  
  //Storing the elelment in the edit index 

//Function to delete the selected item
function deleteIdeas(editIndex){
  let oldIdeas = JSON.parse(localStorage.getItem("ideas"))
  oldIdeas.splice(editIndex-1,1)
  localStorage.setItem("ideas",JSON.stringify(oldIdeas))
  brainDumpInput.value=null//So that the previous items on input box is not added to the list
  getTheBrainIdeas()
}
