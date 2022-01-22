// User Choices

var questions = [
    {
        title: "How many licks does it take to get to a center of a tootsie pop",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "JavaScript",
            "terminal / bash",
            "for loops",
            "console.log"
        ],
        answer: "console.log"
    }
];

let timer = document.querySelector('.time');

// Timer Button 

var secondsLeft = 90;

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = 'Time Left: ' + secondsLeft + ' seconds';

        if (secondsLeft === 0 || questions.length <= currentQuestion ) {
            clearInterval(timerInterval);
            body.textContent = '';
            body.appendChild(quizComplete);
            quizComplete.style.opacity = 1;
            timeSection.textContent = '';
            displayResults();
        }


    }, 1000);

};


// Start Button

let startButton = document.querySelector('.start-button');
let intro = document.querySelector('.position-intro');
let quiz = document.querySelector('.position-quiz');
let body = document.querySelector('.position-body');
let bodySection = document.querySelector('.style-body');
let header = document.querySelector('.style-header');
let timeSection = document.querySelector('.time');




startButton.addEventListener('click', function(){
    quiz.style.opacity = 1;
    body.textContent = '';
    body.appendChild(quiz);
     
    setTimer();
});



// Quiz Questions

const quizQuestion = document.querySelector('.quiz-question');
const optionA = document.querySelector('#option-A');
const optionB = document.querySelector('#option-B');
const optionC = document.querySelector('#option-C');
const optionD = document.querySelector('#option-D');

var correct = 0;
var currentQuestion = 0;

function evaluateChoice(answer, choice) {
    if (answer == choice) {
        correct++;
    }

    else {
        secondsLeft -= 20
    }

    currentQuestion++;
    displayQuestion();
};


optionA.addEventListener('click', function () {
    evaluateChoice(questions[currentQuestion].answer, questions[currentQuestion].choices[0]);
});

optionB.addEventListener('click', function () {
    evaluateChoice(questions[currentQuestion].answer, questions[currentQuestion].choices[1]);
});

optionC.addEventListener('click', function(){
    evaluateChoice(questions[currentQuestion].answer, questions[currentQuestion].choices[2]);

});

optionD.addEventListener('click', function() {
    evaluateChoice(questions[currentQuestion].answer, questions[currentQuestion].choices[3]);
});

// Quiz Complete Section

var quizComplete = document.querySelector('.position-complete');


function displayQuestion() {
    if (questions.length > currentQuestion) {
        quizQuestion.textContent = questions[currentQuestion].title;
        optionA.textContent = 'A. ' + questions[currentQuestion].choices[0];
        optionB.textContent = 'B. ' + questions[currentQuestion].choices[1];
        optionC.textContent = 'C. ' + questions[currentQuestion].choices[2];
        optionD.textContent = 'D. ' + questions[currentQuestion].choices[3];
    }
    else {
        body.textContent = '';
        quizComplete.style.opacity = 1;
        body.appendChild(quizComplete);
        displayResults();
    }
    
}


var results = document.querySelector('.results');
var submission = document.querySelector('.submit-button');
var inputInitial = document.querySelector('.style-input')

function displayResults() {
    results.textContent = 'Your score is: ' + correct + "/5";
}


// High Scores Section


var firstPlace = document.querySelector('.first');
var highScores = document.querySelector('.position-scores');



submission.addEventListener('click', function() {
    highScores.style.opacity = 1;
    body.textContent = '';
    body.appendChild(highScores);
    
    var theInitial = {
        inputInitial: inputInitial.value.trim(),
        correctScores: correct
    };

    localStorage.setItem('theInitial', JSON.stringify(theInitial))
    displayHighScores();
});


function displayHighScores() {
    var initial = JSON.parse(localStorage.getItem('theInitial'));
    if (initial !== null) {
        firstPlace.textContent = initial.inputInitial.toUpperCase() + ' - ' + initial.correctScores + 'pts';
    }
};

var clearButton = document.querySelector('.style-clear');
var playAgain = document.querySelector('.style-again');

clearButton.addEventListener('click', function() {
    firstPlace.textContent = '';
    secondPlace.textContent = '';
    thirdPlace.textContent = '';

});

playAgain.addEventListener('click', function() {
    window.location.reload() //resets the code back to the beginning
})

let viewScore = document.querySelector('.score-button');

viewScore.addEventListener('click', (event) => {
        event.preventDefault();
        body.textContent = '';
        body.appendChild(highScores);
        highScores.style.opacity = 1;
        displayHighScores();
    });

    











