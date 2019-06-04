const View = require("./View");
const view = new View();

class Model {
  constructor() {
    this.playData = Array(8)
      .fill(null)
      .map(val => Array(8).fill(0));
    this.player = 1;
  }
  execute(input) {
    this.playData[input[0]][input[1]] = this.player;
    this.player === 1 ? (this.player = 2) : (this.player = 1);
    view.excute(this.playData);
    // console.log(this.player);
  }
}
module.exports = Model;
