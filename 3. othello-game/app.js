const Controller = require("./Controller");
// const View = require(View);

const controller = new Controller();
// const view = new View();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let pos = null;

rl.setPrompt("당신의 신의 한수는!?");
rl.prompt();
rl.on("line", function(userInput) {
  if (userInput === "q") {
    rl.close();
  }
  pos = userInput.split(" ").map(Number);
  controller.execute(pos);

  rl.prompt();
});
rl.on("close", function() {
  process.exit();
});
