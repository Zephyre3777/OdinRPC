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
{computerChoice = "Sizorzs"}
return computerChoice
}
console.log(getComputerChoice())

console.log("TesT")
console.log(Math.random()*100)

/*
Computer makes there choice


Player is asked to make choice
Player enters there choice
choice is checked to make sure it is valid

Choices are compared and evaluated


Results are shown

*/