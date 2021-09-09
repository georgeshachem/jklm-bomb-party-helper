var dict_array;
const url = chrome.runtime.getURL('words.txt');
fetch(url)
    .then((response) => response.text())
    .then((file_text) => dict_array = file_text.split("\r\n"));

var button = document.createElement("button");
button.innerHTML = "Find!";
button.className = "styled joinRound";
button.onclick = function () {
  var syllable = document.getElementsByClassName("syllable")[0].innerHTML;
  var found_array = dict_array.filter(element => element.includes(syllable.toUpperCase()));
  var found = found_array[Math.floor(Math.random()*found_array.length)];
  div.innerHTML = found;
};

var div = document.createElement("div");
div.id = "possible_word";
div.innerHTML = "Possible Word";

var bottom_bar = document.getElementsByClassName("bottom")[0];
bottom_bar.appendChild(button);
bottom_bar.appendChild(div);