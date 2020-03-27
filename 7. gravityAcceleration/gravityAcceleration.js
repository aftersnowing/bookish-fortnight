const target = 10000;
const g = 9.81;
let intervalId = undefined;
let count = 0;
let t = 0;
let v = 0;
let h = 0;

function getGravityAcceleration() {
  let unitTime = 0.1;
  if (h < target) {
    count++;
    t += unitTime;
    v += g * unitTime;
    h += v * unitTime;
    updateDom(v, h);
  }

  // console.log(
  //   "first /",
  //   "time:",
  //   t,
  //   "velocity:",
  //   v,
  //   "target",
  //   target,
  //   "h:",
  //   h,
  //   "count:",
  //   count
  // );
}
function getGravityAcceleration_2() {
  const i = 250;
  if (h > target - 1) return clearInterval(intervalId);
  h = h + target / i;
  v = Math.sqrt(2 * g * h);
  updateDom(v, h);

  // console.log("second /", "velocity:", v);
}
// getGravityAcceleration(1000, 500);
// getGravityAcceleration_2(1000, 500);

function runSetInterval(callback, time) {
  intervalId = setInterval(callback, time);
}

function updateDom(v, h) {
  document.getElementsByClassName("velocity")[0].innerText = v.toFixed(2);
  document.getElementsByClassName("distance")[0].innerText = h;
}

function clickButton(e) {
  const ball = document.getElementsByClassName("ball-container");
  ball[0].classList.add("movement");
}

const button = document.getElementById("button");
button.addEventListener("click", clickButton, false);
button.addEventListener(
  "click",
  runSetInterval.bind(null, getGravityAcceleration_2, 1),
  false
);
