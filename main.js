/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

var words = [
  "Boustrophedon",
  "Bowyang",
  "Fartlek",
  "Rapscallion",
  "Vomitory"
];

var getRandom = words.random();
var splitArray = getRandom.split("");
var returnFirst = splitArray.slice(0)[0]

function print() {
  document.body.onload = print;
  document.querySelector(".entire-word").textContent = getRandom;
  document.querySelector(".first-letter").textContent = returnFirst;
}

print();
