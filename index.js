let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const reNewable = document.querySelector('.renew');

let userCount = 1;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (userCount === 1) {
        guesses.textContent = 'Previous guess: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulation!luv u my baby';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        resetGame();
    }
    else if (userCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        resetGame();
    }
    else {
        lastResult.textContent = 'Haiz';
        lastResult.style.backgroundColor = 'red';
        if (userGuess > randomNumber) {
            lowOrHi.textContent = 'lower plzz!!!';    
        }
        else if (userGuess < randomNumber) {
            lowOrHi.textContent = 'higher plzz!!!'; 
        }
    }
    userCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click',checkGuess);

 function resetButton() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    const answerTable = document.querySelectorAll('.answerTable p');
    for (const i of answerTable) {
        i.textContent = '';
    }
    guessField.disabled = false; 
    guessSubmit.disabled = false;
    guessField.focus(); 
    reNewable.textContent = '';
    userCount = 1;
 }

function resetGame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;    
    reNewable.innerHTML = "<label for = 'renew'>Click to start a new game</label> <input class = 'renew' type='submit' value='Submit'>"
    reNewable.addEventListener('click',resetButton);
}


