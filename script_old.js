function computerPlay() {
    let computerPick = Math.floor(Math.random() * 3) + 1;
    if (computerPick === 1) {
        return "rock";
    } else if (computerPick === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
let computerSelection = computerPlay();
console.log(computerPlay())
function UserPlay() {
    let playerSelection = prompt("Choose your weapon: rock, paper or scissors");
    playerSelection.toLowerCase = playerSelection;
    return playerSelection;
}
let playerSelection = UserPlay();
console.log(UserPlay())
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    return "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer picked paper! You lose!";
    }

}

console.log(playRound())