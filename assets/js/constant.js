//For Time Display
const amPmCheck = 12;
const oneDigitCheck = 10;
let timeView = "24hr"

//For Quotes
const quotesList =['"Give every day the chance to be the most beautiful day of your life."','"Nobody can go back and start a new beginning, but anyone can start today and make a new ending."','"The day will be what you make it, so rise, like the sun, and burn."','“Be pleasant until 10 o’clock in the morning, and the rest of the day will take care of itself.”','“In one minute you can change your attitude, and in that minute you can change your entire day.”','"Ruthlessly protect your time."','"The greatest productivity hack is the willingness to turn people down."','"If you did 4 hours of focused work every day you’d be ahead of 99% of people who multitask for 8 hours."']
const authorList = ['Mark Twain','Maria Robinson','William C. Hannan','Elbert Hubbard','Spencer Johnson','Anthony Pompliano','Mark Manson','Dan Go']

//Message
let centerMiddle = document.querySelector(".center-middle span");
let userName = document.getElementById("nameId");
let greeging = " ";

//MainTask completion message
const MainTaskPopUpTxt = ["Great job!","Well done!","You did it!","Keep up the good work!","That’s amazing!","You’re a rockstar!","Keep it up!"]

//For Center-Container
let  percentageImg = document.getElementById("percentageImg")
let clockImg = document.getElementById("clockImg")
let pomodoroImg = document.getElementById("pomodoroImg")
let changeOptionsContainer = document.querySelector(".changeOptionsContainer");
let centerCenter = document.querySelector(".center-center");
let centerTime = document.querySelector(".center-time");
let centerPercentage = document.querySelector(".center-percentage");
let centerPomodoro = document.querySelector(".center-pomodoro");
//Pomodoro audio
let click = new Audio("../assets/audio/click.mp3");
let alarm = new Audio("../assets/audio/alarm.mp3");
let countP = 0;
//Pomodoro Pop-ups
const gifArray = ["../assets/images/short.gif","../assets/images/work.gif","../assets/images/long.gif"];
const textArrayH1 = [
  "Short Break",
  "Work-Time",
  "Long Break"
];
const textArrayH2 = [
  "Go grab a refreshing drink",
  "Time to get back to work",
  "Play the song you love and dance to it "
];