var startButton = document.querySelector('.start-button');
let timer = document.querySelector('.time');

// Timer Button 

var secondsLeft = 120;

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = 'Time Left: ' + secondsLeft + ' seconds';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        };

    }, 1000);
    
};
setTimer();





