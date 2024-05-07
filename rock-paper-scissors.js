let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genCompChoice = () => {
    const choices=["rock","paper","scissors"];   
    const randomIdx = Math.floor(Math.random() * 3);
    return choices[randomIdx];
}

const drawGame = () => {
    msg.innerText = "Game was a Draw";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userChoice) => {
    console.log("user-choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();      //drawgame
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            //compchoice = scissors paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //compchice = scissors rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //compchoice = rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}


options.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});