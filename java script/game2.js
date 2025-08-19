let score={
    win:0,
    lost:0,
    tie:0,
};
let computerChoice;
let resultMsg;
function generateComputerChoice(){
    let randomNumber = Math.random()*3;
    if (randomNumber>=0 && randomNumber<=1){
        computerChoice="bat";
    }else if
        (randomNumber>1 && randomNumber<=2){
            computerChoice="ball";
        }else {
            computerChoice="stumps";
        }
}