var enter = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
  if (input.value.length > 0) {
    return true;
  }
}

function createListElement() {
  var div = document.createElement("div");
  div.classList.add("flex-li");
  ul.appendChild(div);
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.classList.add("delButton");
  li.appendChild(document.createTextNode(input.value));
  div.appendChild(li);
  div.appendChild(button);
  button.appendChild(document.createTextNode("del"));
  input.value = "";
}

function addListAfterClick() {
  if (inputLength()) {
    createListElement();
  }
}

function addListAfterEnter(event) {
  if (inputLength() && event.keyCode === 13) {
    createListElement();
  }
}

function taskDone(element) {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("done");
  }
}

function taskDel(element) {
  if (element.target.className === "delButton") {
    element.target.parentElement.remove();
  }
}

function taskClick(element) {
  taskDone(element);
  taskDel(element);
}

enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);
ul.addEventListener("click", taskClick);
