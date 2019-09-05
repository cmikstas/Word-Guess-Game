
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

    /** code to check if a valid key was entered, isValid is set to false because the For loop will overwrite **/
    var isValid = false;
    for (i = 0; i < compGuess.length; i++){
        if (key === compGuess[i]){
            isValid = true;
        }
        
    }

    /**  if isValid = false the log that an invalid option was made **/
    if (!isValid){
        if (isDebug) console.log("invalid");
        document.getElementById("gameHeader").innerHTML = "<b>You're supposed to guess a letter. Did you even read the instructions, bro??</b>";
        return;
    }

    for (i = 0; i < guessesMade.length; i++){
        if (key === guessesMade[i]){
            document.getElementById("gameHeader").innerHTML = "<b>You already guessed that. Pon atencion wey!</b>";
            if (isDebug) console.log("Already guessed");
            return;
        }
    }

    /**Code to check if entry matched computers**/
    if (key === compGuess[compGuessIndex]){
        
        win++;
        document.getElementById("wins").innerHTML = "Wins: " + win;
        document.getElementById("gameHeader").innerHTML = "<b>Ganaste wey! Empezamos de nuevo.</b>";
        if (isDebug) console.log("Wins " + win + ", Losses " + loss);
        init();

    }

    else {

        if (isDebug) console.log("miss");
        guessLeft--;
        if (isDebug) console.log("guessLeft " + guessLeft);
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessLeft;
        guessesMade.push(key);
        document.getElementById("guessesMade").innerHTML = "Your guesses so far: " + guessesMade;
        document.getElementById("gameHeader").innerHTML = "<b>WRONG!!</b>";
        if (isDebug) console.log("Values guessed " + guessesMade);
        if (guessLeft === 0){
            loss++;
            document.getElementById("losses").innerHTML = "Losses: " + loss;
            document.getElementById("guessesLeft").innerHTML = "Guesses left: " + 9;
            document.getElementById("guessesMade").innerHTML = "Your guesses so far: ";
            document.getElementById("gameHeader").innerHTML = "<b>Perdiste wey. Intentamos de nuevo.</b>";
            if (isDebug) console.log("Wins " + win + ", Losses " + loss);
            init();

        }

    }
    


}