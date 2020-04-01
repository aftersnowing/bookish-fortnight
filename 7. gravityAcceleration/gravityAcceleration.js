const g = 9.8;
const unitTime = 0.065;
const elasticity = 0.7;

let v = 0;
let h = 600;
let pixel = 0;
let toggle = true;
let intervalId = null;

function startGravityAcceleration() {
  if (toggle) {
    dropBall();
    checkBounce();
  }

  if (!toggle) {
    bounceBall();
    checkDrop();
  }
}

function dropBall() {
  v += g * unitTime;
  h = h - getDeltaY();
  pixel = pixel + getDeltaY();
  renderDom();
}

function bounceBall() {
  v = v - g * unitTime;
  h = h + getDeltaY();
  pixel = pixel - getDeltaY();
  renderDom();
}

function getDeltaY() {
  return (1 / (2 * g)) * (Math.pow(v, 2) - Math.pow(v - g * unitTime, 2));
}

function checkBounce() {
  if (pixel >= 600) {
    pixel = 600;
    h = 0;
    v = elasticity * v;
    renderDom();
    toggle = !toggle;
  }
}

function checkDrop() {
  if (v <= 0) {
    checkOnGround();
    toggle = !toggle;
  }
}

function checkOnGround() {
  if (pixel > 599.5) {
    v = 0;
    h = 0;
    pixel = 600;
    renderDom();
    clearInterval(intervalId);
    intervalId = null;
  }
}

function renderDom() {
  document.getElementsByClassName("velocity")[0].innerText = v.toFixed(1);
  document.getElementsByClassName("distance")[0].innerText = h.toFixed(0);
  document.getElementsByClassName(
    "ball"
  )[0].style.transform = `translateY(${pixel}px)`;
}

function runSetInterval(callback, time) {
  if (!intervalId) intervalId = setInterval(callback, time);
}

function stopSetInterval() {
  clearInterval(intervalId);
  intervalId = null;
}

function renewValues() {
  clearInterval(intervalId);
  v = 0;
  h = 600;
  pixel = 0;
  toggle = true;
  intervalId = null;
  renderDom();
}

document
  .getElementById("button")
  .addEventListener(
    "click",
    runSetInterval.bind(null, startGravityAcceleration, 0),
    false
  );

document
  .getElementById("button_2")
  .addEventListener("click", stopSetInterval, false);

document
  .getElementById("button_3")
  .addEventListener("click", renewValues, false);
