const RPS = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

//Select rock paper or scissor by way of an event listener
document.getElementById("rock").addEventListener("click", function () {
    let ran = getRandomInt(0, 3);
    console.log(ran);
    let player = "rock";
    let computer = RPS[ran];
    checkWinner(player, computer);
});
document.getElementById("paper").addEventListener("click", function () {
    let ran = getRandomInt(0, 3);
    console.log(ran);
    let player = "paper";
    let computer = RPS[ran];
    checkWinner(player, computer);
});
document.getElementById("scissors").addEventListener("click", function () {
    let ran = getRandomInt(0, 3);
    console.log(ran);
    let player = "scissors";
    let computer = RPS[ran];
    checkWinner(player, computer);
});
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        tieGame(playerChoice);
    } else if (playerChoice === RPS[0] && computerChoice === RPS[2]) {
        youWin(playerChoice, computerChoice);
    } else if (playerChoice === RPS[0] && computerChoice === RPS[1]) {
        youLose(playerChoice, computerChoice);
    } else if (playerChoice === RPS[1] && computerChoice === RPS[0]) {
        youWin(playerChoice, computerChoice);
    } else if (playerChoice === RPS[1] && computerChoice === RPS[2]) {
        youLose(playerChoice, computerChoice);
    } else if (playerChoice === RPS[2] && computerChoice === RPS[0]) {
        youLose(playerChoice, computerChoice);
    } else if (playerChoice === RPS[2] && computerChoice === RPS[1]) {
        youWin(playerChoice, computerChoice);
    } else {
        alert("You missed this one!");
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


function youLose(player, computer) {
    alert(`You chose ${player} and computer chose ${computer}. ${computer} beats ${player}. You lose.`);
    computerScore += 1;
    score();
}
function tieGame(choice) {
    alert(`Tie game, you both chose ${choice}.`);
}
function youWin(player, computer) {
    alert(`You chose ${player} and computer chose ${computer}. ${player} beats ${computer}. You win.`);
    userScore += 1;
    score();
}
function score() {
    document.getElementById("playerscore").innerText = userScore;
    document.getElementById("computerscore").innerText = computerScore;
}

//Randomly draw a number 1-2-3
//Check it against my choice
//Determine win-lose-tie//
//Play again?