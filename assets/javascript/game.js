
//** Declared Variables **/
var compGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessLeft = 9;
var guessesMade = [];

var compGuessIndex = [0]

//** Function to start the game **/
function init(){

compGuessIndex = Math.floor(Math.random() * 26);
console.log(compGuessIndex);

}




document.onkeyup = function(){

}