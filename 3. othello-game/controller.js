const Model = require("./Model");
const View = require("./View");
const model = new Model();
const view = new View();

class Controller {
  constructor() {
    this.directions = ["w", "nw", "n", "ne", "e", "se", "s", "sw"];
  }

  execute(input) {
    if (this.getPositionState(input) === 0) {
      let position = this.CheckAllDirection();
      model.putStone(input, position);
      return this.viewOutput(model.playData);
    }
    console.log("정말 그 자리가 확실해요? 다시 한번 봐 봐요~");
  }

  viewOutput(input) {
    return view.execute(input);
  }

  getPositionState(input) {
    this.input = input;
    return model.playData[input[0]][input[1]];
  }

  CheckAllDirection() {
    let directionsArr = [];
    this.getAllElements(directionsArr);
    let result = this.getPositionToChange(directionsArr);
    return result;
  }

  getAllElements(arr) {
    let k = 0;
    while (k < this.directions.length) {
      let container = [];
      let i = this.input[0];
      let j = this.input[1];
      while (i >= 0 && j >= 0 && i < 8 && j < 8) {
        container.push({ value: model.playData[i][j], position: [i, j] });
        if (this.directions[k] === "w") j--;
        if (this.directions[k] === "nw") i++, j--;
        if (this.directions[k] === "n") i++;
        if (this.directions[k] === "ne") i++, j++;
        if (this.directions[k] === "e") j++;
        if (this.directions[k] === "se") i--, j++;
        if (this.directions[k] === "s") i--;
        if (this.directions[k] === "sw") i--, j--;
      }
      arr.push(container.slice(1));
      k++;
    }
  }

  getPositionToChange(arr) {
    let result = arr.map(val => {
      let tempArr = [];
      val.some(el => {
        if (el.value === 0) return true;
        if (el.value === model.player) tempArr.push("mark");
        if (el.value !== model.player) tempArr.push(el.position);
      });
      return tempArr;
    });
    return result;
  }

  isCorrectPosition() {}
  checkSameStone() {}
  checkDifferentStone() {}
  isEmptyPosition() {}
}

module.exports = Controller;
