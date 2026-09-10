const score = JSON.parse(localStorage.getItem('rpsScore')) || {
    userScore: 0,
    computerScore: 0,
    tieScore: 0,
};
let result;
// const savedScore = localStorage.getItem('rpsScore');
// if (savedScore) {Object.assign(score, JSON.parse(savedScore));}
function updateScore() {
document.querySelector(".js-score")
    .innerHTML = `Your score: ${score.userScore}, Computer score: ${score.computerScore}, Ties: ${score.tieScore}`;
}
updateScore()

function playGame(userChoice) {
    const randomNumber = Math.random();
    let computerChoice;
    
    if (randomNumber < 1/3) {
        computerChoice = 'rock';
    } else if (randomNumber < 2/3) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    
    if (userChoice === computerChoice) {
        score.tieScore++;
        result = "It's a tie.";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        score.userScore++;
        result = 'You win.';
    } else {
        score.computerScore++;
        result = 'You lose.';    
    }
    localStorage.setItem('rpsScore', JSON.stringify(score));
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-choices").innerHTML = 
    `You
    <img src="images/${userChoice}-emoji.png" class="image-choice" alt="">
    <img src="images/${computerChoice}-emoji.png" class="image-choice" alt="">
    Computer`;
    updateScore();
}

function resetScore() { 
    localStorage.removeItem('rpsScore');
    score.userScore = 0;
    score.computerScore = 0;
    score.tieScore = 0;
    document.querySelector(".js-result").innerHTML = '';
    document.querySelector(".js-choices").innerHTML ='';
    updateScore();
}