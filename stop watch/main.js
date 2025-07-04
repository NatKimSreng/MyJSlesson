let interval = null;
let elapsedTime = 0;
let isRunning = false;
let startTime = 0;
let laps = [];

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const clearBtn = document.getElementById('clearBtn');
const lapTime = document.getElementById('lap-time');
const lapList = document.getElementById('laps');

function formatTime(ms) {
    const totalMilliseconds = Math.floor(ms);
    const milliseconds = String(totalMilliseconds % 1000).padStart(3, '0');
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
    if (isRunning) {
        display.classList.add('pulse');
    } else {
        display.classList.remove('pulse');
    }
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        interval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10); 
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
        updateDisplay();
    }
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    laps = [];
    updateDisplay();
    lapTime.textContent = '00:00:00.000';
    lapList.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        laps.push(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.length}: ${formatTime(elapsedTime)}`;
        lapList.prepend(lapItem);
        lapTime.textContent = formatTime(elapsedTime);
    }
}

function clearLap() {
    laps = [];
    lapTime.textContent = '00:00:00.000';
    lapList.innerHTML = '';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);
clearBtn.addEventListener('click', clearLap);

// Initialize display
updateDisplay();