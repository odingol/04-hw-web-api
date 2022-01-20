// Start Page







// User Choices

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
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

var secondsLeft = 120;

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = 'Time Left: ' + secondsLeft + ' seconds';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        };

    }, 1000);

};





// Start Button

let startButton = document.querySelector('.start-button');
let intro = document.querySelector('.position-intro');
let quiz = document.querySelector('.position-quiz');
let body = document.querySelector('.style-body');


quiz.style.display = 'none';

startButton.addEventListener('click', function(){
    intro.style.display = 'none';
    quiz.style.display = 'block';
    
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

quizComplete.style.display = 'none';

function displayQuestion() {
    if (questions.length > currentQuestion) {
        quizQuestion.textContent = questions[currentQuestion].title;
        optionA.textContent = questions[currentQuestion].choices[0];
        optionB.textContent = questions[currentQuestion].choices[1];
        optionC.textContent = questions[currentQuestion].choices[2];
        optionD.textContent = questions[currentQuestion].choices[3];
    }
    else {
        quiz.style.display = 'none';
        quizComplete.style.display = 'block';
        displayResults();
    }

}



var results = document.querySelector('.results');

function displayResults() {
    results.textContent = 'Your score is: ' + correct + "/5";
}









