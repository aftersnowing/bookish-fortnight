class Model {
  constructor() {
    this.playData = Array(8)
      .fill(null)
      .map(val => Array(8).fill(0));
    this.blackStone = 1;
    this.whiteStone = 2;
    this.player = this.blackStone;
    this.init();
  }

  init() {
    this.playData[3][3] = 2;
    this.playData[4][4] = 2;
    this.playData[3][4] = 1;
    this.playData[4][3] = 1;
  }

  putStone(input) {
    this.playData[input[0]][input[1]] = this.player;
    this.changeTurn();
  }

  changeTurn(player) {
    player === this.blackStone
      ? (player = this.whiteStone)
      : (player = this.blackStone);
  }
}
module.exports = Model;
