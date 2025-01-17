class Model {
  constructor() {
    this.playData = Array(8)
      .fill(null)
      .map(val => Array(8).fill(0));
    this.blackStone = 1;
    this.whiteStone = 2;
    this.player = this.blackStone;
    this.init();
    console.log(this.playData);
  }

  init() {
    this.playData[3][3] = 2;
    this.playData[4][4] = 2;
    this.playData[3][4] = 1;
    this.playData[4][3] = 1;
  }

  putStone(input, positionArr) {
    this.input = input;
    this.updateStone(input);
    this.changeAdjacentStones(positionArr);
    this.changeTurn();
  }

  changeTurn() {
    this.player === this.blackStone
      ? (this.player = this.whiteStone)
      : (this.player = this.blackStone);
  }

  changeAdjacentStones(arr) {
    arr.forEach(val => {
      val.forEach(el => {
        this.updateStone(el);
      });
    });
  }

  updateStone(input) {
    this.playData[input[0]][input[1]] = this.player;
  }
}
module.exports = Model;
