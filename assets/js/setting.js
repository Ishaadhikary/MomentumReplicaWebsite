let countS = 1;
function setting() {
  if (countS % 2 != 0) {
    settingContainer.style.display = "flex";
    generalSetting()

    countS++;
  } else {
    settingContainer.style.display = "none";
    countS++;
  }
}

//Initializing for the setting
let settingOptions = document.createElement("div");
let settingOptionInformation = document.createElement("div");
let settingGeneralContainer = document.createElement("div");
settingGeneralContainer.id="settingGeneralContainer"
let settingBackgroundChangeContainer = document.createElement("div");
settingBackgroundChangeContainer.id="settingBackgroundChangeContainer"
let settingBalanceContainer = document.createElement("div");
settingBalanceContainer.id = "settingBalanceContainer"
let settingAboutContainer = document.createElement("div");
settingAboutContainer.id = "settingAboutContainer"
//For setting options
let settingOptionsListContainer = document.createElement("ul");
let settingOptionsGeneralList = document.createElement("li");
let settingOptionsChangeBgList = document.createElement("li");
let settingOptionsBalanceList = document.createElement("li");
let settingOptionsAboutList = document.createElement("li");
//For general setting
let headingGeneral = document.createElement("h1");
let headingDescriptionGeneral = document.createElement("p");
let generalH2 = document.createElement("h2")
let showContainer = document.createElement("div")
showContainer.id = "showContainer"

let linkDiv = document.createElement("div")
linkDiv.id = "linkDiv"
let linkText = document.createElement("h3")
let linkCheckBox = document.createElement("input");
linkCheckBox.type="checkbox"
linkCheckBox.checked=true

let greetingDiv = document.createElement("div")
greetingDiv.id = "greetingDiv"
let greetingText = document.createElement("h3")
let greetingCheckBox = document.createElement("input")
greetingCheckBox.type="checkbox"
greetingCheckBox.checked=true

let mainTaskDiv = document.createElement("div")
mainTaskDiv.id= "mainTaskDiv"
let mainTaskText = document.createElement("h3")
let mainTaskCheckbox = document.createElement("input")
mainTaskCheckbox.type= "checkbox"
mainTaskCheckbox.checked=true

let todoDiv = document.createElement("div")
todoDiv.id= "todoDiv"
let todoText = document.createElement("h3")
let todoCheckbox = document.createElement("input")
todoCheckbox.type= "checkbox"
todoCheckbox.checked=true

let quoteDiv = document.createElement("div")
quoteDiv.id= "quoteDiv"
let quoteText = document.createElement("h3")
let quoteCheckbox = document.createElement("input")
quoteCheckbox.type= "checkbox"
quoteCheckbox.checked=true

let brainDumpDiv = document.createElement("div")
brainDumpDiv.id= "brainDumpDiv"
let brainDumpText = document.createElement("h3")
let brainDumpCheckbox = document.createElement("input")
brainDumpCheckbox.type= "checkbox"
brainDumpCheckbox.checked=true

let timerDiv = document.createElement("div")
timerDiv.id= "timerDiv"
let timerText = document.createElement("h3")
let timerCheckbox = document.createElement("input")
timerCheckbox.type= "checkbox"
timerCheckbox.checked=true

let weatherDiv = document.createElement("div")
weatherDiv.id= "weatherDiv"
let weatherText = document.createElement("h3")
let weatherCheckbox = document.createElement("input")
weatherCheckbox.type= "checkbox"
weatherCheckbox.checked=true

let apperanceH2 = document.createElement("h2")
let themeContainer = document.createElement("div")
themeContainer.id="themeContainer"
let themeText = document.createElement("h3")
let themeDiv = document.createElement("div")
themeDiv.id="themeDiv"
let darkTheme = document.createElement("span")
let themeBorder = document.createElement("span")
let lightTheam = document.createElement("span")
//General Setting Appending
linkDiv.append(linkText,linkCheckBox)
greetingDiv.append(greetingText,greetingCheckBox)
mainTaskDiv.append(mainTaskText,mainTaskCheckbox)
todoDiv.append(todoText,todoCheckbox)
quoteDiv.append(quoteText,quoteCheckbox)
brainDumpDiv.append(brainDumpText,brainDumpCheckbox)
timerDiv.append(timerText,timerCheckbox)
weatherDiv.append(weatherText,weatherCheckbox)
themeDiv.append(darkTheme,themeBorder,lightTheam)
themeContainer.append(themeText,themeDiv)
showContainer.append(linkDiv,greetingDiv,mainTaskDiv,todoDiv,quoteDiv,brainDumpDiv,timerDiv,weatherDiv, apperanceH2,themeContainer)

settingGeneralContainer.append(headingGeneral, headingDescriptionGeneral,generalH2,showContainer);


