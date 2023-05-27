let centerMiddle = document.querySelector(".center-middle span");

console.log(centerMiddle);
function message() {
  console.log(currentHour);
  //goodmorning:4am-12am
  if (currentHour >= 4 && currentHour <= 12) {
    centerMiddle.textContent ="GOOD MORNING!"
    console.log("GoodMorning");
  }
  //goodafternoon:12:1am-5pm
  else if (currentHour > 12 && currentHour < 17) {
    centerMiddle.textContent ="GOOD AFTERNOON!"
    console.log("good Afternoon");
  }
  //goodevening:5:01pm-11pm
  else if (currentHour >= 17 && currentHour < 11) {
    centerMiddle.textContent ="GOOD EVENING!"
    console.log("Good Evening");
  }
  //goodNight:11:01-3:59pm
  else {
    console.log("good Night");
    centerMiddle.textContent ="GOOD NIGNT!"
  }
}
message();
