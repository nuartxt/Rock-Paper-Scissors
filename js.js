let humanScore = 0;
let computerScore = 0;

function getComputerChose() {
    let array = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * array.length);
    console.log("computer:" + array[index]);
    return array[index];
}

function getHumanChoice() {
    let human_chose = prompt("Add num");
    console.log("human:" + human_chose);
    return human_chose;
}

let winner = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

let computer = getComputerChose();
let human = getHumanChoice();

// function playRound(answer_1, answer_2) {
if (human === computer) {
    console.log("draw");
} else if (winner[human] === computer) {
    console.log("human win");
} else {
    console.log("computer win");
}
// }

