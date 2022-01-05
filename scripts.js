document.querySelector('#rock').addEventListener('click', rock)
document.querySelector('#paper').addEventListener('click', paper)
document.querySelector('#scissors').addEventListener('click', scissors)

document.querySelector('#rock').addEventListener('click', game)
document.querySelector('#paper').addEventListener('click', game)
document.querySelector('#scissors').addEventListener('click', game)

let playerSelection

function rock() {
    playerSelection = 'rock'
    // alert('You picked rock!')
}
function paper() {
    playerSelection = 'paper'
    // alert('You picked paper!')
}
function scissors() {
    playerSelection = 'scissors'
    // alert('You picked scissors!')
}

let computerSelection = Math.floor(Math.random() * 3) + 1;

if (computerSelection === 1) {
    computerSelection = 'rock'
} else if (computerSelection === 2) {
    computerSelection = 'paper'
} else {
    computerSelection = 'scissors'
}
// alert(`Computer picked ${computerSelection}`)

function game() {
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        // document.querySelector('#pcPlay').innerText = 'Computer picked paper.'
        document.querySelector('#result').innerText = 'You win!'
        // document.querySelector('#userScore').innerText += 1
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        // document.querySelector('#pcPlay').innerText = 'Computer picked rock.'
        document.querySelector('#result').innerText = 'You win!'
        // document.querySelector('#userScore').innerText += 1
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        // document.querySelector('#pcPlay').innerText = 'Computer picked scissors.'  
        document.querySelector('#result').innerText = 'You win!'  
        // document.querySelector('#userScore').innerText += 1
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        // document.querySelector('#pcPlay').innerText = 'Computer picked paper.'
        document.querySelector('#result').innerText = 'You lose!'
        // document.querySelector('#pcScore').innerText += 1
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        // document.querySelector('#pcPlay').innerText = 'Computer picked scissors.'
        document.querySelector('#result').innerText = 'You lose!'
        // document.querySelector('#pcScore').innerText += 1
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        // document.querySelector('#pcPlay').innerText = 'Computer picked rock.'
        document.querySelector('#result').innerText = 'You lose!'
        // document.querySelector('#pcScore').innerText += 1
    } else {
        document.querySelector('#pcPlay').innerText = `Computer picked ${computerSelection}`
        document.querySelector('#result').innerText = 'Tied.'
    }

    document.querySelector('#pcPlay').innerText = `Computer picked ${computerSelection}.`
    
    if (document.querySelector('#result').innerText === 'You win!') {
        document.querySelector('#userScore').innerText++
    } else if (document.querySelector('#result').innerText === 'You lose!') {
        document.querySelector('#pcScore').innerText++
    }
}

        


// function game() {
//     if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         document.querySelector('#result').innerText = 'You win!'
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         document.querySelector('#result').innerText = 'You win!'
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         document.querySelector('#result').innerText = 'You win!'    
//     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//         document.querySelector('#result').innerText = 'You lose!'
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//         document.querySelector('#result').innerText = 'You lose!'
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         document.querySelector('#result').innerText = 'You lose!'
//     } else {
//         document.querySelector('#result').innerText = 'Tied.'
//     } 
// }
