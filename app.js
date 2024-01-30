let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const generateComputerChoice = () => {
    const option = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() *3);
    return option[randomIndex]
}

const drawGame = () => {
    console.log("game was draw")
    msg.innerText = "draw, play again"
    msg.style.backgroundColor = "black";


}

const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#computer-score")


const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `you win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("you lose")
        msg.innerText = `you lose! ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    console.log("user-choice = ", userChoice)
    const computerChoice =generateComputerChoice();
    console.log("computer choice = ", computerChoice)

    if(userChoice === computerChoice){
        drawGame()
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoice ===  "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach( (choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});