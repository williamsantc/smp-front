function TodoStore() {
  todos = [];

  saveToLocalStorage = function () {
    localStorage.setItem("todoStore", JSON.stringify(todos));
  };

  this.add = function (item) {
    if (!item) {
      return;
    }
    todos.push(item);
    saveToLocalStorage();
    return todos;
  };

  this.removeLast = function () {
    todos.pop();
    saveToLocalStorage();
    return todos;
  };

  this.replace = function (newTodoList) {
    if (!newTodoList) {
      return;
    }
    todos = newTodoList;
    return todos;
  };

  this.getState = function () {
    return todos;
  };
}

TodoStore.prototype.requestFromLocalStorage = function () {
  var localStorageList = localStorage.getItem("todoStore");
  if (!localStorageList) {
    return;
  }
  return this.replace(JSON.parse(localStorageList));
}

var store = new TodoStore();