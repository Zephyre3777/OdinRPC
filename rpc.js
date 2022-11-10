//computer makes the choice

function getComputerChoice(){
//random number generated is made and translated to rock paper or sizors
let computerChoice=Math.random() * 100
console.log(computerChoice)
if (computerChoice <= 33)
{computerChoice="Rock"}

else if(computerChoice <= 66)
{computerChoice="Paper"}

else if(computerChoice <= 99)
{computerChoice = "Sizorzzs"}
return computerChoice
}
console.log(getComputerChoice())

console.log("TesT")
console.log(Math.random()*100)
//Player is asked to make choice 
function getplayerselection(playerselection){
    //player enters choice
    playerselection=prompt("Rock, Paper, Sizzors shoot")
    if (playerselection==="Rock"||
        playerselection==="Paper"||
        playerselection==="Scizzors")
    {return playerselection}
    else{return playerselection+" is an invalid input" }
    //choice is checked to makes sure it is valid
    //return playerselection
}
console.log(getplayerselection())

function game(){
    if (playerselection==="Rock")
    {return(playerselection+ computerChoice)}
    else if (playerselection==="Paper")
    {}
    else if (playerselection==="Scizzors")
    {}
}
console.log(game())




/*
Computer makes there choice


Player is asked to make choice
Player enters there choice
choice is checked to make sure it is valid

Choices are compared and evaluated



Results are shown

*/