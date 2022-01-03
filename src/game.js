export default class Game {
  constructor(playerName, gameWord) {
    this.player = playerName;
    this.gameWord = gameWord
  }

  lettersInWord(letter) {
    if (this.gameWord.includes(letter)) {
      console.log(letter);
      console.log(this.gameWord.indexOf(letter));
    } else {
      // later store missed letters somewhere
      return false;
    }
  }

  playerGuess() 
}