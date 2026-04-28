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
    /*UI UPDATE:
    5 rounds
    - need to update logic from hard coding 5 rounds
    - need to check for score condition - game ends when player or computer score
    reaches 5.
    - Then game is over, player can start a new game or exit
    
    */
    while(playerScore < 5 && computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }


    exitGame();
}
/*
Print message stating game is beginning
    startGameMessage()
*/
function startGameMessage() {
    //UI UPDATE add div so this displays in browser vs console
    console.log("Welcome!");
    console.log("You will be playing Rock Paper Scissors with the computer.");
    console.log("You will play from the command line. Type 1 for Rock, 2 for Paper, and 3 for Scissors.");
    console.log("You will play 5 rounds in total, and the game starts now! Good luck!");
    console.log("~~~~~~~~~~~");
    console.log("STARTING GAME");
}

//initialize game:
startGame();

/*Start round playRound()
    Print message stating round and current score, then prompt user for their choice
    PRINT: "Round: <round>. The score is: "Human": userScore() - Computer: computerScore()"
*/
function startRound() {
    //UI UPDATE add div so this displays in browser vs console
    console.log("Round: " + round);
}

//display score
function showScore() {
    //UI UPDATE add div so this displays in browser vs console
    console.log("Player | Computer");
    console.log("   " + playerScore + "   -    " + computerScore);
}

/*
Prompt for input
    FUNC: choicePrompt()
        Prompts:
        "Select a number from 1 to 3:"
            "1: Rock"
            "2: Paper"
            "3: Scissors"
*/

function promptUser() {
    /*UI UPDATE add div so this displays in browser vs console
    Need to change input method from prompt() to button click/event listener

    */
    let promptText = "Select a number from 1 to 3:\n1 for Rock\n2 for Paper\n3 for Scissors"
    return prompt(promptText);
}

//Assignment assumes a correct choice will be entered; no input validation yet.
function getHumanChoice() {
    let humanChoice = parseInt(promptUser());
    return convertChoice(humanChoice);
}


/*
Randomize computer choice for each round
    FUNC: getComputerChoice()
    - Math.Random()
    - Random number from 1 to 3
    - 1 = Rock, 2 = Paper, 3 = Scissors
*/
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return convertChoice(computerChoice);
}

//helper function to convert number to string
function convertChoice(integer) {
    if(integer === 1) {
        return "Rock";
    }
    if(integer === 2) {
        return "Paper";
    }
    if(integer === 3) {
        return "Scissors";
    }
}

function printSelection(humanSelection, computerSelection) {
    //UI UPDATE add div so this displays in browser vs console
    console.log("You chose " + humanSelection + ", the computer chose " + computerSelection + "...")
}

/*
playRound()
    Check if tie.
        Increment Round
    If not tie
        check player win conditions, then check computer win conditions to print out correct result
        update score for winner
        increment round
    Limiting scope to 5 rounds

Game Logic
Choices are the same = tie; no change to score
Player chooses rock, computer chooses scissors = Player wins, increment score
Player chooses rock, computer chooses paper = Player loses, increment computer score
Player chooses scissors, computer chooses paper = Player wins, increment player score
Player chooses scissors, computer chooses rock = player loses, increment computer
Player chooses paper, computer chooses rock = player wins, increment player
Player chooses paper, computer chooses scissors, player loses, increment computer

*/

function playRound(humanSelection, computerSelection) {
    startRound();
    printSelection(humanSelection,computerSelection);

    //tie condition
    if(humanSelection === computerSelection) {
        console.log("TIE!")
    }

    //human winning conditions
    if(humanSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Rock beats Scissors! You win this round");
        playerScore++;
    }
    if(humanSelection === "Paper" && computerSelection === "Rock") {
        console.log("Paper beats Rock! You win this round");
        playerScore++;
    }
    if(humanSelection === "Scissors" && computerSelection === "Paper") {
    console.log("Scissors beats Paper! You win this round");
    playerScore++;
    }

    //computer winning conditions
    if(humanSelection === "Rock" && computerSelection === "Paper") {
        console.log("Rock loses to Paper! You lose this round");
        computerScore++;
    }
    if(humanSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Paper loses to Scissors! You lose this round");
        computerScore++;
    }
    if(humanSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Scissors loses to Rock! You lose this round");
        computerScore++;
    }
    round++;
    showScore();
}

/*UI UPDATE:
Need to rework this probably into 2 separate functions
need to check scores at end of round to see if victory condition met
if it has, then evaluate winner

*/
function evaluateWinner() {
    if(playerScore > computerScore) {
        console.log("You win! Congratulations!");
    } else if(computerScore > playerScore){
        console.log("The computer wins... Better luck next time.")
    } else {
        console.log("The game ended in a tie!")
    }
}

function exitGame() {
    console.log("Final Result:");
    showScore();
    evaluateWinner();
}