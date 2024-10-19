let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const musicButton = document.getElementById('music-toggle');
const music = document.getElementById('background-music');
let isPlaying = false;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
});

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Music Button Toggle
musicButton.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        musicButton.textContent = 'Play Music';
    } else {
        music.play();
        musicButton.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
});
