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
        game();
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

//first to 5 points win
function game() {
    if (playerScore == 5) {
        results.textContent = "First to 5, you've won the whole game!"
    } else if (computerScore == 5) {
        results.textContent = "Too bad.  The Computer won 5 rounds first."
    }

}