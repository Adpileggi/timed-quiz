var time = document.querySelector(".time");
var score = document.querySelector(".score");

var startQuiz = document.querySelector(".startQuiz");
var startBtn = document.querySelector(".startBtn")

var questionArea = document.querySelector(".questionArea")
var ask = document.querySelector(".ask");
var choiceA = document.querySelector(".answer-1");
var choiceB = document.querySelector(".answer-2");
var choiceC = document.querySelector(".answer-3");
var choiceD = document.querySelector(".answer-4");
var highScore = document.querySelector(".highscore");

var currentQuestion;
var totalTime = 90;
var totalScore = 0
var choices = [choiceA, choiceB, choiceC, choiceD];

// make questions
const questions = [
    {
        question: "What is the JavaScript file extension?",
        choice: ["a. .html", "b. .css", "c. .js", "d. .md",],
        answer: "c. .js"
    },

    {
        question: "An array in Java Script starts at which number?",
        choice: ["a. [3]", "b. [2]", "c. [1]", "d. [0]",],
        answer: "d. [0]"
    },

    {
        question: "JavaScript objects are contained in:",
        choice: ["a. {}", "b. []", "c. <>", "d. \\",],
        answer: "a. {}"
    },

    {
        question: "JavaScript values are:",
        choice: ["a. Numbers", "b. Strings", "c.Boolean", "d. All the above",],
        answer: "d. All the above"
    },

    {
        question: "Which is an example of a JavaScript event",
        choice: ["a. Alert", "b. Click", "c. Warning", "d. None of the above",],
        answer: "b. Click"
    },
]
// select a random question from the array
function randomQuestion() {
var randomInt = Math.floor(Math.random() * questions.length)
        var selectedQuestion = questions[randomInt];
        questions.splice(randomInt, 1);
        currentQuestion = selectedQuestion;
        return selectedQuestion;
}

// loops to check answer of current question, presents next question 
for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function(event) {
        if(event.target.textContent === currentQuestion.answer) {
            alert("correct choice")
            currentQuestion = randomQuestion();
            nextQuestoin();
            // selectedCorrect(event.target);
        } else {
            alert('wrong choice')
            currentQuestion = randomQuestion();
            nextQuestoin();
            // selectedWrong(event.target)
        }
    })
}

function nextQuestoin() {

    ask.textContent = currentQuestion.question;
    choiceA.textContent = currentQuestion.choice[0]
    choiceB.textContent = currentQuestion.choice[1]
    choiceC.textContent = currentQuestion.choice[2]
    choiceD.textContent = currentQuestion.choice[3]
}

// list variables



// make a start button
// make timer
// allow 90 seconds for quiz
startBtn.addEventListener("click", newQuiz);

function newQuiz(event) {
    // event.preventDefault();
       console.log(questions)
    startQuiz.style.display = "none";
        questionArea.style.display = "block";
    
    var timeInterval = setInterval(function () {
    if (totalTime > 1) {
        time.textContent = 'Time left: ' + totalTime;
        totalTime--;
     } else {
        time.textContent = 'Out of time!';
        clearInterval(timeInterval);
     }
    }, 1000);
    currentQuestion = randomQuestion();
    nextQuestoin();

}

// track score and time

// save local data for highscores

// 




