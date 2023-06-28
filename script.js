let userChoice = prompt("How many rounds do you want to play?").toLowerCase();

let userChoice2 = prompt("Do you pick rock, paper, or scissors? (enter r, p, or s)");
let computerChoice = Math.floor(Math.random() *3);

if (computerChoice < 0.34)
{
    computerChoice = "r";
}
else if(computerChoice <= 1.67)
{
    computerChoice = "p";
}
else {
    computerChoice = "s";
}