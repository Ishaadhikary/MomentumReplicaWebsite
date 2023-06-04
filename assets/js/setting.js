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
//For general setting
let settingHeading = document.createElement("h1")
let settingHeadingDescription=document.createElement("p")
//For setting options
let settingOptionsListContainer = document.createElement("ul")
let settingOptionsGeneralList = document.createElement("li")
let settingOptionsChangeBgList = document.createElement("li")
let settingOptionsBalanceList = document.createElement("li")
let settingOptionsAboutList = document.createElement("li")

//FOr background change options

//Proving Ids to each of the elements
settingOptions.id ="settingOptions"
settingOptionInformation.id = "settingOptionInformation"
//Adding the elements to the container
//General Setting
settingGeneralContainer.append(settingHeading,settingHeadingDescription)
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


function generalSetting(){
settingGeneralContainer.style.display="block"
settingBackgroundChangeContainer.style.display="none"
settingBalanceContainer.style.display="none"
settingHeading.textContent="General"
settingHeadingDescription.textContent="Customize Your Dashboard"
}

function changeBackgroundSetting(){
    settingGeneralContainer.style.display="none"
    settingBalanceContainer.style.display="none"
    settingBackgroundChangeContainer.style.display="block"
    settingBackgroundChangeContainer.textContent="Change Background"
    console.log("change background")
}

function balanceSetting(){
    settingGeneralContainer.style.display="none"
    settingBackgroundChangeContainer.style.display="none"
    settingBalanceContainer.style.display="block"
    settingBalanceContainer.textContent="balance Setting"
}



