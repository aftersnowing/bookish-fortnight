const target = 100;
const g = 10;
let intervalId = undefined;
let totalTime = 0;
let unitTime = 0.1;
let initialPosition = 0;
let v = 0;
let h = 0;
let pixel = 0;
let toggle = true;

function getGravityAcceleration() {
  if (toggle) {
    totalTime += unitTime;
    v = g * totalTime;
    h = g * Math.pow(totalTime, 2);
    pixel = initialPosition + (600 / Math.pow(10, 2)) * Math.pow(totalTime, 2);
    updateDom();
    if(pixel >= 599) {
      initialPosition = pixel;
      totalTime = 0.7 * totalTime;
      return toggle = !toggle;
    }
  }

  if (!toggle) {
    totalTime -= unitTime;
    v = g * totalTime;
    h = h - v * unitTime;
    pixel = 600 - v * unitTime;
    updateDom();

    if(v <= 1){
      initialPosition = pixel;
      totalTime = 0;
      toggle = !toggle;
    }

    if(pixel > 590) return clearInterval(intervalId);
  }
}

function syncronizePixel() {
}

function runSetInterval(callback, time) {
  intervalId = setInterval(callback, time);
}

function updateDom() {
  document.getElementsByClassName("velocity")[0].innerText = v.toFixed(2);
  document.getElementsByClassName("distance")[0].innerText = h.toFixed(2);
  document.getElementsByClassName(
    "ball"
  )[0].style.transform = `translateY(${pixel}px)`;
}

const button = document.getElementById("button");
button.addEventListener(
  "click",
  runSetInterval.bind(null, getGravityAcceleration, 10),
  false
);
