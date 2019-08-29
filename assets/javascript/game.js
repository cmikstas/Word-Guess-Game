
//** Declared Variables **/

var isDebug = true;

var compGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessLeft = 9;
var guessesMade = [];

var compGuessIndex = 0;

/** Function to have the browser generate a letter to begin the game **/
function init(){

    compGuessIndex = Math.floor(Math.random() * 26);
    if (isDebug) console.log(compGuess[compGuessIndex]);
    guessLeft = 9;
    guessesMade = [];
}

/** main function to actually play the game **/
document.onkeyup = function(event){

    /** code to log what key the user hit **/
    var key = event.key;
    if (isDebug) console.log(key);

    /** code to convert to entered keys lower case **/
    key = key.toLowerCase();

    /** code to check for if a valid key was entered, isValid is set to false because the For loop will overwrite **/
    var isValid = false;
    for (i = 0; i < compGuess.length; i++){
        if (key === compGuess[i]){
            isValid = true;
        }
        
    }

    /**  if isValid = false the log that an invalid option was made **/
    if (!isValid){
        if (isDebug) console.log("invalid");
        return;
    }

    for (i = 0; i < guessesMade.length; i++){
        if (key === guessesMade[i]){
            if (isDebug) console.log("Already guessed");
            return;
        }
    }

    /**Code to check if entry matched computers**/
    if (key === compGuess[compGuessIndex]){
        
        win++;
        if (isDebug) console.log("Wins " + win + ", Losses " + loss);
        init();

    }

    else {

        if (isDebug) console.log("miss");
        guessLeft--;
        if (isDebug) console.log("guessLeft " + guessLeft);
        guessesMade.push(key);
        if (isDebug) console.log("Values guessed " + guessesMade);
        if (guessLeft === 0){
            loss++;
            if (isDebug) console.log("Wins " + win + ", Losses " + loss);
            init();

        }

    }

}