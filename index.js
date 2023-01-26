let [hours,minutes,seconds] = [0,0,0];
let timerReference = document.getElementById('timerDisplay');
let timeInterval = null;

let pauseButton = document.getElementById('pause');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');

startButton.addEventListener('click', (start) => {
    if (timeInterval !== null){
        clearInterval(timeInterval);
    }
    timeInterval = setInterval(displayTimer, 60);
});
    
pauseButton.addEventListener('click', (pause) => {
    clearInterval(timeInterval);
});

resetButton.addEventListener('click', (reset) => {
    clearInterval(timeInterval);
    [hours,minutes,seconds] = [0,0,0];
    timerReference.innerHTML = '00 : 00 : 00';
})

function displayTimer() {
    seconds = seconds + 1;
    if (seconds == 60) {
        seconds = 0;
        minutes = minutes + 1;
        if (minutes == 60) {
            minutes = 0;
            hours = hours + 1;
        }
    }

let h = (hours < 10) ? "0" + hours : hours;
let m = (minutes < 10) ? "0" + minutes : minutes;
let s = (seconds < 10) ? "0" + seconds : seconds;
timerReference.innerHTML = h + ' : ' + m + ' : ' + s;
}