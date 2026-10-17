// start game
    // start round
        // get player input
        // get computer input
        // compare inputs and tally score
        // end round

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if(humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            console.log("You lose! Paper beats rock");
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            console.log("You win! Rock beats scissors");
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("You tie! Rock equals rock");
        } else if(humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            console.log("You lose! Scissors beat paper");
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            console.log("You win! Paper beats rock");
        } else if (humanChoice == computerChoice) {
            console.log("You tie! Paper equals papers");
        } else if(humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            console.log("You lose! Rock beats scissors");
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            console.log("You win! Scissors beat paper");
        } else if (humanChoice == computerChoice) {
            console.log("You tie! Scissors equals scissors");
        } 
        
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Final score: \nHuman- ${humanScore} \nComputer- ${computerScore}`);
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // 3 = # of options (rock, paper , scissors)
    if (choice == 0)
        return "rock";
    else if (choice == 1)
        return "paper";
    else if (choice == 2)
        return "scissors";
}

function getHumanChoice() {
    let answer = prompt("Rock, paper, scissors, shoot!");
    return answer.toLowerCase();
}

playGame();
