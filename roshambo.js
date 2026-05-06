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

const results = document.querySelector("#results");

const startGameButton = document.querySelector("#startGame");
startGameButton.addEventListener("click",startGame);

toggleButtons(true);

function updateScoreboard() {
    scoreboardHeader.innerText = `Round: ${round}\nPlayer | Computer`;
    scoreboard.innerText = `${playerScore} - ${computerScore}`;
    
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    updateScoreboard();
    toggleButtons(false)

}

function toggleButtons(boolean) {
    paperButton.disabled = boolean;
    scissorsButton.disabled = boolean;
    rockButton.disabled = boolean;
    startGameButton.disabled = !boolean;
}

function buttonClick(event) {
    playRound(event.target.innerText,getComputerChoice());
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return convertChoice(computerChoice);
}

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
        results.innerText = "TIE!";
    }

    //human winning conditions
    if(humanSelection === "Rock" && computerSelection === "Scissors") {
        results.innerText = "Rock beats Scissors! You win this round"
        playerScore++;
    }
    if(humanSelection === "Paper" && computerSelection === "Rock") {
        results.innerText = "Paper beats Rock! You win this round"
        playerScore++;
    }
    if(humanSelection === "Scissors" && computerSelection === "Paper") {
        results.innerText = "Scissors beats Paper! You win this round"
        playerScore++;
    }

    //computer winning conditions
    if(humanSelection === "Rock" && computerSelection === "Paper") {
        results.innerText = "Rock loses to Paper! You lose this round"
        computerScore++;
    }
    if(humanSelection === "Paper" && computerSelection === "Scissors") {
        results.innerText = "Paper loses to Scissors! You lose this round"
        computerScore++;
    }
    if(humanSelection === "Scissors" && computerSelection === "Rock") {
        results.innerText = "Scissors loses to Rock! You lose this round"
        computerScore++;
    }
    round++;
    updateScoreboard();
    evaluateWinner();
}

function evaluateWinner() {
    let gameOver = false;
    if(playerScore === 5) {
        results.innerText = "You Won!"
        gameOver = true;
    }
    if(computerScore === 5) {
        results.innerText = "You Lost!"
        gameOver = true;
    }
    if(gameOver) {
        toggleButtons(true);
    }
}