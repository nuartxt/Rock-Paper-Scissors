let humanScore = 0;
let computerScore = 0;

let winner = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

function getHumanChoice() {
    let human_chose = prompt("Enter scissors, rock or paper").toLowerCase();
    console.log("human:" + human_chose);
    return human_chose;
}

function getComputerChose() {
    let array = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * array.length);
    console.log("computer:" + array[index]);
    return array[index];
}

//code logic :)
function playComprassion(human, computer) {
    if (human === computer) {
        return `score - Human:${humanScore}, Computer:${computerScore}`;
    } else if (winner[human] === computer) {
        humanScore++
        return `score - Human:${humanScore}, Computer:${computerScore}`;
    } else {
        computerScore++;
        return `score - Human:${humanScore}, Computer:${computerScore}`;
    }
}

//loops for game loops
function playRound() {
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChose();
        let human = getHumanChoice();
        console.log(playComprassion(human, computer))
    }
}

// playRound();


//our result
function result() {
    if (humanScore > computerScore) {
        console.log("Human win");
    } else if (humanScore == computerScore) {
        console.log("draw");
    } else {
        console.log("Computer win");
    }
}
result();





// Create element in the webpage
let body = document.querySelector("body");

let div = document.createElement("div");
let rock_btn = document.createElement("button");
let paper_btn = document.createElement("button");
let scissors_btn = document.createElement("button");
rock_btn.textContent = "rock";
paper_btn.textContent = "paper";
scissors_btn.textContent = "scissors";

body.appendChild(div);


let arr = [rock_btn, paper_btn, scissors_btn];
for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add("btn");
    div.appendChild(arr[i]);
}

