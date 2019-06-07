const Model = require("./Model");
const View = require("./View");
const model = new Model();
const view = new View();

class Controller {
  constructor() {
    this.directions = ["w", "nw", "n", "ne", "e", "se", "s", "sw"];
  }

  execute(input) {
    if (this.getPositionState(input) !== 0) {
      return console.log("이미 돌이 놓여져 있어요");
    }
    if (this.checkAllDirection()) {
      return console.log("그 자리는 게임 규칙상 돌을 둘 수 없어요");
    }
    model.putStone(input, this.position);
    return this.viewOutput(model.playData);
  }

  viewOutput(input) {
    return view.execute(input);
  }

  getPositionState(input) {
    this.input = input;
    return model.playData[input[0]][input[1]];
  }

  checkAllDirection() {
    let directionsArr = [];
    this.getAllElements(directionsArr);
    this.position = this.getPositionToChange(directionsArr);

    return this.isValidPosition(this.position);
  }

  getAllElements(arr) {
    let k = 0;
    while (k < this.directions.length) {
      // 놓여지는 돌을 중심으로 8방향에 대해 반복문
      let container = [];
      let i = this.input[0];
      let j = this.input[1];
      while (i >= 0 && j >= 0 && i < 8 && j < 8) {
        // 각 방향의 끝까지 탐색
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
    let tempArr = this.removeEmptyPosition(arr);
    return this.getValidPostion(tempArr);
  }

  removeEmptyPosition(arr) {
    return arr.map(val => {
      let tempArr = [];
      val.some(el => {
        // 빈자리가 있다면 바로 리턴
        if (el.value === 0) return true;
        // 현재 턴과 같은 돌은 'player'로 변환
        if (el.value === model.player) tempArr.push("player");
        // 현재 턴과 다른 돌은 좌표로 변환
        if (el.value !== model.player) tempArr.push(el.position);
      });
      return tempArr;
    });
  }

  getValidPostion(arr) {
    return arr.map(val => {
      let arr = [];
      // 'player'가 존재한다면 toggle on
      let toggle = 0;
      val.forEach(el => {
        // 'player'를 만날때까지 다른 돌의 좌표 push
        if (arr.indexOf("player") === -1) arr.push(el);
        if (el === "player") toggle = 1;
      });
      // 'player'가 존재한다면 arr반환, 없다면 빈 배열 반환
      return toggle === 1 ? arr.slice(0, -1) : [];
    });
  }

  isValidPosition(arr) {
    return !arr.some(val => {
      return val.length > 0;
    });
  }
}

module.exports = Controller;
