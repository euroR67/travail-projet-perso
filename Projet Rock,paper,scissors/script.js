// ================ GAME START BUTTON DISPLAY ======================//

const startGame = document.getElementById("start-game")
function displayGame() {
    const showOn = document.querySelectorAll(".show-on")
    const showOff = document.querySelectorAll(".show-off")
    for(let i = 0; i < showOn.length; i++) {
        showOn[i].style.display = "block"
        showOn[i].style.opacity = "1"
        for(let j = 0; j < showOff.length; j++) {
            showOff[j].style.display = "none"
        }
    }
    startGame.style.display = "none"
}

startGame.addEventListener("click", displayGame)

// ================ GAME FUNCTIONS START HERE ===============//

// =========== USER CHOICE BUTTONS ============//
let optionRock = document.getElementById("rock")
let optionPaper = document.getElementById("paper")
let optionScissors = document.getElementById("scissors")

// =========== USER and COMPUTER choice variable ============//
let myChoice = ""
let computerChoice = ""
// =========== USER and COMPUTER score variable ============//
let myScore = 0
const displayMyScore = document.getElementById("human-score")
let computerScore = 0
const displayComputerScore = document.getElementById("computer-score")
// =========== WINNER OR LOOSER DISPLAYER ============//
const displayResult = document.getElementById("winner-looser")

// =========== USER CHOICE FUNCTION ============//
function getMyChoice(whichOption) {
    if(whichOption == "rock") {
        myChoice = "rock"
        document.querySelector('.show-on.static-hand.human').src = "images/rock.png"
    } else if(whichOption == "paper") {
        myChoice = "paper"
        document.querySelector('.show-on.static-hand.human').src = "images/paper.png"
    } else if(whichOption == "scissors") {
        myChoice = "scissors"
        document.querySelector('.show-on.static-hand.human').src = "images/scissors.png"
    }
}
// =========== COMPUTER CHOICE FUNCTION ============//
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0:
            computerChoice = "rock"
            document.querySelector('.show-on.static-hand.computer').src = "images/rock.png"
            break;
        case 1:
            computerChoice = "paper"
            document.querySelector('.show-on.static-hand.computer').src = "images/paper.png"
            break;
        case 2:
            computerChoice = "scissors"
            document.querySelector('.show-on.static-hand.computer').src = "images/scissors.png"
            break;
    }
}

// =========== RESET DISPLAYED IMAGES AND TEXT FUNCTION ============//
function displayReset() {
    displayMyScore.innerHTML = myScore
    displayComputerScore.innerHTML = computerScore
    displayResult.innerHTML = "Choose an option";
    document.querySelector('.show-on.static-hand.human').src = "images/rock-game.png"
    document.querySelector('.show-on.static-hand.computer').src = "images/rock-game.png"
}


// =========== RESET GAME FUNCTION ============//
function resetScore() {
    if (myScore === 3) {
        alert("You win!");
        myScore = 0;
        computerScore = 0;
        displayReset()
      } else if (computerScore === 3) {
        alert("The computer wins.");
        myScore = 0;
        computerScore = 0;
        displayReset()
      }
}
// =========== DETERMINE WINNER FUNCTION ============//
function determineWinner() {
// =========== CALLING USER & COMPUTER CHOICE FUNCTION ============//
    getComputerChoice();
    getMyChoice(this.value);
// =========== COMPARING USER AND COMPUTER CHOICE ============//
    if(myChoice === computerChoice) {
        console.log('Its a tie!')
        displayResult.innerHTML = "It's a Tie!";
    }  else if(
        myChoice === "rock" && computerChoice === "scissors" || 
        myChoice === "paper" && computerChoice === "rock" || 
        myChoice === "scissors" && computerChoice === "paper") {
        console.log('You win!')
        displayResult.innerHTML = "You Win!";
        myScore++
        displayMyScore.innerHTML = myScore
    }  else {
        console.log('Computer win!')
        displayResult.innerHTML = "Computer Wins!";
        computerScore++
        displayComputerScore.innerHTML = computerScore
    }
    setTimeout(resetScore, 1);
    console.log(myChoice)
    console.log(computerChoice)
    console.log(myScore,computerScore)
}

// =========== CALLING DETERMINEWINNER FUNCTION WHEN BUTTONS ARE CLICKED ============//
optionRock.addEventListener("click", determineWinner)
optionPaper.addEventListener("click", determineWinner)
optionScissors.addEventListener("click", determineWinner)