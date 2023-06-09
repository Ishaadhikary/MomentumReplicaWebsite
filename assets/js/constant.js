//For Time Display
const amPmCheck = 12;
const oneDigitCheck = 10;
let timeView = "24hr"

//For Quotes
const quoteShowingId = document.querySelector(".bottom-center");
const quotesList =['"Give every day the chance to be the most beautiful day of your life."','"Nobody can go back and start a new beginning, but anyone can start today and make a new ending."','"The day will be what you make it, so rise, like the sun, and burn."','“Be pleasant until 10 o’clock in the morning, and the rest of the day will take care of itself.”','“In one minute you can change your attitude, and in that minute you can change your entire day.”','"Ruthlessly protect your time."','"The greatest productivity hack is the willingness to turn people down."','"If you did 4 hours of focused work every day you’d be ahead of 99% of people who multitask for 8 hours."']
const authorList = ['Mark Twain','Maria Robinson','William C. Hannan','Elbert Hubbard','Spencer Johnson','Anthony Pompliano','Mark Manson','Dan Go']

//Message
let centerMiddle = document.querySelector(".center-middle span");
let userName = document.getElementById("nameId");
let greeging = " ";

//MainTask Section : Center-bottom container
let mainTaskCheckId = document.getElementById("mainTaskCheckId");
let mainTaskTextId = document.getElementById("mainTaskTextId");
let mainTaskCheckBox = document.querySelector(".mainTaskCheckBox");
let inputTask = document.querySelector(".inputTask");
let mainTaskPopUp = document.querySelector(".mainTaskPopUp");
const MainTaskPopUpTxt = ["Great job!","Well done!","You did it!","Keep up the good work!","That’s amazing!","You’re a rockstar!","Keep it up!"]
var flagMain= 0;
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
let click = new Audio("./assets/audio/click.mp3");
let alarm = new Audio("./assets/audio/alarm.mp3");
let countP = 0;
//Pomodoro Pop-ups
const gifArray = ["./assets/images/short.gif","./assets/images/work.gif","./assets/images/long.gif"];
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

// For the settings 
let mainBox = document.getElementById("main-box");
let settingContainer = document.getElementById("settingContainer");
let headerLeft = document.querySelector(".header-left")
let headerCenter = document.querySelector(".header-center")
let centerTopContainer = document.querySelector(".center-top-container")
let topRight = document.querySelector(".header-right")

//For todoFull Task
let todoListContainer = document.querySelector(".todoListContainer")
let addTaskPopUp = document.getElementById("addTaskPopUp")
let initialAddTask = document.getElementById("initialAddTask")
let crossIcon = document.getElementById("crossIcon")
let addNewTaskbutton = document.getElementById("addNewTask")
let inputTaskName = document.getElementById("taskName")
let inputPriority= document.getElementById("priority")
let inputCategory= document.getElementById("category")
let countTodo=1
let priorityVal;
let todoTable= document.getElementById("todoTable")
let headerRow = document.querySelector("#todoTable tr")
let taskColumn = document.getElementById("taskColumn")
let tableBody = document.getElementById("tableBody")
let invalidPopUp = document.querySelector(".invalidPopUp")
let categoryVal;
let todoContain;
var flagTodo = 0

//FOr Balance
let focusQue = document.getElementById("focusQue")
let centerBottom = document.querySelector(".center-bottom")
let bottomRight = document.querySelector(".bottom-right")

//For brain Dump container
let brainDumpInput = document.getElementById("brainDumpInput");
let brainDumpContainer = document.querySelector(".brainDumpContainer");
let bulbId = document.getElementById("bulb");
let brainDumpIdeas = document.querySelector(".brainDumpIdeas");
let editIdeasButton = document.getElementById("editIdeas");
let addIdeasButton = document.querySelector(".addIdeas");
let countB = 1;