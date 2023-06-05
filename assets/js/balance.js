let focusQue = document.getElementById("focusQue")
let centerBottom = document.querySelector(".center-bottom")
let bottomRight = document.querySelector(".bottom-right")
function balanceSetting(){
    //Initializing the container
    settingGeneralContainer.style.display="none"
    settingBackgroundChangeContainer.style.display="none"
    settingAboutContainer.style.display="none"
    settingBalanceContainer.style.display="block"

    settingOptionsBalanceList.style.color="var(--secondary-color-dark)"
    settingOptionsBalanceList.style.fontWeight="bold"

    settingOptionsGeneralList.style.color="var(--secondary-color-settings)"
    settingOptionsChangeBgList.style.color="var(--secondary-color-settings)"
    settingOptionsAboutList.style.color="var(--secondary-color-settings)"
    
    settingOptionsGeneralList.style.fontWeight="normal"
    settingOptionsAboutList.style.fontWeight="normal"
    settingOptionsChangeBgList.style.fontWeight="normal"

    headingBalance.innerText="Balance Setting"
    headingDescriptionBalance.innerHTML= "Have a work life balance"
    enableBalanceH2.innerHTML="Enable Balance Mode"
    eneableBalanceP.innerHTML="Hide productivity feature during downtime"
    uptimeBalanceH2.innerHTML="UPTIME SCHEDULE"
    uptimeeBalanceP.innerHTML="The productivity feature will be activated"
    uptimeHourH2.innerHTML="Hours of the day"
    uptimeHourH2.style.fontWeight="normal"
    uptimeHourOption1.innerText = "08:30 - 16:30 |"
    uptimeHourOption2.innerText = " 09:00 - 17:00 |"
    uptimeHourOption3.innerText = " 09:30 - 17:30"
}
function balanceSchedule(eventListnerId){
  const [currentHour,currentMin] =getTime()
    let timeChecker = parseFloat(currentHour)+(parseFloat(currentMin/60))

    if(eventListnerId == 0 ){
      if(timeChecker<8 || timeChecker>17){
        
        uptimeHourOption1.style.color="var(--secondary-color-dark)"
        uptimeHourOption2.style.color="var(--secondary-color-settings)"
        uptimeHourOption3.style.color="var(--secondary-color-settings)"
     UptimeOver()
     }
     else{
     defaultValues()
     uptimeHourOption1.style.color="var(--secondary-color-dark)"
     uptimeHourOption2.style.color="var(--secondary-color-settings)"
     uptimeHourOption3.style.color="var(--secondary-color-settings)"
    }}


    if(eventListnerId == 1 ){
       if(timeChecker<9 || timeChecker>23){
        uptimeHourOption2.style.color="var(--secondary-color-dark)"
         uptimeHourOption1.style.color="var(--secondary-color-settings)"
         uptimeHourOption3.style.color="var(--secondary-color-settings)"

         UptimeOver()
       }
       else{
        defaultValues()
        uptimeHourOption2.style.color="var(--secondary-color-dark)"
         uptimeHourOption1.style.color="var(--secondary-color-settings)"
         uptimeHourOption3.style.color="var(--secondary-color-settings)"
      }
    }
    if(eventListnerId == 2 ){
        if(timeChecker<11 || timeChecker>18.5){  
          UptimeOver()
        uptimeHourOption3.style.color="var(--secondary-color-dark)"
        uptimeHourOption1.style.color="var(--secondary-color-settings)"
        uptimeHourOption2.style.color="var(--secondary-color-settings)"
           }
           else{
            defaultValues()   
        uptimeHourOption3.style.color="var(--secondary-color-dark)"
        uptimeHourOption1.style.color="var(--secondary-color-settings)"
        uptimeHourOption2.style.color="var(--secondary-color-settings)"
          }
    }
    if(eventListnerId==undefined){
      if(timeChecker<6 || timeChecker>23){
        uptimeHourOption1.style.color="var(--secondary-color-dark)"
        uptimeHourOption2.style.color="var(--secondary-color-settings)"
        uptimeHourOption3.style.color="var(--secondary-color-settings)"
        UptimeOver()
       }
       else{
        defaultValues()
        uptimeHourOption1.style.color="var(--secondary-color-dark)"
        uptimeHourOption2.style.color="var(--secondary-color-settings)"
        uptimeHourOption3.style.color="var(--secondary-color-settings)"
      }
 }}

function defaultValues(){
  focusQue.textContent="What is your main focus for today"
            centerBottom.style.display="block"
            bottomRight.style.visibility="visible"   
}

function UptimeOver(){
  focusQue.textContent="✨TAKE A BREAK. YOU DESERVE IT✨"
            centerBottom.style.display="none"
            bottomRight.style.visibility="hidden" 
}