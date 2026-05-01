let playerScore = 0;
let computerScore = 0;
let round = 1;

const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click",buttonClick);
const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click",buttonClick);
const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click",buttonClick);
const scoreboardHeader = document.querySelector("#scoreboardHeader");
scoreboardHeader.innerText = `Round: ${round}\nPlayer | Computer`;
const scoreboard = document.querySelector("#scoreboard");
scoreboard.innerText = `${playerScore} - ${computerScore}`;



function updateScoreboard() {
    scoreboardHeader.innerText = `Round: ${round}\nPlayer | Computer`;
    scoreboard.innerText = `${playerScore} - ${computerScore}`;
    
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    playGame();
    exitGame();
}

function playGame() {
    while(playerScore < 5 && computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }

}

//initialize game:
// startGame();


//display score
function showScore() {
    //UI UPDATE add div so this displays in browser vs console
    console.log("Player | Computer");
    console.log("   " + playerScore + "   -    " + computerScore);
}


function promptUser() {
    /*UI UPDATE add div so this displays in browser vs console
    Need to change input method from prompt() to button click/event listener

    */
    let promptText = "Select a number from 1 to 3:\n1 for Rock\n2 for Paper\n3 for Scissors"
    return prompt(promptText);
}

function buttonClick(event) {
    playRound(event.target.innerText,getComputerChoice());
}

//Assignment assumes a correct choice will be entered; no input validation yet.
function getHumanChoice() {
    let humanChoice = parseInt(promptUser());
    return convertChoice(humanChoice);
}

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



function playRound(humanSelection, computerSelection) {

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
    updateScoreboard();
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