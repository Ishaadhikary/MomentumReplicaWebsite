let mainBox = document.getElementById("main-box")
let settingContainer = document.getElementById("settingContainer")
let countS = 1
function setting(){
 if(countS % 2 != 0){
    settingContainer.style.display="flex"
    countS ++
 }
 else{
    settingContainer.style.display="none"
    countS ++
 }
}

//Initializing for the setting
let settingOptions= document.createElement("div")
let settingOptionInformation = document.createElement("div")
let settingGeneralContainer = document.createElement("div")
let settingBackgroundChangeContainer =document.createElement("div")
let settingBalanceContainer = document.createElement("div")
let settingAboutContainer = document.createElement("div")
//For setting options
let settingOptionsListContainer = document.createElement("ul")
let settingOptionsGeneralList = document.createElement("li")
let settingOptionsChangeBgList = document.createElement("li")
let settingOptionsBalanceList = document.createElement("li")
let settingOptionsAboutList = document.createElement("li")
//For general setting
let headingGeneral = document.createElement("h1")
let headingDescriptionGeneral=document.createElement("p")
//General Setting
settingGeneralContainer.append(headingGeneral ,headingDescriptionGeneral)

//FOr background change options
let backgroundMainContainer = document.createElement("div")
let backgroundDiv1 = document.createElement("div")
let backgroundDiv2 = document.createElement("div")
let backgroundDiv3 = document.createElement("div")
let backgroundDiv4 = document.createElement("div")
let backgroundDiv5 = document.createElement("div")
let backgroundDiv6 = document.createElement("div")
let headingChangeBg = document.createElement("h1")
let headingDescriptionChangeBg = document.createElement("p")
//Background change setting append
backgroundMainContainer.append(backgroundDiv1,backgroundDiv2,backgroundDiv3,backgroundDiv4,backgroundDiv5,backgroundDiv6)
settingBackgroundChangeContainer.append(headingChangeBg,headingDescriptionChangeBg,backgroundMainContainer)

//For balance change option
let headingBalance = document.createElement("h1")
let headingDescriptionBalance = document.createElement("p")

let enableBalanceModeContainer = document.createElement("div")
let enableBalanceMode = document.createElement("div")
let enableBalanceH2 = document.createElement("h2")
let eneableBalanceP = document.createElement("p")
let balanceCheacker = document.createElement("div")
let balanceCheckBox = document.createElement("input")
balanceCheckBox.type="checkbox"
let uptimeDuration = document.createElement("div")
let uptimeBalanceH2 = document.createElement("h2")
let uptimeeBalanceP = document.createElement("p")

let hourContainer = document.createElement("div")
let uptimeHourH2 = document.createElement("h2")
let uptimeHourContainer =document.createElement("div")
let uptimeHourOption1 = document.createElement("span")
let uptimeHourOption2 = document.createElement("span")
let uptimeHourOption3 = document.createElement("span")
uptimeHourContainer.id="uptimeHourContainer"
//Balance setting appending

hourContainer.append(uptimeHourH2,uptimeHourContainer)
hourContainer.id = "hourContainer"
uptimeHourContainer.append(uptimeHourOption1,uptimeHourOption2,uptimeHourOption3)
uptimeDuration.append(uptimeBalanceH2,uptimeeBalanceP)
enableBalanceMode.append(enableBalanceH2,eneableBalanceP)
balanceCheacker.append(balanceCheckBox)
enableBalanceModeContainer.append(enableBalanceMode,balanceCheacker)
enableBalanceModeContainer.id ="enableBalanceModeContainer"
settingBalanceContainer.append(headingBalance,headingDescriptionBalance,enableBalanceModeContainer,uptimeDuration,hourContainer)



//Proving Ids to each of the elements
settingOptions.id ="settingOptions"
settingOptionInformation.id = "settingOptionInformation"
settingBackgroundChangeContainer.id = "settingBackgroundChangeContainer"
backgroundMainContainer.id="backgroundMainContainer"
//Adding the elements to the container
settingOptionInformation.append(settingGeneralContainer,settingBackgroundChangeContainer,settingBalanceContainer,settingAboutContainer)
settingOptionsListContainer.append(settingOptionsGeneralList, settingOptionsChangeBgList, settingOptionsBalanceList,settingOptionsAboutList)
settingOptions.append(settingOptionsListContainer)
settingContainer.append(settingOptions,settingOptionInformation)



settingOptionsGeneralList.textContent="General"
settingOptionsBalanceList.textContent="Balance"
settingOptionsChangeBgList.textContent= "Change Background"
settingOptionsAboutList.textContent="About"

settingOptionsGeneralList.addEventListener("click",generalSetting)
settingOptionsChangeBgList.addEventListener("click",changeBackgroundSetting)
settingOptionsBalanceList.addEventListener("click",balanceSetting)
//Changing the background on clicking the background option
backgroundDiv1.addEventListener("click", function(){mainBox.style.backgroundImage="url('../assets/images/wallpaper0.svg')"})
backgroundDiv2.addEventListener("click", function(){mainBox.style.backgroundImage="url('../assets/images/wallpaper1.svg')"})
backgroundDiv3.addEventListener("click", function(){mainBox.style.backgroundImage="url('../assets/images/wallpaper2.svg')"})
backgroundDiv4.addEventListener("click", function(){mainBox.style.backgroundImage="url('../assets/images/wallpaper3.svg')"})
backgroundDiv5.addEventListener("click", function(){mainBox.style.backgroundImage="url('../assets/images/wallpaper4.svg')"})
backgroundDiv6.addEventListener("click", function(){mainBox.style.backgroundImage="url('../assets/images/wallpaper5.svg')"})


//Balance event listner
uptimeHourOption1.addEventListener("click", function (){uptime(0)})
uptimeHourOption2.addEventListener("click", function (){uptime(1)})
uptimeHourOption3.addEventListener("click", function (){uptime(2)})


function generalSetting(){
settingGeneralContainer.style.display="block"
settingBackgroundChangeContainer.style.display="none"
settingBalanceContainer.style.display="none"
headingGeneral.textContent="General"
headingDescriptionGeneral.textContent="Customize Your Dashboard"
}






