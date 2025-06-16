let hours = 0;
let min = 0;
let sec = 0;
let milisec = 0;
let intervel;
let running = false;

const hoursDisplay = document.getElementById("hours");
const minDisplay = document.getElementById("min");
const secDisplay = document.getElementById("sec");
const milisecDisplay = document.getElementById("milisec");

function startBtn() {
    if (!running) {
        running = true;
        intervel = setInterval(updateTime, 10);
    }
}

function stopBtn() {
    running = false;
    clearInterval(intervel);
}

function resetBtn() {
    running = false;
    clearInterval(intervel);
    hours = min = sec = milisec = 0;
    updateDisplay();
}

function updateTime() {
    milisec++;
    if (milisec >= 100) {
        milisec = 0
        sec++
    }
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    if (min >= 60) {
        min = 0;
        hours++;
    }
    if (hours >= 24) {
        hours = 1;
    }
    updateDisplay();
}

function updateDisplay() {
    hoursDisplay.textContent = `${format(hours)}:`;
    minDisplay.textContent = `${format(min)}:`;
    secDisplay.textContent = `${format(sec)}.`;
    milisecDisplay.textContent = `${format(milisec)}`;
}
function format(unit) {
    return unit < 10 ? "0" + unit : unit;
}