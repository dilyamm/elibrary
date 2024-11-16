document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    console.log('Form submitted');
    const correctAnswers = {
        q1: "1939",
        q2: "Struggle against societal norms",
        q3: "Ironically and inventively",
        q4: "Fiction",
        q5: "Playful language",
        q6: "Society ('them')",
        q7: "It propelled him into the literary elite"
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const userAnswers = new FormData(e.target);

    userAnswers.forEach((value, key) => {
        console.log(`Answer for ${key}: ${value}`);
        if (correctAnswers[key] === value) {
            score++;
        }
    });

    const result = document.getElementById('result');
    const feedback = document.getElementById('feedback');
    result.style.display = "block";
    document.getElementById('score').innerText = `${score} / ${totalQuestions}`;

    if (score === totalQuestions) {
        feedback.innerText = "Excellent! You're a true expert on 'Schoolgirl'!";
    } else if (score >= totalQuestions / 2) {
        feedback.innerText = "Good job! You have a solid understanding of the book.";
    } else {
        feedback.innerText = "Keep reading! There's more to learn about this book.";
    }
});

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let feedbackMessage = "Thank you for submitting the quiz!"; 

    document.getElementById('feedback').textContent = feedbackMessage;

    document.getElementById('result').style.display = 'block';
});