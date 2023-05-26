//For Time Display
let currentTime = new Date()
let currentHour = currentTime.getHours()
let currentMin = currentTime.getMinutes()
let period = currentHour > amPmCheck ? "PM" : "AM";
currentHour = currentHour == amPmCheck ? 00 : currentHour;
currentHour = currentHour < oneDigitCheck ? "0" + currentHour : currentHour;
currentMin = currentMin < oneDigitCheck ? "0" + currentMin : currentMin;
