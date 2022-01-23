// User Choices

var questions = [
    {
        title: "What does HTML stand for?",
        choices: [
            "Hypertext Markup Language",
            "Hypertext Marking Language",
            "Hope Transcend Markup Language",
            "Hyper Transfered Markdown Language"
        ],
        answer: "Hypertext Markup Language"
    },
    {
        title: "What does CSS stand for?",
        choices: [
            "Current Style Sheets",
            "Case Style Sheet",
            "Container Styling Sheets",
            "Cascading Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        title: "Which of the following is NOT considered a data type?",
        choices: [
            "String",
            "Dull",
            "Number",
            "None of the above"
        ],
        answer: "Dull"
    },
    {
        title: "Which of the following is a helpful tool for debugging?",
        choices: [
            "Console.log",
            "DevTools",
            "Google",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        title: "_____ is used to store code remotely",
        choices: [
            "Git",
            "Git Hub",
            "Repository",
            "All of the above"
        ],
        answer: "All of the above"
    }
];

let timer = document.querySelector('.time');

// Timer Button 

var secondsLeft = 90;

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = 'Time Left: ' + secondsLeft + ' seconds';

        if (secondsLeft <= 0 || questions.length <= currentQuestion ) {
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
    displayQuestion();
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
var inputInitial = document.querySelector('.style-input');

function displayResults() {
    if (correct < 5) {
    results.textContent = 'Your score is: ' + correct + "/5 " 
    results.setAttribute('style', 'font-size:25px');
    }

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
var scoreList = document.querySelector('.score-list');

clearButton.addEventListener('click', function() {
    scoreList.textContent = '';

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

    











