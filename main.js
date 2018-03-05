/* eslint-disable no-unused-vars */
document.addEventListener("keypress", event => {
  letterCheck();
});

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function updateContent(value) {
  document.querySelector(".letter").textContent = value;
}

function updateScore(value) {
  document.querySelector(".score").textContent = value;
}

function displayLetter(i) {
  returnLetter = splitArray.slice(0)[i];
  return returnLetter;
}

function toString(arr) {
  arr.toString();
  return arr;
}

function initContent() {
  document.body.onload = initContent;
  document.querySelector(".entire-word").textContent = getRandom;
  document.querySelector(".letter").textContent = displayLetter(0, 0);
}

function currentLetter(i) {
  var letter = toString(displayLetter(i));
  return letter;
}

function letterCheck() {
  const keyName = event.key;
  eventLetter = currentLetter(position);
  if (run < splitArrayLength) {
    if (event.key === eventLetter) {
      run = run + 1;
      score = score + 1;
      position = position + 1;
      updateContent(toString(displayLetter(position)));
      updateScore(score);
    } else {
      alert("WRONG LETTER BRUH");
    }
  } else {
    alert("YOU DID IT BRUH");
    location.reload();
  }
}

var position = 0;
var words = ["Boustrophedon", "Bowyang", "Fartlek", "Rapscallion", "Vomitory"];
var getRandom = words.random();
var splitArray = getRandom.split("");
var splitArrayLength = splitArray.length;
var run = 1;
var score = 0;

initContent();
