
let timer;
let seconds = 0;
let minutes = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    document.getElementById('timer').innerText = formatTime(minutes, seconds);
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById('timer').innerText = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}
