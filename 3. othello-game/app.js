const Controller = require("./Controller");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let pos = null;

const controller = new Controller();

rl.setPrompt("당신의 신의 한수는!?");
rl.prompt();
rl.on("line", function(userInput) {
  if (userInput === "q") {
    rl.close();
  }

  if (userInput.match(/\d\s\d/) !== null) {
    pos = userInput.split(" ").map(Number);
    controller.execute(pos);
  } else {
    console.log("올바른 입력을 주세요");
  }

  rl.prompt();
});
rl.on("close", function() {
  process.exit();
});
