export default class Game {
  constructor(playerName, gameWord) {
    this.player = playerName;
    this.gameWord = gameWord;
    this.gameWordArr = gameWord.split('');
    this.missedLetters = [];
    this.blankWord = new Array(this.gameWord.length).fill('__');
  }

  playerGuess(guessLetter) {
    if (this.gameWord.includes(guessLetter)) {
      this.gameWordArr.forEach(function(char, index){
        this.blankWord.splice(index, 1, guessLetter);
      })
      return true;
    } else {
      this.missedLetters.push(guessLetter);
      return false;
    }
  }
}