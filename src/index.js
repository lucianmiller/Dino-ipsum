import $ from 'jquery';
import 'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './game.js';

function createButtons(letterArray) {
  letterArray.forEach((letter) => {
    const button = `<button id=${letter} value=${letter}>${letter}</button>`;
    $("#buttons").append(button);
  });
}
//when using game object prototypes, give attached listeners game object parameter
function attachListeners(gameObject) {
  $('ul#buttons').on('click', 'button', function(){
    console.log(gameObject);
    this.disabled = true;
  })
}

$(document).ready(function() {
  // Making an array of lowercase Ascii codes for every letter in the alphabet
  const alphaCharNumbers = Array.from(Array(26)).map((a, i) => i+65);
  // Creating an alphabet array from Ascii codes for lowercase letters
  const alphabet = alphaCharNumbers.map((charNum) => String.fromCharCode(charNum));
  const newGame = new Game('Player1', 'apple')
  attachListeners(newGame);
  createButtons(alphabet);
  $("form#game-info").submit(function(event) {
    event.preventDefault();
    const userName = $("#name").val;
    newGame.player = userName;
  })
})