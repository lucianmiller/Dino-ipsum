export default class Game {
  constructor(playerName, gameWord) {
    this.player = playerName;
    this.gameWord = gameWord;
    this.missedLetters = [];
    this.blankWord = new Array(this.gameWord.length).fill('__');
  }

  playerGuess(letter) {
    if (this.gameWord.includes(letter)) {
      console.log(this.gameWord.indexOf(letter));
      return true;
    } else {
      this.missedLetters.push(letter);
      return false;
    }
  }
}