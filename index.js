const guessingInput = document.getElementById("guessing-input");
const submit = document.getElementById("submit");
const message = document.getElementById("message");
let result = randomNumber();
let attempts = 0;
message.style.marginBottom = "5px"

// Add event listener
submit.addEventListener("click", guess);

// Random numbers function
function randomNumber () {
    return Math.floor(Math.random() * 10) + 1;
}

// Reset and Add event listener function
function endGame () {
    submit.removeEventListener("click", guess);
    submit.addEventListener("click", resetGame)
}

// Reset function
function resetGame () {
    result = randomNumber();
    attempts = 0;
    guessingInput.value = "";
    message.innerText = "Game reset! Enter a new guess between 1 and 10.";
    message.style.color = "black";
    submit.innerHTML = "Start over!";

    submit.removeEventListener("click", resetGame);
    submit.addEventListener("click", guess);
}



// Main function
function guess () {
    let userGuess = Number(guessingInput.value)
    const maxAttempts = 5
    attempts++;
    // empty input
    if (!userGuess) {
        message.innerText = "⚠️ Please enter a number between 1 and 10";
        message.style.color = "#b60707ff";
        return;
    }

    // validation
    if (attempts >= maxAttempts && userGuess != result) {
        message.innerText = `❌ Game Over! The number was ${result}.`;
        message.style.color = "red";
        submit.innerHTML = "Start Over!";
        endGame();
    return;
    }


    if (userGuess > result) {
         message.innerText = `🙄 Too high! Attempts left: ${maxAttempts - attempts}`;
         message.style.color = "#b60707ff";
         submit.innerHTML = "Try Again!";

    } else if (userGuess < result) {
        message.innerText = `🙄 Too high! Attempts left: ${maxAttempts - attempts}`;
        message.style.color = "#b60707ff";
        submit.innerHTML = "Try Again!";
    
    } else {
        message.innerText = `🎉 Correct! The number was ${result}. You guessed it in ${attempts} attempts`
        message.style.color = "#130f0fff"
        submit.innerHTML = "Start Over!"
        endGame()
    }
}