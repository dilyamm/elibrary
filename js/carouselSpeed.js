const rangeInput = document.getElementById('carouselSpeed');
const speedValue = document.getElementById('speedValue');
const carouselElement = document.getElementById('carouselExampleCaptions');

function updateSpeed() {
    const speed = rangeInput.value;
    speedValue.textContent = speed;

    localStorage.setItem('carouselSpeed', speed);

    if (carouselElement) {
        const carouselInstance = bootstrap.Carousel.getInstance(carouselElement);
        if (carouselInstance) {
            carouselInstance.pause();
            carouselInstance.dispose(); 

            new bootstrap.Carousel(carouselElement, {
                interval: speed * 1000,
                ride: 'carousel'
            }).cycle();
        }
    }
}

window.onload = function() {
    const savedSpeed = localStorage.getItem('carouselSpeed');
    if (savedSpeed) {
        rangeInput.value = savedSpeed;
        speedValue.textContent = savedSpeed;
    }

    updateSpeed();
};

rangeInput.addEventListener('input', updateSpeed);