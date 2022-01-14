export default class Game {
  constructor(playerName, gameWord) {
    this.player = playerName;
    this.gameWord = gameWord;
    this.gameWordArr = gameWord.split('');
    this.missedLetters = [];
    this.blankWord = [];
  }

  createBlankArray() {
    this.blankWord = new Array(this.gameWord.length).fill('__');
  }

  playerGuess(guessLetter) {
    if (this.gameWord.includes(guessLetter)) {
      let blankArr = this.blankWord;
      this.gameWordArr.forEach(function(char, index){
        if (char === guessLetter) {
          blankArr.splice(index, 1, guessLetter);
        }
      });
      return true;
    } else {
      this.missedLetters.push(guessLetter);
      return false;
    }
  }

  scoreChecker() {
    if (this.missedLetters.length >= 5) {
      return false;
    }
    if (this.blankWord.join('').toLowerCase() === this.gameWord.toLowerCase()) {
      return true;
    }
  }
}