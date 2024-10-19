let y = Math.floor(Math.random() * 100 + 1); //задает случайное число
let guess = 1; //считает попытки

document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value; //вводит число
    let messageDiv = document.getElementById("message");

    messageDiv.textContent = '';

    if (x == y) {
        messageDiv.textContent = "Congratulations!!! You guessed it!";
        messageDiv.style.color = "green";
    } else if (x > y) {
        guess++;
        messageDiv.textContent = "Too high! Try again.";
        messageDiv.style.color = "black";
    } else {
        guess++;
        messageDiv.textContent = "Too low! Try again.";
        messageDiv.style.color = "black";
    } 
}
