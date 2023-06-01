//For Time Display
function getTime(){
let currentTime = new Date()
let currentHour = currentTime.getHours()
let currentMin = currentTime.getMinutes()
let period = currentHour > amPmCheck ? "PM" : "AM";
currentHour = currentHour < oneDigitCheck ? "0" + currentHour : currentHour;
currentMin = currentMin < oneDigitCheck ? "0" + currentMin : currentMin;

return [currentHour,currentMin,period]
}

//generate random Numbers
function randomNumbers(arrayName)
{
    let randomIndex = Math.floor(Math.random()*arrayName.length)
    return randomIndex
        
}

//to display time in percentage
function dayPercentageTextDisplay(){
    const[currentHour,currentMin]=getTime()
    let dayPercentageTextDisplay =(((currentHour+(currentMin/60))/24)*100).toFixed(2)
    return dayPercentageTextDisplay
}
