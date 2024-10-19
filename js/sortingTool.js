document.getElementById("sortButton").addEventListener("click", function() {
    const numbersInput = document.getElementById("numbersInput").value;
    const sortOrder = document.getElementById("sortOrder").value;
    const resultDisplay = document.getElementById("sortedResult");

    if (numbersInput.trim() === "") {
        showError("Please enter at least one number!");
        return;
    }

    const numbersArray = numbersInput.split(',').map(num => num.trim());
    
    if (numbersArray.some(isNaN)) {
        showError("Please enter valid numbers only!");
        return;
    }

    const numericArray = numbersArray.map(Number);

    if (sortOrder === "ascending") {
        numericArray.sort((a, b) => a - b);
    } else {
        numericArray.sort((a, b) => b - a);
    }

    resultDisplay.textContent = `Sorted numbers: ${numericArray.join(', ')}`;
});
