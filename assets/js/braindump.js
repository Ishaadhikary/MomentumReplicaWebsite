let bulbId = document.getElementById("bulb")
let countB = 1
function bulb(){
    if(countB%2 != 0){
        bulbId.src="assets/images/bulbOn.svg"
        countB++
    }
    else{
        bulbId.src="assets/images/bulbOff.svg"
        countB++
    }
}