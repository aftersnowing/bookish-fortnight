const g = 9.81;
const h = 500;
const target = Math.sqrt(2 * g * h);
let v = 0;
let setIntervalID = null;

const velocityText = document.getElementsByClassName("velocity")[0];

function gravityAcceleration() {
  if(v > target - target / 100 ) {
    return clearInterval(setIntervalID);
  }
  v += target / 100;
  velocityText.innerText = v.toFixed(2);
  console.log(1);
}

function getReflection(divider, boolean, clear ) {
  boolean ? v += v / 100 : v -= v / 100
}

let animationTimer = 0;
function animateBall() {
  document.getElementsByClassName("ball-wrapper")[0].classList.add('move-down');
  if(animationTimer === 0) animationTimer = new Date().getTime();

}

function setIntervalf(func) {
  setIntervalID =  setInterval(func, 12);
}

const button = document.getElementsByClassName("button")[0];
button.addEventListener('click', animateBall);
button.addEventListener('click', setIntervalf.bind(null, gravityAcceleration));

