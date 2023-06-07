
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
  //Adding hover effect only when the balance mode is on
  uptimeHourOption1.addEventListener("mouseover", function(){
    uptimeHourOption1.style.color="var(--secondary-color)"
  })
  uptimeHourOption1.addEventListener("mouseleave",function(){
    uptimeHourOption1.style.color="inherit"
  })
  uptimeHourOption2.addEventListener("mouseover", function(){
    uptimeHourOption2.style.color="var(--secondary-color)"
  })
  uptimeHourOption2.addEventListener("mouseleave",function(){
    uptimeHourOption2.style.color="inherit"
  })
  uptimeHourOption3.addEventListener("mouseover", function(){
    uptimeHourOption3.style.color="var(--secondary-color)"
  })
  uptimeHourOption3.addEventListener("mouseleave",function(){
    uptimeHourOption3.style.color="inherit"
  })
  const [currentHour,currentMin] =getTime()
    let timeChecker = parseFloat(currentHour)+(parseFloat(currentMin/60))

    if(eventListnerId == 0){
      if(timeChecker<8.5 || timeChecker>16.5){
        uptimeHourOption1.style.color="var(--secondary-color)"
        uptimeHourOption2.style.color="var(--secondary-color-settings)"
        uptimeHourOption3.style.color="var(--secondary-color-settings)"
        uptimeHourOption1.style.fontWeight="bold"
         uptimeHourOption2.style.fontWeight="normal"
         uptimeHourOption3.style.fontWeight="normal"
     UptimeOver()
     }
     else{
     defaultValues()
     uptimeHourOption1.style.color="var(--secondary-color)"
     uptimeHourOption2.style.color="var(--secondary-color-settings)"
     uptimeHourOption3.style.color="var(--secondary-color-settings)"
    }}


    else if(eventListnerId == 1 ){
      uptimeHourOption2.removeEventListener("mouseleave" ,function(){})
       if(timeChecker<9 || timeChecker>17){
        uptimeHourOption2.style.color="var(--secondary-color)"
         uptimeHourOption1.style.color="var(--secondary-color-settings)"
         uptimeHourOption3.style.color="var(--secondary-color-settings)"
         uptimeHourOption2.style.fontWeight="bold"
         uptimeHourOption1.style.fontWeight="normal"
         uptimeHourOption3.style.fontWeight="normal"

         UptimeOver()
       }
       else{
        defaultValues()
        uptimeHourOption2.style.color="var(--secondary-color)"
         uptimeHourOption1.style.color="var(--secondary-color-settings)"
         uptimeHourOption3.style.color="var(--secondary-color-settings)"
      }
    }
    else if(eventListnerId == 2 ){
        if(timeChecker<9.5 || timeChecker>17.5){  
          UptimeOver()
        uptimeHourOption3.style.color="var(--secondary-color)"
        uptimeHourOption1.style.color="var(--secondary-color-settings)"
        uptimeHourOption2.style.color="var(--secondary-color-settings)"
        uptimeHourOption3.style.fontWeight="bold"
        uptimeHourOption1.style.fontWeight="normal"
        uptimeHourOption2.style.fontWeight="normal"
           }
           else{
            defaultValues()   
        uptimeHourOption3.style.color="var(--secondary-color)"
        uptimeHourOption1.style.color="var(--secondary-color-settings)"
        uptimeHourOption2.style.color="var(--secondary-color-settings)"
          }
    }
    else if(eventListnerId == 3){
      
      uptimeHourOption1.style.color="var(--secondary-color-settings)"
      uptimeHourOption1.style.color="var(--secondary-color-settings)"
      uptimeHourOption3.style.color="var(--secondary-color-settings)"
      defaultValues()
    }
}

function defaultValues(){
  focusQue.textContent="What is your main focus for today"
            centerBottom.style.display="block"
            bottomRight.style.visibility="visible"  
            uptimeHourOption3.style.fontWeight="normal"
            uptimeHourOption1.style.fontWeight="normal"
            uptimeHourOption2.style.fontWeight="normal" 
}

function UptimeOver(){
  focusQue.textContent="✨TAKE A BREAK. YOU DESERVE IT✨"
            centerBottom.style.display="none"
            bottomRight.style.visibility="hidden" 
}