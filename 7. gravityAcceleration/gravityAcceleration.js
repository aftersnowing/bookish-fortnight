const target = 100;
const g = 9.81;
let intervalId = undefined;
let totalTime = 0;
let firstBounceTime = 0;
let unitTime = 1;
let v = 0;
let h = 0;
let pixel = 0;
let count = 0;

function getGravityAcceleration() {
  if (target <= totalTime) {
    return clearInterval(intervalId);
  }
  count++;
  totalTime += unitTime;
  h = Math.pow(totalTime, 2);
  v = g * totalTime;
  syncronizePixel();
  updateDom();
  console.log(Math.pow(totalTime, 2) - Math.pow(totalTime - 1, 2));
}

function getBounce() {
  pixel = 600 - (600 / Math.pow(target, 2)) * Math.pow(totalTime, 2);
}

function syncronizePixel() {
  pixel = (600 / Math.pow(target, 2)) * Math.pow(totalTime, 2);
}

function runSetInterval(callback, time) {
  intervalId = setInterval(callback, time);
}

function updateDom() {
  document.getElementsByClassName("velocity")[0].innerText = v.toFixed(2);
  document.getElementsByClassName("distance")[0].innerText = h.toFixed(2);
  document.getElementsByClassName(
    "ball-container"
  )[0].style.transform = `translateY(${pixel}px)`;
}

const button = document.getElementById("button");
button.addEventListener(
  "click",
  runSetInterval.bind(null, getGravityAcceleration, 9),
  false
);
