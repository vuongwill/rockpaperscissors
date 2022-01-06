document.querySelector('#rock').addEventListener('click', rock)
document.querySelector('#paper').addEventListener('click', paper)
document.querySelector('#scissors').addEventListener('click', scissors)

document.querySelector('#weapon').addEventListener('click', game)

document.querySelector('#rules').addEventListener('click',toggle)

document.querySelector('#reset').addEventListener('click',refresh)

function refresh() {
    location.reload()
}

function toggle() {
    document.querySelector('#rulesList').classList.toggle('hidden')
}

let playerSelection
let computerSelection

function rock() {
    playerSelection = 'rock'
}
function paper() {
    playerSelection = 'paper'
}
function scissors() {
    playerSelection = 'scissors'
}

function game() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;

    if (computerSelection === 1) {
        computerSelection = 'rock'
    } else if (computerSelection === 2) {
        computerSelection = 'paper'
    } else {
        computerSelection = 'scissors'
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.querySelector('#result').innerText = 'You win!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.querySelector('#result').innerText = 'You win!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        document.querySelector('#result').innerText = 'You win!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        document.querySelector('#result').innerText = 'You lose!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        document.querySelector('#result').innerText = 'You lose!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        document.querySelector('#result').innerText = 'You lose!'
    } else {
        document.querySelector('#result').innerText = "It's a tie."
    }

    document.querySelector('#pcPlay').innerText = `Computer picked ${computerSelection}.`
    
    if (document.querySelector('#result').innerText === 'You win!') {
        document.querySelector('#userScore').innerText++
    } else if (document.querySelector('#result').innerText === 'You lose!') {
        document.querySelector('#pcScore').innerText++
    }
}