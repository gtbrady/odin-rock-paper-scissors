let playerScore;
let computerScore;
let round;

/* 
Start Game
Initialize scores for computer and human player
    FUNC: startGame()
        initalize playerScore and computerScore (both global variables) to 0
        initalize round to 1
        call startGameMessage()
*/
function startGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    startGameMessage();

    //TODO: remove these, just for debugging purposes.
    console.log("Player score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log("Round: " + round)
}
/*
Print message stating game is beginning
    startGameMessage()
*/
function startGameMessage() {
    console.log("Welcome!");
    console.log("You will be playing Rock Paper Scissors with the computer.");
    console.log("You will play from the command line. Type 1 for Rock, 2 for Paper, and 3 for Scissors.");
    console.log("It's a best of 5, and the game starts now! Good luck!");
    console.log("~~~~~~~~~~~");
    console.log("STARTING GAME");
}






//initialize game:
startGame();


/*Start round startRound()
    Print message stating round and current score, then prompt user for their choice
    PRINT: "Round: <round>. The score is: "Human": userScore() - Computer: computerScore()"
*/
function startRound() {

}

function showScore() {
    "Round:" + round;
    "The score is " + playerScore + " - " + computerScore;
}

/*


Prompt for input
    FUNC: choicePrompt()
        Prompts:
        "Select a number from 1 to 3:"
            "1: Rock"
            "2: Paper"
            "3: Scissors"

Get the user choice
    prompt() to receive input
    Validate user input
        FUNC: validateChoice()
                IF: user inputs valid choice (number 1 to 3), TRUE - continue with game
                    - getComputerChoice()
                ELSE: user inputs invalid choice, FALSE - Reprompt for choice

Randomize computer choice for each round
    FUNC: getComputerChoice()
    - Math.Random()
    - Random number from 1 to 3
    - 1 = Rock, 2 = Paper, 3 = Scissors

Evaluate round evaluateResults()
    Check if tie.
        Increment Round #
        Start new round startRound()
    If not tie
        update score for winner
            check if score goal reached
                if score for winner > 3
                    gameOver()
                        print results
                        prompt if user wants to play again 
                            playAgain() - print "Do you want to play again? Type Y for yes, N to exit."
                            Y = startGame()
                            N = exitGame() - print message stating "Thanks for playing!"
                            anything else - reprompt playAgain
                ELSE 
                    increment round#
                    start new round startRound()
        


*/