//computer makes the choice
let computerChoice
function getComputerChoice(){
//random number generated is made and translated to rock paper or sizors
computerChoice=Math.random() * 100
//console.log(computerChoice)
if (computerChoice <= 33)
{computerChoice="Rock"}

else if(computerChoice <= 66)
{computerChoice="Paper"}

else if(computerChoice <= 99)
{computerChoice = "Scizzors"}
//console.log(computerChoice)
}
//console.log("computer choice"+getComputerChoice())

//console.log("TesT")

//Player is asked to make choice
let playerselection 
function getplayerselection(){
    //player enters choice
    playerselection=prompt("Rock, Paper, Scizzors shoot")
    if (playerselection==="Rock"||
        playerselection==="Paper"||
        playerselection==="Scizzors")
    {return "You chose, "+playerselection}
    else{return( playerselection+" is an invalid input")}
    //choice is checked to makes sure it is valid
    //return playerselection
}
//console.log("player choice"+getplayerselection())


//choices are compared and evaluated
function compare(){
    if (playerselection==="Rock")
    {if (computerChoice=== "Rock"){return "Round "+round+". "+playerselection+" VS "+computerChoice+" Thats a Tie"}
    else if (computerChoice=== "Paper"){return "Round "+round+". "+playerselection+" VS "+computerChoice+" Rock looses to Paper, YOU LOST!!!"}  
    else if (computerChoice=== "Scizzors"){return "Round "+round+". "+playerselection+" VS "+computerChoice+" Rock beats Scizzors, YOU WIN!!!"}
}

    else if (playerselection==="Paper")
    {
        if  (computerChoice=== "Rock"){return "Round "+round+". "+playerselection+ " VS "+computerChoice+" Paper beats Rock, YOU WIN!!!"}
        else if (computerChoice=== "Paper"){return "Round "+round+". "+playerselection+ " VS "+computerChoice+" Thats a tie"}
        else if (computerChoice=== "Scizzors"){return "Round "+round+". "+playerselection+ " VS "+computerChoice+" Paper looses to scizzors, YOU LOST!!!"}
    }
    else if (playerselection==="Scizzors")
    {
        if  (computerChoice=== "Rock"){return "Round "+round+". "+playerselection+ " VS "+computerChoice+" Scizzors looses to Rock, YOU LOSE!!!"}
        else if (computerChoice=== "Paper"){return "Round "+round+". "+playerselection+ " VS "+computerChoice+" Sizzorse beats Paper, YOU WIN!!!"}
        else if (computerChoice=== "Scizzors"){return "Round "+round+". "+playerselection+ " VS "+computerChoice+ "Thats a tie"}
    }
    else{return("Round "+round+". "+"Computer wins since your choice was invalid.")}
}
let round=0
function game(){
for (round = 1; round <=5; round++) {
getComputerChoice();
console.log(getplayerselection());
console.log(compare());
//console.log(round);
}}
console.log(game())



/*        if  (computerChoice=== "Rock"){}
        else if (computerChoice=== "Paper"){}
        else if (computerChoice=== "Scizzors"){}
        if  (computerChoice=== "Rock"){playerselection+ " VS "+computerChoice}
        else if (computerChoice=== "Paper"){playerselection+ " VS "+computerChoice}
/*
Computer makes there choice


Player is asked to make choice
Player enters there choice
choice is checked to make sure it is valid

Choices are compared and evaluated



Results are shown

*/