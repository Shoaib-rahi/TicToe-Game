let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;//playerX and player0


const winPatteren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}




boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "o";
            box.style.color = "blue";
            turn0 = false;

        } else {
            box.innerText = "X";
            box.style.color = "purple";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();


    });
});

const disablesBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winnner) => {
    msg.innerText = `congratulation winner is ${winnner}`;
    msgContainer.classList.remove("hide");
    disablesBoxes();
}



const checkWinner = () => {
    for (let pattern of winPatteren) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winnner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
newGamebtn.addEventListener("click", resetgame);
reset_btn.addEventListener("click", resetgame);