//FOr background change options
let backgroundMainContainer = document.createElement("div");
let backgroundDiv1 = document.createElement("div");
let backgroundDiv2 = document.createElement("div");
let backgroundDiv3 = document.createElement("div");
let backgroundDiv4 = document.createElement("div");
let backgroundDiv5 = document.createElement("div");
let backgroundDiv6 = document.createElement("div");
let headingChangeBg = document.createElement("h1");
let headingDescriptionChangeBg = document.createElement("p");
//Background change setting append
backgroundMainContainer.append(
  backgroundDiv1,
  backgroundDiv2,
  backgroundDiv3,
  backgroundDiv4,
  backgroundDiv5,
  backgroundDiv6
);
settingBackgroundChangeContainer.append(
  headingChangeBg,
  headingDescriptionChangeBg,
  backgroundMainContainer
);

//For balance change option
let headingBalance = document.createElement("h1");
let headingDescriptionBalance = document.createElement("p");

let enableBalanceModeContainer = document.createElement("div");
let enableBalanceMode = document.createElement("div");
let enableBalanceH2 = document.createElement("h2");
let eneableBalanceP = document.createElement("p");
let balanceCheacker = document.createElement("div");
let balanceCheckBox = document.createElement("input");
balanceCheckBox.type = "checkbox";
balanceCheckBox.style.background="var(--toggle-bg)"


let uptimeDuration = document.createElement("div");
let uptimeBalanceH2 = document.createElement("h2");
let uptimeeBalanceP = document.createElement("p");

let hourContainer = document.createElement("div");
let uptimeHourH2 = document.createElement("h2");
let uptimeHourContainer = document.createElement("div");
let uptimeHourOption1 = document.createElement("span");
let uptimeHourOption2 = document.createElement("span");
let uptimeHourOption3 = document.createElement("span");
uptimeHourContainer.id = "uptimeHourContainer";
//Balance setting appending

hourContainer.append(uptimeHourH2, uptimeHourContainer);
hourContainer.id = "hourContainer";
uptimeHourContainer.append(
  uptimeHourOption1,
  uptimeHourOption2,
  uptimeHourOption3
);
uptimeDuration.append(uptimeBalanceH2, uptimeeBalanceP);
enableBalanceMode.append(enableBalanceH2, eneableBalanceP);
balanceCheacker.append(balanceCheckBox);
enableBalanceModeContainer.append(enableBalanceMode, balanceCheacker);
enableBalanceModeContainer.id = "enableBalanceModeContainer";
settingBalanceContainer.append(
  headingBalance,
  headingDescriptionBalance,
  enableBalanceModeContainer,
  uptimeDuration,
  hourContainer
);

//Proving Ids to each of the elements
settingOptions.id = "settingOptions";
settingOptionInformation.id = "settingOptionInformation";
settingBackgroundChangeContainer.id = "settingBackgroundChangeContainer";
backgroundMainContainer.id = "backgroundMainContainer";
//Adding the elements to the container
settingOptionInformation.append(
  settingGeneralContainer,
  settingBackgroundChangeContainer,
  settingBalanceContainer,
  settingAboutContainer
);
settingOptionsListContainer.append(
  settingOptionsGeneralList,
  settingOptionsChangeBgList,
  settingOptionsBalanceList,
  settingOptionsAboutList
);
settingOptions.append(settingOptionsListContainer);
settingContainer.append(settingOptions, settingOptionInformation);

settingOptionsGeneralList.textContent = "General";
settingOptionsBalanceList.textContent = "Balance";
settingOptionsChangeBgList.textContent = "Change Background";
settingOptionsAboutList.textContent = "About";

settingOptionsGeneralList.addEventListener("click", generalSetting);
settingOptionsChangeBgList.addEventListener("click", changeBackgroundSetting);
settingOptionsBalanceList.addEventListener("click", balanceSetting);
//Changing the background on clicking the background option
backgroundDiv1.addEventListener("click", function () {
  mainBox.style.backgroundImage = "url('../assets/images/wallpaper0.svg')";
});
backgroundDiv2.addEventListener("click", function () {
  mainBox.style.backgroundImage = "url('../assets/images/wallpaper1.svg')";
});
backgroundDiv3.addEventListener("click", function () {
  mainBox.style.backgroundImage = "url('../assets/images/wallpaper2.svg')";
});
backgroundDiv4.addEventListener("click", function () {
  mainBox.style.backgroundImage = "url('../assets/images/wallpaper3.svg')";
});
backgroundDiv5.addEventListener("click", function () {
  mainBox.style.backgroundImage = "url('../assets/images/wallpaper4.svg')";
});
backgroundDiv6.addEventListener("click", function () {
  mainBox.style.backgroundImage = "url('../assets/images/wallpaper5.svg')";
});

