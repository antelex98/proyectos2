const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
} );


function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
};

function playRound(playerSelector, computerSelector) {
    if(playerSelector === computerSelector){
        return "It's tie!";
    } else if (
        (playerSelector === "rock" && computerSelector === "scissors") ||
        (playerSelector === "paper" && computerSelector === "rock") ||
        (playerSelector === "scissors" && computerSelector === "paper")
    ){
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win! " + playerSelector + " beats " + computerSelector;
    } else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelector + " beats " + playerSelector;
    }
};