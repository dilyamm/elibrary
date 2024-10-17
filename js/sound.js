const audioElement = document.getElementById('audiobook');
const playButton = document.getElementById('play-audio-btn');

    function toggleAudio() {
        if (audioElement.paused) {
            audioElement.play();
            playButton.textContent = 'Pause Audiobook';
        } else {
            audioElement.pause();
            playButton.textContent = 'Play Audiobook';
        }
    }

    playButton.addEventListener('click', toggleAudio);