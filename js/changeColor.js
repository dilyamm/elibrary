const colors = ["bg-color-1", "bg-color-2", "bg-color-3", "bg-color-4", "bg-color-5", "bg-color-6", "bg-color-7", "bg-color-8", "bg-color-9", "bg-color-10"];
const btn = document.getElementById("randomColorBtn");
const resetBtn = document.getElementById("resetColorBtn");

document.addEventListener("DOMContentLoaded", function() { //эту функцию используем, чтобы код подождал загрузки и поменял цвет
    const savedColor = localStorage.getItem("backgroundColor"); //сохраняет цвет в памяти браузера
    if (savedColor) {
        document.body.className = savedColor; // возвращает нам цвет фона
    }
});

btn.addEventListener(function() { //функция меняет цвет страницы рандомно
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.className = randomColor;
    localStorage.setItem("backgroundColor", randomColor);
    
});

resetBtn.addEventListener("click", function() {
    const originalColor = '#f5f0e1';
    document.body.className = originalColor;
    localStorage.setItem("backgroundColor", originalColor);
});