// const btn = document.querySelector(".fa-circle-plus");

// btn.addEventListener("click", () => {
//   const addData = document.querySelectorAll(".additionalData");

//   addData.forEach((data) => {
//     data.innerHTML = "1";
//   });
//   console.log("clicked");
// });

let dolphins = [96, 108, 89]; // team 1
let koalas = [88, 91, 110]; // team 2

// calculate team average

function calculateTeamAvg(team) {
  let sum = 0;

  for (let i = 0; i < team.length; i++) {
    sum += team[i];
  }

  return sum / team.length;
}

if (calculateTeamAvg(dolphins) > calculateTeamAvg(koalas)) {
  console.log("Team 1 wins!");
} else if (calculateTeamAvg(dolphins) < calculateTeamAvg(koalas)) {
  console.log("Team 2 wins!");
} else {
  console.log("It's a tie!");
}
