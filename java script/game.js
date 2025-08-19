let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const genCompChoice =()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options [randIdx];
}

    const getWinner=(userChoice,compChoice)=>{
         if (userChoice ===compChoice)return"draw";
    if(
    (userChoice ==="rock"&&compChoice ==="scissor")||
    (userChoice ==="paper"&& compChoice ==="rock")||
    (userChoice === "scissor"&& compChoice ==="paper"))
        {
            return"user";
        }else{
            return"computer";
        }
    }
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice=",compChoice);
    const winner= getWinner(userChoice,compChoice);
    const msg = document.getElementById("msg");
    if (winner==="user"){
        userscore++;
        document.getElementById("user-score").textContent=userscore;
        msg.textContent = "You chose " + userChoice + ", Computer chose " + compChoice + ". You win! 🎉";
    }else if(winner==="computer"){
        compscore++;
        document.getElementById("comp-score").textContent=compscore;
        msg.textContent = "You chose " + userChoice + ", Computer chose " + compChoice + ". Computer wins! 💻";
    }else {
    msg.textContent = "You chose " + userChoice + ", Computer chose " + compChoice + ". It's a Draw! 🤝";
  }
};
choices.forEach(choice =>{
    choice.addEventListener("click",()=>{
        playGame(choice.id);
    })
})