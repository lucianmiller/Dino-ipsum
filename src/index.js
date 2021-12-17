import $ from 'jquery';
import 'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './game.js';

$(document).ready(function() {
  $("form#game-info").submit(function(event) {
    event.preventDefault();
    const newGame = new Game(userName);
    const userName = $("#name").val;
  })
})