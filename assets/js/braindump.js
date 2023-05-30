let brainDumpContainer = document.querySelector(".brainDumpContainer")
let bulbId = document.getElementById("bulb")
let countB = 1
function bulb(){
    if(countB%2 != 0){
        bulbId.src="assets/images/bulbOn.svg"
        brainDumpContainer.style.display ="flex"
        countB++
        //event Listner on clicking add option go
    }
    else{
        bulbId.src="assets/images/bulbOff.svg"
        
        brainDumpContainer.style.display ="none"
        countB++
    }
}
// addingBrainDump()

