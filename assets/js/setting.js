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
let headingGeneral = document.createElement("h1")
let headingDescriptionGeneral=document.createElement("p")


//For setting options
let settingOptionsListContainer = document.createElement("ul")
let settingOptionsGeneralList = document.createElement("li")
let settingOptionsChangeBgList = document.createElement("li")
let settingOptionsBalanceList = document.createElement("li")
let settingOptionsAboutList = document.createElement("li")

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

//Proving Ids to each of the elements
settingOptions.id ="settingOptions"
settingOptionInformation.id = "settingOptionInformation"
settingBackgroundChangeContainer.id = "settingBackgroundChangeContainer"
backgroundMainContainer.id="backgroundMainContainer"
//Adding the elements to the container
//General Setting
settingGeneralContainer.append(headingGeneral ,headingDescriptionGeneral)
settingOptionInformation.append(settingGeneralContainer,settingBackgroundChangeContainer,settingBalanceContainer,settingAboutContainer)
settingOptionsListContainer.append(settingOptionsGeneralList, settingOptionsChangeBgList, settingOptionsBalanceList,settingOptionsAboutList)
settingOptions.append(settingOptionsListContainer)
settingContainer.append(settingOptions,settingOptionInformation)
//Background change setting append
backgroundMainContainer.append(backgroundDiv1,backgroundDiv2,backgroundDiv3,backgroundDiv4,backgroundDiv5,backgroundDiv6)
settingBackgroundChangeContainer.append(headingChangeBg,headingDescriptionChangeBg,backgroundMainContainer)

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
    settingBackgroundChangeContainer.style.display="flex"
    headingChangeBg.textContent="Change Background"
    headingDescriptionChangeBg.textContent="Change your background"

    settingBackgroundChangeContainer.style.width="100%"
    settingBackgroundChangeContainer.style.height="100%"
    console.log("change background")
}

function balanceSetting(){
    settingGeneralContainer.style.display="none"
    settingBackgroundChangeContainer.style.display="none"
    settingBalanceContainer.style.display="block"
    settingBalanceContainer.textContent="balance Setting"
}



