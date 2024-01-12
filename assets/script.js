var time = document.querySelector(".time");
var score = document.querySelector(".score");

var startQuiz = document.querySelector(".startQuiz");
var startBtn = document.querySelector(".startBtn")

var questionArea = document.querySelector(".questionArea")
var question = document.querySelector(".question");
var ans1 = document.querySelector(".answer-1");
var ans2 = document.querySelector(".answer-2");
var ans3 = document.querySelector(".answer-3");
var ans4 = document.querySelector(".answer-4");

var highScore = document.querySelector(".highscore");

// list variables


// make timer

    // allowe 90 seconds for quiz
    
function newQuiz(event) {
    event.preventDefault();
    
        startQuiz.style.display = "none";
        questionArea.style.display = "block";

    var totalTime = 90;

    var timeInterval = setInterval(function () {
    if (totalTime > 1) {
        time.textContent = 'Time left: ' + totalTime;
        totalTime--;
     } else {
        time.textContent = '';
        clearInterval(timeInterval);
     }
    }, 1000);
    
}

// make questions
const questions = [
    {
        question1: "What is the JavaScript file extension?",
        choices: ["a. .html", "b. .css", "c. .js", "d. .md",],
        answer: "c. .js"
    },

    {
        question2: "An array in Java Script starts at which number?",
        choices: ["a. [3]", "b. [2]", "c. [1]", "d. [0]",],
        answer: "d. [0]"
    },

    {
        question3: "JavaScript objects are contained in:",
        choices: ["a. {}", "b. []", "c. <>", "d. \\",],
        answer: "a. {}"
    },

    {
        question4: "JavaScript values are:",
        choices: ["a. Numbers", "b. Strings", "c.Boolean", "d. All the above",],
        answer: "d. All the above"
    },

    {
        question5: "Which is an example of a JavaScript event",
        choices: ["a. Alert", "b. Click", "c. Warning", "d. None of the above",],
        answer: "b. Click"
    },
]

// make a start button

startBtn.addEventListener("click", newQuiz);


// make function add questions, and correct and incorrect answers


// track score and time

// save local data for highscores

// 