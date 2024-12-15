// JavaScript for the Drum Kit functionality

// Function to play sound based on key/button
function playSound(key) {
    const sounds = {
        'w': 'crash.mp3',
        'a': 'kick-bass.mp3',
        's': 'snare.mp3',
        'd': 'tom-1.mp3',
        'j': 'tom-2.mp3',
        'k': 'tom-3.mp3',
        'l': 'tom-4.mp3'
    };

    const soundFile = sounds[key];
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
}

// Function to add animation to a button
function animateButton(key) {
    const button = document.querySelector(`.${key}`);
    if (button) {
        button.classList.add('pressed');
        setTimeout(() => button.classList.remove('pressed'), 100);
    }
}

// Event listener for mouse clicks
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', function () {
        const key = this.textContent;
        playSound(key);
        animateButton(key);
    });
});

// Event listener for key presses
document.addEventListener('keydown', function (event) {
    playSound(event.key);
    animateButton(event.key);
});
