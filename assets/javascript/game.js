
//** Declared Variables **/
var compGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessLeft = 9;
var guessesMade = [];

var compGuessIndex = 0;

//** Function to have the browser generate a letter for the game **/
function init(){

    compGuessIndex = Math.floor(Math.random() * 26);
    console.log(compGuess[compGuessIndex]);
    guessLeft = 9;
    guessesMade = [];
}

//** Function to begin guessing letters **/
document.onkeyup = function(event){

/**code to log what key was hit**/
    var key = event.key;
    console.log(key);

/**Code to convert to lower case**/
    key = key.toLowerCase();

/**Code to check for valid keyed entry**/
    var isValid = false;
    for (i = 0; i < compGuess.length; i++){
        if (key === compGuess[i]){
            isValid = true;
        }
        
    }

    if (!isValid){
        console.log("invalid");
        return;
    }

    for (i = 0; i < guessesMade.length; i++){
        if (key === guessesMade[i]){
            console.log("Already guessed");
            return;
        }
    }

//**Code to check if entry matched computers**//
    if (key === compGuess[compGuessIndex]){
        
        win++;
        console.log("Wins " + win + ", Losses " + loss);
        init();

    }
    else {
        console.log("miss");
        guessLeft--;
        console.log("guessLeft " + guessLeft);
        guessesMade.push(key);
        console.log("Values guessed " + guessesMade);
        if (guessLeft === 0){
            loss++;
            console.log("Wins " + win + ", Losses " + loss);
            init();
        }
    }
}