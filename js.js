let humanScore = 0;
let computerScore = 0;

let winner = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}


function getHumanChoice(an) {
    let human_chose = an.toLowerCase();
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
        humanScore++;
        return `score - Human:${humanScore}, Computer:${computerScore}`;
    } else {
        computerScore++;
        return `score - Human:${humanScore}, Computer:${computerScore}`;
    }
}

//loops for game loops
function playRound(answer) {
    let computer = getComputerChose();
    let human = getHumanChoice(answer);
    console.log(playComprassion(human, computer))
    interectiveDisplayOlet(humanScore, computerScore)

    choseLogic(human, computer);
}



//our result
function result() {
    if (humanScore == 5) {
        console.log("Human win");
    } else if (computerScore == 5) {
        console.log("Computer win");
    }
}





// Create element in the webpage
let body = document.querySelector("body");

/*Div-container*/
let div = document.createElement("div");
// div.classList.add("conteiner");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.gap = "50px";

/*Div - olet display*/
let displayOlet = document.createElement("div");
// displayOlet.classList.add("displayOlet");
displayOlet.textContent = "score - Human:0, Computer:0";
displayOlet.style.textAlign = "center";


let who_win = document.createElement("div");
who_win.textContent = "who win";
who_win.style.textAlign = "center";
who_win.style.margin = "25px 0px 25px 0px";


let whoChoseWhat = document.createElement("div");
whoChoseWhat.style.textAlign = "center";
whoChoseWhat.style.margin = "25px 0px 25px 0px";
whoChoseWhat.textContent = `human - ... , computer - ...`;




body.appendChild(displayOlet);
body.appendChild(whoChoseWhat);
body.appendChild(who_win);
body.appendChild(div);

function choseLogic(humanChose, compChose) {
    whoChoseWhat.textContent = `human - ${humanChose} , computer - ${compChose}`;
}



/*olet display logic*/
function interectiveDisplayOlet(human, computer) {
    if (human <= 5 && computer <= 5) {
        displayOlet.textContent = `score - Human:${human}, Computer:${computer}`;
    } else {
        who_win.textContent = (human > computer) ? "Game over - human win" : "Game over - computer win";
    }
    return displayOlet;
}



let rock_btn = document.createElement("button");
let paper_btn = document.createElement("button");
let scissors_btn = document.createElement("button");

rock_btn.textContent = "rock";
paper_btn.textContent = "paper";
scissors_btn.textContent = "scissors";


//Give btns class and text
let arr = [rock_btn, paper_btn, scissors_btn];

function inutBtn(...array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.add("btn");
        array[i].style.width = "100px";
        array[i].style.height = "50px";
        div.appendChild(array[i]);

        array[i].addEventListener("click", () => {
            let answer = array[i].textContent;
            playRound(answer);
            result();
        })
    }
}
inutBtn(...arr);