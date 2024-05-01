let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice= () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
   // console.log("Game was draw");
    msg.innerText = "Game was draw! Play again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}
const showWinner = (userWin,choiceId,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You win!");
        msg.innerText = `You win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
       // console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (choiceId) => {
    //console.log("user choice  = " + choiceId);
    //generate computer choice
    const compChoice = genCompChoice();
    //console.log("Comp choice = " + compChoice);
    if(choiceId===compChoice){
     drawGame();
    }else{
        let userWin = true;
        if(choiceId === "rock"){
            //scissor,paper
            userWin = compChoice==="paper" ? false : true;
        }
        else if(choiceId === "paper"){
            //rock,scissor
            userWin = compChoice==="scissor" ? false  :  true;

        }
        else if(choiceId==="scissor"){
            //rock,paper
            userWin = compChoice === "rock" ? false  : true;
        }
        showWinner(userWin,choiceId,compChoice);
    }
};

choices.forEach((choice) => {
   // console.log(choice);
    choice.addEventListener("click",()=>{
    const choiceId = choice.getAttribute("id");
   // console.log("Choice was clicked " + choiceId);
    playGame(choiceId);
    });
});
