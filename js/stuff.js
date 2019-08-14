function Todo(foo, bar, baz) {
  this.foo = foo;
  this.bar = bar;
  this.baz = baz;
}

function addItem() {
  var list = store.add(new Todo("hi", "from", "here"));
  var listElem = document.getElementById("todoList");
  removeAllChildElems(listElem);
  renderList(list, listElem);
}

function removeItem() {
  var list = store.removeLast();
  var listElem = document.getElementById("todoList");
  removeAllChildElems(listElem);
  renderList(list, listElem);
}

function removeAllChildElems(elem) {
  var child = elem.lastElementChild;
  while (child) {
    elem.removeChild(child);
    child = elem.lastElementChild;
  }
}

function renderList(list, listElem) {
  list.forEach(function (element) {
    var li = document.createElement("li");
    li.innerText = element.foo + " " + element.bar + " " + element.baz;
    listElem.appendChild(li);
  });
}

function loadContent() {
  var list = store.requestFromLocalStorage();
  if (!list) {
    return
  }
  var listElem = document.getElementById("todoList");
  renderList(list, listElem);
}

function requestPokemons() {
  axios
    .get("https://pokeapi.co/api/v2/ability/1")
    .then(function (response) {
      var pokemons = response.data.pokemon;
      renderPokemons(pokemons);
    });
}

function renderPokemons(pokemons) {
  var pokemonListEl = document.getElementById("pokemonList");
  removeAllChildElems(pokemonListEl);
  pokemons.forEach(function (data) {
    var li = document.createElement("li");
    li.innerText = data.pokemon.name;
    pokemonListEl.appendChild(li);
  });
}