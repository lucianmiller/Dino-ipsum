import $ from 'jquery';
import 'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './game.js';

$(document).ready(function() {
  // Making an array of lowercase Ascii codes for every letter in the alphabet
  const alphaCharNumbers = Array.from(Array(26)).map((a, i) => i+65);
  // Creating an alphabet array from Ascii codes for lowercase letters
  const alphabet = alphaCharNumbers.map((charNum) => String.fromCharCode(charNum));
  function createButtons(letterArray) {
    letterArray.forEach((letter) => {
      const button = `<button id=${letter} value=${letter}>${letter}</button>`;
      $("#buttons").append(button);
    });
  }
  createButtons(alphabet);
  $("form#game-info").submit(function(event) {
    event.preventDefault();
    const newGame = new Game(userName);
    const userName = $("#name").val;
  })
})