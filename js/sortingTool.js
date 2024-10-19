document.getElementById("sortButton").addEventListener("click", function() { //устанавливаем событие, которое срабатывает, когда пользователь нажимает кнопку сортировки
    const numbersInput = document.getElementById("numbersInput").value; //считывает введенные числа
    const sortOrder = document.getElementById("sortOrder").value;
    const resultDisplay = document.getElementById("sortedResult");

    if (numbersInput.trim() === "") {
        showError("Please enter at least one number!");
        return;
    }

    const numbersArray = numbersInput.split(',').map(num => num.trim()); //введенные числа разбиваются на массив
    
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
