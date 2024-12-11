let computerMove = ""
function random(){
    const randomNumber = Math.random()

    if(randomNumber >= 0 && randomNumber < 0.5){
        computerMove = "Head"
    }
    else if(randomNumber >= 0.5 && randomNumber < 1){
        computerMove = "Tail"
    }
}


// Comparing computerMove to human move
let result = ""
const playerHead = document.querySelector("#head-btn");

playerHead.addEventListener("click", () => {
    random();

    if(computerMove === "Head"){
        result = "You win";
        alert(`You picked Head. Computer picked ${computerMove}. ${result}`);
    }

    else if(computerMove === "Tail"){
        result = "You lose";
        alert(`You picked Head. Computer picked ${computerMove}. ${result}`);
    }
});

const playerTail = document.querySelector("#tail-btn");
playerTail.addEventListener("click", () => {
    random();

    if(computerMove === "Head"){
        result = "You lose";
        alert(`You picked Tail. Computer picked ${computerMove}. ${result}`);
    }

    else if(computerMove === "Tail"){
        result = "You win";
        alert(`You picked Tail. Computer picked ${computerMove}. ${result}`);
    }
});