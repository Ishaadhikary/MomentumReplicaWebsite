let focusQue = document.getElementById("focusQue")
let centerBottom = document.querySelector(".center-bottom")
let bottomRight = document.querySelector(".bottom-right")
function balanceSetting(){
    //Initializing the container
    settingGeneralContainer.style.display="none"
    settingBackgroundChangeContainer.style.display="none"
    settingBalanceContainer.style.display="block"
    settingOptionsBalanceList.style.color="var(--secondary-color-dark)"
    settingOptionsBalanceList.style.fontWeight="bold"
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
  
uptimeHourOption1.addEventListener("click", function (){balanceSchedule(0)})
uptimeHourOption2.addEventListener("click", function (){balanceSchedule(1)})
uptimeHourOption3.addEventListener("click", function (){balanceSchedule(2)})
  
    const [currentHour,currentMin] =getTime()
    let timeChecker = parseFloat(currentHour)+(parseFloat(currentMin/60))
    console.log(timeChecker)
    if(eventListnerId==undefined){
      if(timeChecker<8 || timeChecker>17){
        UptimeOver()
       }
       else{
        defaultValues()
      }

    }
    if(eventListnerId == 0 ){
      if(timeChecker<8 || timeChecker>17){
     UptimeOver()
     }
     else{
     defaultValues()
    }}


    if(eventListnerId == 1 ){
       if(timeChecker<9 || timeChecker>23){
        UptimeOver()
       }
       else{
        defaultValues()
      }
    }
    if(eventListnerId == 2 ){
        if(timeChecker<9.5 || timeChecker>17.5){
            focusQue.textContent="TAKE A BREAK!!!"
            centerBottom.style.display="none"
            bottomRight.style.visibility="hidden"
           }
           else{
            defaultValues()
          }
    }
 }

function defaultValues(){
  focusQue.textContent="What is your main focus for today"
            centerBottom.style.display="block"
            bottomRight.style.display="block"
}

function UptimeOver(){
  focusQue.textContent="TAKE A BREAK!!!"
            centerBottom.style.display="none"
            bottomRight.style.visibility="hidden"
}