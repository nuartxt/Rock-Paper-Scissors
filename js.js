let humanScore = 0;
let computerScore = 0;

let winner = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}


function getComputerChose() {
    let array = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * array.length);
    console.log("computer:" + array[index]);
    return array[index];
}

function getHumanChoice() {
    let human_chose = prompt("Enter scissors, rock or paper");
    console.log("human:" + human_chose);
    return human_chose;
}

//add comment for logic :)
function playRound(human, computer) {
    if (human === computer) {
        return "draw";
    } else if (winner[human] === computer) {
        humanScore++
        return "human win";
    } else {
        computerScore++;
        return "computer win";
    }
}

//loops for game loops
for (let i = 0; i < 5; i++) {
    let computer = getComputerChose();
    let human = getHumanChoice();
    console.log(playRound(human, computer))
}

//our result
// console.log(playRound(human, computer))
console.log(`score - Human:${humanScore}, Computer:${computerScore}`);