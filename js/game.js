let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value;
    let messageDiv = document.getElementById("message");

    // Clear the previous message
    messageDiv.textContent = '';

    if (x == y) {
        messageDiv.textContent = "Congratulations!!! You guessed it!";
        messageDiv.style.color = "green"; // Change color for success message
    } else if (x > y) {
        guess++;
        messageDiv.textContent = "Too high! Try again.";
        messageDiv.style.color = "black"; // Change color for warning message
    } else {
        guess++;
        messageDiv.textContent = "Too low! Try again.";
        messageDiv.style.color = "black"; // Change color for warning message
    }
}