//Balance event listner
let eventListnerId;

setInterval(balanceSchedule(eventListnerId),1000)
let intervalId;
balanceCheckBox.addEventListener("change", function () {
  if (this.checked) {
    balanceSchedule(eventListnerId);
    uptimeHourOption1.addEventListener("click", function (){balanceSchedule(0)})
    uptimeHourOption2.addEventListener("click", function (){balanceSchedule(1)})
    uptimeHourOption3.addEventListener("click", function (){balanceSchedule(2)})
    balanceCheckBox.style.background="var(--toggle-bg-green)"  
  }
  if (!this.checked) {
    defaultValues()
    uptimeHourOption1.style.color="var(--secondary-color-settings)"
    uptimeHourOption2.style.color="var(--secondary-color-settings)"
    uptimeHourOption3.style.color="var(--secondary-color-settings)"
    uptimeHourOption3.addEventListener("click", function (){balanceSchedule(undefined)})
    uptimeHourOption2.addEventListener("click", function (){balanceSchedule(undefined)})
    uptimeHourOption1.addEventListener("click", function (){balanceSchedule(undefined)})
    balanceCheckBox.style.background="var(--toggle-bg)"
    console.log("noChecked")

  }
});

//Adding Event Listner for the General toggle settings
linkCheckBox.addEventListener("change",function(){
  if(this.checked){
    headerLeft.style.visibility="visible"
    linkCheckBox.style.background="var(--toggle-bg-green)" 
  }
  if(!this.checked){
    headerLeft.style.visibility="hidden"
    linkCheckBox.style.background="var(--toggle-bg)"
  }
})

greetingCheckBox.addEventListener("change",function(){
  if(this.checked){
    centerMiddle.style.display="block"
    greetingCheckBox.style.background="var(--toggle-bg-green)" 
  }
  if(!this.checked){
    centerMiddle.style.display="none"
    greetingCheckBox.style.background="var(--toggle-bg)"
  }
})

mainTaskCheckbox.addEventListener("change",function(){
  if(this.checked){
    centerBottom.style.visibility="visible"
    focusQue.style.visibility="visible"
    mainTaskCheckbox.style.background="var(--toggle-bg-green)"

  }
  if(!this.checked){
    centerBottom.style.visibility="hidden"
    focusQue.style.visibility="hidden"
    mainTaskCheckbox.style.background="var(--toggle-bg)"

  }
})

todoCheckbox.addEventListener("change",function(){
  if(this.checked){
    bottomRight.style.visibility="visible"
    // focusQue.style.visibility="visible"
    todoCheckbox.style.background="var(--toggle-bg-green)"

  }
  if(!this.checked){
    bottomRight.style.visibility="hidden"
    // focusQue.style.visibility="hidden"
    todoCheckbox.style.background="var(--toggle-bg)"

  }
})

quoteCheckbox.addEventListener("change",function(){
  if(this.checked){
    quoteShowingId.style.visibility="visible"
    // focusQue.style.visibility="visible"
    quoteCheckbox.style.background="var(--toggle-bg-green)"

  }
  if(!this.checked){
    quoteShowingId.style.visibility="hidden"
    // focusQue.style.visibility="hidden"
    quoteCheckbox.style.background="var(--toggle-bg)"

  }
})

brainDumpCheckbox.addEventListener("change",function(){
  if(this.checked){
    headerCenter.style.visibility="visible"
    // focusQue.style.visibility="visible"
    brainDumpCheckbox.style.background="var(--toggle-bg-green)"

  }
  if(!this.checked){
    headerCenter.style.visibility="hidden"
    // focusQue.style.visibility="hidden"
    brainDumpCheckbox.style.background="var(--toggle-bg)"

  }
})

timerCheckbox.addEventListener("change",function(){
  if(this.checked){
    centerTopContainer.style.visibility="visible"
    // focusQue.style.visibility="visible"
    timerCheckbox.style.background="var(--toggle-bg-green)"

  }
  if(!this.checked){
    centerTopContainer.style.visibility="hidden"
    // focusQue.style.visibility="hidden"
    timerCheckbox.style.background="var(--toggle-bg)"

  }
})

weatherCheckbox.addEventListener("change",function(){
  if(this.checked){
    topRight.style.visibility="visible"
    // focusQue.style.visibility="visible"
    weatherCheckbox.style.background="var(--toggle-bg-green)"

  }
  if(!this.checked){
    topRight.style.visibility="hidden"
    // focusQue.style.visibility="hidden"
    weatherCheckbox.style.background="var(--toggle-bg)"

  }
})

//For dark and light mode
darkTheme.addEventListener("click", function(){
  var element = document.getElementById("settingContainer")
  element.classList.toggle("dark-mode",true)
  console.log("darkmode on")
})