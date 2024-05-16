const NAME = "Ammar Almajed";
const MAJOR = "Software Engineering";
const STARTTEXT = 'Get Started';

function getDelay() {
    return Math.random();
}

function createAnimatedText(elementId, letters, delayStart = 0) {
    const element = document.getElementById(elementId);
    letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('animate-letter');
        span.style.animationDelay = (delayStart + getDelay()) + 's';
        element.appendChild(span);
    });
}

createAnimatedText('name', NAME.split(""));
createAnimatedText('major', MAJOR.split(""), 1);


const startElement = document.getElementById('start');
    startElement.textContent = STARTTEXT;
    startElement.addEventListener('click', () => {
        window.location.href = 'main.html';
});