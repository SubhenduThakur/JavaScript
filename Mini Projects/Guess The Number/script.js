// let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

// const submitBtn = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField')
// const prevGuess = document.querySelector('.guesses');
// const remainGuess = document.querySelector('.lastResult');
// const feedbackMsg = document.querySelector('.lowOrHi');
// const uiParent = document.querySelector('.resultParas');

// const p = document.createElement('p');
// let allGuesses = [];
// let attepts = 1;
// let playGame = true;

// if (playGame) {
//     submitBtn.addEventListener('click', (e) => {
//         e.preventDefault();

//         const guess = parseInt(userInput.value);
        
//         validateGuess(guess);
//     });
// };

// function validateGuess(guess) {
//     if (isNaN(guess)) {
//         alert(`Please enter a number`);
//     } else if (guess < 1 || guess > 100) {
//         alert(`Please choose number between 1 - 100`);
//     } else {
//         allGuesses.push(guess);

//         if (attepts === 10) {
//             clearNUpdate(guess);
//             displayMsg(`Game over. Random number was ${randomNumber}`);
//             endGame();
//         } else {
//             clearNUpdate(guess);
//             checkGuess(guess);
//         }
//     }
// };

// function checkGuess(guess) {
//     if (guess === randomNumber) {
//         displayMsg(`Won! You guees it right!`);
//         endGame();
//     } else if (guess < randomNumber) {
//         displayMsg(`Your guess is TOOO low`);
//     } else if (guess > randomNumber) {
//         displayMsg(`Your guess is TOOO high`);
//     }
// };

// function clearNUpdate(guess) {
//     userInput.value = '';
//     prevGuess.innerHTML += `${guess}, `;
//     attepts++;
//     remainGuess.innerHTML = `${11 - attepts}`;
// }

// function displayMsg(msg) {
//     feedbackMsg.innerHTML =`<h2>${msg}</h2>`;
// };

// function endGame() {
//     userInput.value = '';
//     userInput.setAttribute('disabled', '')
//     // submitBtn.setAttribute('disabled', '');
//     submitBtn.value = 'New Game' 
//     // p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
//     // uiParent.appendChild(p);
//     playGame = false;
//     newGame();
// };

// function newGame() {
//     // let startBtn = document.querySelector('#newgame');
//     submitBtn.addEventListener('click', () => {
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         allGuesses = [];
//         attepts = 1;
//         prevGuess.innerHTML = '';
//         feedbackMsg.innerHTML = '';
//         remainGuess.innerHTML = `${11 - attepts}`;
//         userInput.removeAttribute('disabled');
//         submitBtn.removeAttribute('disabled');
//         uiParent.removeChild(p);
//         playGame = true;
//     });
// };

/* -------------------------------------------- Cleaned Version 1.1 -------------------------------------------- */

let randomNumber = Math.floor(Math.random() * 100) + 1;

const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const prevGuess = document.querySelector(".guesses");
const remainGuess = document.querySelector(".lastResult");
const feedbackMsg = document.querySelector(".lowOrHi");

let allGuesses = [];
let playGame = true;

submitBtn.addEventListener("click", handleGuess);

function handleGuess(e) {
    e.preventDefault();

    if (!playGame) {
        startNewGame();
        return;
    }

    const guess = parseInt(userInput.value.trim());
    validateGuess(guess);
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a number");
        return;
    }
    if (guess < 1 || guess > 100) {
        alert("Please choose a number between 1 - 100");
        return;
    }
    if (allGuesses.includes(guess)) {
        alert(`You've already guessed ${guess}! Try a different number.`);
        return;
    }

    allGuesses.push(guess);

    if (allGuesses.length === 10) {
        clearNUpdate(guess);
        displayMsg(`Game over. The number was ${randomNumber}`);
        endGame();
    } else {
        clearNUpdate(guess);
        checkGuess(guess);
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`🎉 You guessed it right! The random number was ${randomNumber}`);
        endGame();
    } else {
        displayMsg(guess < randomNumber ? "📉 Your guess is too low." : "📈 Your guess is too high.");
    }
}


function clearNUpdate(guess) {
    userInput.value = "";
    prevGuess.textContent += `${guess}, `;
    remainGuess.textContent = `${10 - allGuesses.length}`;
}


function displayMsg(msg) {
    feedbackMsg.textContent = msg;
}


function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    submitBtn.value = "New Game";
    playGame = false;
}


function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;

    allGuesses = [];
    prevGuess.textContent = "";
    feedbackMsg.textContent = "";
    remainGuess.textContent = `${10 - allGuesses.length}`;
    userInput.removeAttribute("disabled");
    submitBtn.value = "Submit";
    playGame = true;
}

/* ------------------------------------------------------------------------------------------------------------- */

/* 
NOTE : 
	•	I researched and found that textContent is faster than innerHTML, which is why I used textContent.
	•	I want to practice writing clean and efficient code, so I preferred and practiced that logic. I also find it easier to understand.
 */