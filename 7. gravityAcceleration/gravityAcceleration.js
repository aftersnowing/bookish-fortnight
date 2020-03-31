const g = 98;
const height = 600;
let intervalId = undefined;
let unitTime = 0.015;
let v = 0;
let h = 600;
let pixel = 0;
let toggle = true;
let dy = 0;
let dy_2 = 0;
let isDone = false;

function getGravityAcceleration() {
  if (toggle) {
    v += g * unitTime;
    dy = (1 / (2 * g)) * (Math.pow(v, 2) - Math.pow(v - g * unitTime, 2));
    dy_2 = ((2 * v - g * unitTime) * unitTime) / 2;
    h = h - dy_2;
    pixel = pixel + dy_2;
    console.log("first", "dy:", dy, "dy_2:", dy_2, "pixel:", pixel);
    renderDom("+");
    checkReflection();
  }

  if (!toggle) {
    v -= g * unitTime;
    dy = (1 / (2 * g)) * (Math.pow(v, 2) - Math.pow(v - g * unitTime, 2));
    dy_2 = ((2 * v - g * unitTime) * unitTime) / 2;
    h = h + dy_2;
    console.log("second", "dy:", dy, "dy_2:", dy_2, "pixel", pixel);
    pixel = pixel - dy_2;
    renderDom();
    checkHighestPosition();
  }
}

function syncronizePixel() {
  pixel = dy_2;
}

function checkReflection() {
  if (pixel >= 600) {
    pixel = 600;
    h = 0;
    v = 0.7 * v;
    renderDom();
    toggle = !toggle;
  }
}

function checkHighestPosition() {
  if (v <= 0) {
    if (pixel > 599) {
      v = 0;
      h = 0;
      pixel = 0;
      renderDom();
      return clearInterval(intervalId);
    }
    toggle = !toggle;
  }
}

function runSetInterval(callback, time) {
  intervalId = setInterval(callback, time);
}

function setPosition(pixel) {
  document.getElementsByClassName("ball")[0].classList.add("top");
  console.log(1);
}

function renderDom() {
  document.getElementsByClassName("velocity")[0].innerText = v.toFixed(1);
  document.getElementsByClassName("distance")[0].innerText = h.toFixed(0);
  document.getElementsByClassName(
    "ball"
  )[0].style.transform = `translateY(${pixel}px)`;
}

const button = document.getElementById("button");
button.addEventListener(
  "click",
  runSetInterval.bind(null, getGravityAcceleration, 0),
  false
);
