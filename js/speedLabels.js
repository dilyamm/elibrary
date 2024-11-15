window.onload = function() {
    const speedSlider = document.getElementById("carouselSpeed");
    const speedValue = document.getElementById("speedValue");

    speedSlider.addEventListener("input", function() {
        speedValue.textContent = speedSlider.value;
    });

    const sliderTrack = speedSlider.parentElement;
    const labelsContainer = document.createElement('div');
    labelsContainer.classList.add('speed-labels');

    for (let i = 1; i <= 10; i++) {
        const label = document.createElement('span');
        label.textContent = i;
        labelsContainer.appendChild(label);
    }

    sliderTrack.appendChild(labelsContainer);
};
