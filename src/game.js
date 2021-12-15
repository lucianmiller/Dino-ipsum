export default class Game {
  constructor() {
    this.players = [];
    this.currentScore = 0;
    this.currentPlayerIndex = 0;
    this.maxPlayers = 2;
  }
  
  addPlayer(...playerObjects) {
    this.players.push(...playerObjects);
  }

  switchPlayers() {
    if (this.currentPlayerIndex + 1 != this.maxPlayers) {
      this.currentPlayerIndex += 1;
    } else if (this.currentPlayerIndex + 1 === this.maxPlayers) {
      this.currentPlayerIndex = 0;
    }
  }

  calculateScore (points) {
    if (points !== 1) {
      this.currentScore += points
    } else if (points === 1) {
      this.currentScore = 0;
      this.switchPlayers();
    }
  }
}