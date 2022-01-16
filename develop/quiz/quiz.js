var timer = document.querySelector('.timer')


// Timer Button
secondsLeft = 60;

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = 'Time Left: ' + secondsLeft + ' seconds';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        };

    },1000);
};
setTimer();