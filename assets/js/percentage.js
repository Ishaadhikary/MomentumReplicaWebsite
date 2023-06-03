function percentageDisplay(){
    createPercentate()
    centerPomodoro.style.display="none"
    centerTime.style.display="none"
    percentageImg.style.display="none"
    pomodoroImg.style.display="block"
    clockImg.style.display="block"

}
//Displays the Day in percentage
function createPercentate() {
    centerTime.style.display = "none";
    let outerCircle = document.createElement("div");
    let innerCircle = document.createElement("div");
    let innerText = document.createElement("div");
    innerText.id = "innerText";
    outerCircle.id = "outerCircle";
    innerCircle.id = "innerCircle";
    let dayPercentageTxt = dayPercentageTextDisplay();
    innerText.innerHTML = dayPercentageTxt + "%" + "<p>" + "Day" + "</p>";
    innerCircle.append(innerText);
  
    centerPercentage.append(outerCircle, innerCircle);
    centerPercentage.id = "centerPercentage";
    centerPercentage.style.display = "block";
  }