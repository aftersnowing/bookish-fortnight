const Model = require("./Model");
const model = new Model();

class Controller {
  constructor() {}
  execute(input) {
    model.execute(input);
  }
}

module.exports = Controller;
