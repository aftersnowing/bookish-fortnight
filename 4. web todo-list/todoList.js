class UpdateAndRemoveTodo {
  constructor() {
    this.inputBox = document.querySelector("input");
    this.todoList = document.querySelector(".todo");
  }

  AddTextEvent() {
    this.inputBox.addEventListener("keydown", () => {
      if (event.keyCode === 13) {
        let todoItem = this.makeTextNode(this.inputBox.value);
        this.insertDeleteButton(todoItem);
        this.addDeleteButtonEvent(todoItem);
        this.insertNode(todoItem);
      }
    });
  }
  makeTextNode(input) {
    let todoItem = document.createElement("li");
    let todoNode = document.createTextNode(input);
    todoItem.appendChild(todoNode);
    todoItem.setAttribute("draggable", "true");
    todoItem.classList.add("todo-item");
    return todoItem;
  }
  insertDeleteButton(node) {
    let template = `<button class="del-button">X</button>`;
    node.insertAdjacentHTML("beforeend", template);
  }
  addDeleteButtonEvent(node) {
    node.addEventListener("mouseover", () => {
      node.children[0].classList.add("visible");
    });
    node.addEventListener("mouseout", () => {
      node.children[0].classList.remove("visible");
    });
    node.children[0].addEventListener("click", () => {
      node.parentNode.removeChild(node);
    });
  }
  insertNode(node) {
    this.todoList.appendChild(node);
    this.inputBox.value = "";
  }
}

const addTodo = new UpdateAndRemoveTodo();
addTodo.AddTextEvent();
