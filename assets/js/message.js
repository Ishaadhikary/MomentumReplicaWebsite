let centerMiddle = document.querySelector(".center-middle span");
let userName = document.getElementById("nameId");
// console.log(userName)

let greeging = " ";
function message() {
  const [currentHour] = getTime();
  console.log(currentHour);
  //goodmorning:4am-12am
  if (currentHour >= 4 && currentHour <= 12) {
    greeging = "GOOD MORNING!";
    console.log("GoodMorning");
  }
  //goodafternoon:12:1am-5pm
  else if (currentHour > 12 && currentHour < 17) {
    greeging = "GOOD AFTERNOON!";
    console.log("good Afternoon");
  }
  //goodevening:5:01pm-11pm
  else if (currentHour >= 17 && currentHour < 23) {
    greeging = "GOOD EVENING!";
    console.log("Good Evening");
  }
  //goodNight:11:01-3:59pm
  else if (currentHour >= 23 && currentHour > 4) {
    console.log("good Night");
    greeging = "GOOD NIGNT!";
  }

  let storedUserName = localStorage.getItem("userName");
  centerMiddle.textContent = greeging + " " + storedUserName + ".";
  userName.style.display = "none";
}
message();
addUserInfo();
function addUserInfo() {
  userName.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && userName.value != null) {
      localStorage.setItem("userName", userName.value);
      let storedUserName = localStorage.getItem("userName");
      console.log(storedUserName);
      centerMiddle.textContent = greeging + " " + storedUserName + ".";
      userName.style.display = "none";

      // centerMiddle.classList.toggle(userName)
    }
  });
}
centerMiddle.addEventListener("click", function () {
  centerMiddle.textContent = greeging;
  userName.style.display = "block";
  addUserInfo();
});
