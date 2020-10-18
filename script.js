//Selectors & Event Listeners
const results = document.querySelector('.results');
const selections = document.querySelector('.selections');

const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let computerSelection = computerPlay();
        let playerSelection = this.value;
        playRound(playerSelection, computerSelection);
    });
});

//Functions    


//lookup table after computerPlay's random number assignment
const lookup = {
    1: "ROCK",
    2: "PAPER",
    3: "SCISSORS"
};

//computerPlay after picking a random number and using lookup object
function computerPlay() {
    let computerPickNum = Math.ceil(Math.random() * 3);
    return lookup[computerPickNum];
}

let playerScore = 0;
let computerScore = 0;
let tieCount = 0;
let gameCount = 0;

//function to play one round 
function playRound(playerSelection, computerSelection) {
    selections.textContent = `The Computer selected ${computerSelection}`;

    if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        results.textContent = "You win!";
        playerScore += 1;
        pScore.textContent = playerScore;
        return;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        results.textContent = "You Lose!";
        computerScore += 1;
        cScore.textContent = computerScore;
        return;
    } else {
        results.textContent = "Tie game!";
        return;
    }
}

// full game = 5 rounds of play.Keeps score and displays result.
// function game() {

//     for (let i = 1; gameCount < 5; i++) {
//         let playerSelection = prompt("Let's play: Rock, Paper, or Scissors?").toUpperCase();

//         while (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") {
//             playerSelection = prompt("Let's play: Rock, Paper, or Scissors?").toUpperCase();
//         }

//         let playerSelection = prompt("Let's play: Rock, Paper, or Scissors?").toUpperCase();

//         const computerSelection = computerPlay();
//         const roundResult = playRound(playerSelection, computerSelection);

//         if (roundResult === "You win!") {
//             playerScore++;
//         } else if (roundResult === "You Lose!") {
//             computerScore++;
//         } else {
//             tieCount++;
//         }
//         console.log(`Round : ${roundResult} It was your ${playerSelection} vs. their ${computerSelection}.`);

//         gameCount++;
//         // }

//         let gameResult = (playerScore > computerScore)
//             ? "you are the final winner!!"
//             : (computerScore > playerScore)
//                 ? "you did not win this time.  Please try again."
//                 : "you tied.  Better luck next time.";

//         return `After 5 rounds, the final score was ${playerScore} to ${computerScore} and therefore ${gameResult}`;
//     }

