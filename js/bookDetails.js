document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const bookDetails = this.nextElementSibling;
            
            if (bookDetails.style.display === "none") {
                bookDetails.style.display = "block";
                this.textContent = "Read Less";
            } else {
                bookDetails.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});
