// let userScore = 0;
// let compScore = 0;


// const userChoices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");
// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");
// const winLabels = document.querySelectorAll(".score p:last-child");

// const options = ["rock", "paper", "scissors"];


// function computerChoice() {
//     return options[Math.floor(Math.random() * options.length)];
// }


// function startGame() {
//     userChoices.forEach(choice => {
//         choice.addEventListener("click", handleClick);
//     });
// }

// startGame();


// function handleClick(event) {
//     const userChoice = event.currentTarget.getAttribute("id"); // event.currentTarget refers to the element on which the event listener is attached
//     const compChoice = computerChoice();

//     console.log("Your choice:", userChoice);
//     console.log("Computer choice:", compChoice);

//     if (userChoice === compChoice) {
//         draw(userChoice);
//     } else {
//         const userWins = isUserWinner(userChoice, compChoice);
//         showWinner(userWins, userChoice, compChoice);
//     }

//     checkGameOver();
// }


// function draw(choice) {
//     console.log("Game was draw.");
//     msg.textContent = `Game is draw, you both chose ${choice}`;
//     msg.style.backgroundColor = "gray";
// }


// function isUserWinner(user, comp) {
//     return (
//         (user === "rock" && comp === "scissors") ||
//         (user === "paper" && comp === "rock") ||
//         (user === "scissors" && comp === "paper")
//     );
// }


// function showWinner(userWins, userChoice, compChoice) {
//     if (userWins) {
//         console.log("You Win");
//         userScore++;
//         userScorePara.textContent = userScore;
//         msg.textContent = `You Win! Computer chose ${compChoice}`;
//         msg.style.backgroundColor = "green";
//     } else {
//         console.log("You Lose");
//         compScore++;
//         compScorePara.textContent = compScore;
//         msg.textContent = `You Lose! Computer chose ${compChoice}`;
//         msg.style.backgroundColor = "red";
//     }
// }


// function checkGameOver() {
//     if (userScore === 10 || compScore === 10) {
//         userChoices.forEach(choice => {
//             choice.removeEventListener("click", handleClick);
//         });

//         if (userScore === 10) {
//             winLabels[0].textContent = "You Win!";
//             winLabels[0].style.color = "green";
//         } else {
//             winLabels[1].textContent = "Comp Wins!";
//             winLabels[1].style.color = "red";
//         }

//         msg.textContent = "Game Over! Click here to play again.";
//         msg.style.backgroundColor = "blue";
//         msg.style.cursor = "pointer";
//         msg.addEventListener("click", resetGame);
//     }
// }


// function resetGame() {
//     userScore = 0;
//     compScore = 0;

//     userScorePara.textContent = userScore;
//     compScorePara.textContent = compScore;

//     msg.textContent = "Play your move, whoever reaches 10 wins!";
//     msg.style.backgroundColor = "lightSeaGreen";
//     msg.style.cursor = "default";
//     msg.removeEventListener("click", resetGame);

//     winLabels[0].textContent = "You";
//     winLabels[0].style.color = "";
//     winLabels[1].textContent = "Comp";
//     winLabels[1].style.color = "";

//     startGame();
// }



/* -------------------------------------------------- Practice ------------------------------------------------- */

let userScore = 0;
let compScore = 0;


const userChoices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const winLabels = document.querySelectorAll(".score p:last-child");

const options = ["rock", "paper", "scissors"];

function computerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}


function start() {
    userChoices.forEach((choice) => {
        choice.addEventListener("click", handleClick);
    })
}

start();

function draw(userChoice) {
    msg.textContent = `Draw! you both choose ${userChoice}`;
    msg.style.backgroundColor = "gray";
}
function handleClick(event) {
    let userChoice = event.currentTarget.getAttribute("id"); // event.currentTarget refers to the element on which the event listener is attached
    let compChoice = computerChoice();
    
    console.log("Your choice:", userChoice);
    console.log("Comp choice:", compChoice);
    
    if (userChoice === compChoice) {
        draw(userChoice);
    } else {
        userWin = checkUserWin(userChoice, compChoice);
        checkWinner(userWin, userChoice, compChoice);
    }
    
    checkGameOver();
}

function checkUserWin(user, comp) {
    return (
        user === "rock" && comp === "scissors" ||
        user === "paper" && comp === "rock" ||
        user === "scissors" && comp === "paper"
    )
}

function checkWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        console.log("You win!");
        userScore++;
        userScorePara.textContent = userScore;
        msg.style.backgroundColor = "green";
        msg.textContent = `You win! computer was chooses ${compChoice}`;
    } else {
        console.log("You loose, Comp Wins!");
        compScore++;
        compScorePara.textContent = compScore;
        msg.style.backgroundColor = "red";
        msg.textContent = `You Loose! computer was chooses ${compChoice}`;
    }
}


function checkGameOver() {
    if (userScore === 10 || compScore === 10) {
        userChoices.forEach(e => e.removeEventListener("click", handleClick));

        if (userScore === 10) {
            winLabels[0].textContent = "You Win!";
            winLabels[0].style.color = "green";
        } else {
            winLabels[1].textContent = "Comp Wins!";
            winLabels[1].style.color = "red";
        }
        
        msg.textContent = "Game is over, click here to play again!";
        msg.style.backgroundColor = "blue";
        msg.style.cursor = "pointer";

        msg.addEventListener("click", resetGame);
    }
}

function resetGame() {
    userScore = 0;
    compScore = 0;

    msg.textContent = "Play your move, whoever reaches 10 wins!";
    msg.style.backgroundColor = "lightSeaGreen";
    msg.style.cursor = "default";

    userScorePara.textContent = userScore;
    winLabels[0].textContent = "You";
    winLabels[0].style.color = "";

    compScorePara.textContent = compScore;
    winLabels[1].textContent = "Comp";
    winLabels[1].style.color = "";

    msg.removeEventListener("click", resetGame);

    start();
}