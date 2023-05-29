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
