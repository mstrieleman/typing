document.addEventListener('keypress', event => {
  letterCheck(event.key);
});

function randomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}
function updateLetter(letter, element) {
  element.textContent = letter;
}

function updateScore(score, element) {
  element.textContent = score;
}

function initContent() {
  document.body.onload = initContent;
  document.querySelector('.entire-word').textContent = letters.join('');
  document.querySelector('.letter').textContent = letters[0];
}

function letterCheck(letter) {
  if (position < letters.length - 1) {
    if (letter === letters[position]) {
      score = score + 1;
      position = position + 1;
      updateLetter(letters[position], document.querySelector('.letter'));
      updateScore(score, document.querySelector('.score'));
    }
    else {
      alert('WRONG LETTER BRUH');
    }
  }
  else {
    alert('YOU DID IT BRUH');
    location.reload();
  }
}

var position = 0;
var words = ['Boustrophedon', 'Bowyang', 'Fartlek', 'Rapscallion', 'Vomitory'];
var letters = randomWord(words).split('');
var score = 0;
initContent();
