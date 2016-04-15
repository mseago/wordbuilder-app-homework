var button = document.querySelector('#button');
var input = document.querySelector('#letter_box');
var ul = document.querySelector('#letters');

function createLI(letterEntered) {
  var listItem = document.createElement('li');
  listItem.textContent = letterEntered;
  ul.appendChild(listItem);
}

var callback = function(evt) {
  createLI(input.value);
  input.value = "";
}

button.addEventListener('click', callback);
