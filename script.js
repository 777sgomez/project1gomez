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

let compare = function (userChoice2, computerChoice)
{
    if (userChoice2 === computerChoice)
    {
        alert("The result is a tie!");
    }
    else if (userChoice2 === "r")
    {
        if(computerChoice === "s")
        {
            alert("You win! You picked " + userChoice2 + " which defeats " + computerChoice);
        }
        else if (computerChoice === "p")
        {
            alert("You lose! The computer picked " + computerChoice + " which defeats " + userChoice2);
        }
    }
}