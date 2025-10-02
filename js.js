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


//add comment for logic :)

function playRound(human, computer) {
    if (human === computer) {
        return "draw";
    } else if (winner[human] === computer) {
        return "human win";
    } else {
        return "computer win";
    }
}

console.log(playRound(human, computer))
