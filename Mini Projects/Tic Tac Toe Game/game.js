let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn")

let turnO = true;

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.textContent = turnO ? "X" : "O";
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    });
});

function checkWinner() {
    for (let patterns of winningPatterns) {
        let pos0Val = boxes[patterns[0]].textContent;
        let pos1Val = boxes[patterns[1]].textContent;
        let pos2Val = boxes[patterns[2]].textContent;

        if (pos0Val != "" && pos1Val != "" && pos2Val != "") {
            if (pos0Val === pos1Val && pos1Val === pos2Val) {
                console.log("winner", pos0Val);
                boxes[patterns[0]].style.backgroundColor = "salmon";
                boxes[patterns[1]].style.backgroundColor = "salmon";
                boxes[patterns[2]].style.backgroundColor = "salmon";
                disableBoxes();
                break;
            }
        }
    }
}

function disableBoxes() {
    for (let box of boxes) {
        box.disabled = true;
    };
};

resetBtn.addEventListener('click', () => {
    for (let box of boxes) {
        box.textContent = "";
        box.disabled = false;
        box.style.backgroundColor = "";
    }
    turnO = true;
});


