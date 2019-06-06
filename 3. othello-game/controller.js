const Model = require("./Model");
const View = require("./View");
const model = new Model();
const view = new View();

class Controller {
  constructor() {}

  execute(input) {
    if (this.getPositionState(input) === 0) {
      model.putStone(input);
      return this.viewOutput(model.playData);
    }
    console.log("정말 그 자리가 확실해요? 다시 한번 봐 봐요~");
  }

  viewOutput(input) {
    return view.execute(input);
  }
  getPositionState(input) {
    return model.playData[input[0]][input[1]];
  }

  isCorrectPosition() {}
  checkSameStone() {}
  checkDifferentStone() {}
  isEmptyPosition() {}
}

module.exports = Controller;
