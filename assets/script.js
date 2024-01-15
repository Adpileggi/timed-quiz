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

var endOfGame = document.querySelector(".game-over")
var initals = document.querySelector(".initals-here")
var submitBtn = document.querySelector(".submit-btn")

var highScore = document.querySelector(".highscore");
var highScoreh2 = document.querySelector(".highScoreh2")

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

// make a start button

startBtn.addEventListener("click", newQuiz);

// make timer

function newQuiz(event) {
    // event.preventDefault(); 
    startQuiz.style.display = "none";
    questionArea.style.display = "block";
    highScoreh2.style.display = "none"

    var timeInterval = setInterval(function () {
    if (totalTime > 1) {
        time.textContent = 'Time left: ' + totalTime;
        totalTime--;
     } else {
        time.textContent = 'End of Quiz';
        clearInterval(timeInterval);
        gameOver()
     }
    }, 1000);
    currentQuestion = randomQuestion();
    nextQuestoin();

}


// select a random question from the array
function randomQuestion() {
    if (questions.length === 0) {
        return null;
    } else {
var randomInt = Math.floor(Math.random() * questions.length)
        var selectedQuestion = questions[randomInt];
        questions.splice(randomInt, 1);
        currentQuestion = selectedQuestion;
        return selectedQuestion;
    }
}

// populate Questions
function nextQuestoin() {

    ask.textContent = currentQuestion.question;
    choiceA.textContent = currentQuestion.choice[0]
    choiceB.textContent = currentQuestion.choice[1]
    choiceC.textContent = currentQuestion.choice[2]
    choiceD.textContent = currentQuestion.choice[3]
};

// loops to check answer of current question, presents next question 
for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function(event) {
        if(event.target.textContent === currentQuestion.answer) {
            alert("correct choice")
            currentQuestion = randomQuestion();
            // nextQuestoin();
            correctChoice();
            // selectedCorrect(event.target);
        } else {
            alert('wrong choice')
            currentQuestion = randomQuestion();
            // nextQuestoin();
            wrongChoice();
            // selectedWrong(event.target)
        }
    })
}

// if correct add score
function correctChoice() {
    totalScore++;
    score.textContent = "Score: " + totalScore;
    if (currentQuestion !==null) {
    nextQuestoin();
    } else {
        gameOver();
    }
}
// if incorrect subtract time
function wrongChoice() {
    totalTime-=15;
    if (currentQuestion !==null) {
    nextQuestoin();
    } else {
        gameOver();
    }
}

// make game over 
function gameOver(){
questionArea.style.display = "none";
endOfGame.style.display = "block";

totalTime = 0;

};

// local storage for initals and score
submitBtn.addEventListener('click', function(event) {
    var userInfo = { 
        userIntial: initals.value.trim(),
        userScore: totalScore,
    };

    var lastInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (lastInfo === null) {
        lastInfo = [];
        lastInfo.push(userInfo);
    } else {
        lastInfo.push(userInfo);
    }

    localStorage.setItem('userInfo', JSON.stringify(lastInfo));

    displayHighScore();

});

// displays initals and scores from local storage
function displayHighScore() {
    highScoreh2.style.display = "block"

    var lastInfo = JSON.parse(localStorage.getItem('userInfo'));

    for (var i = 0; i < lastInfo.length; i++){
        var displayInfo = [];
        displayInfo = lastInfo[i];

        var ul = document.createElement('ul');
        highScore.appendChild(ul);

        var li = document.createElement('li');
        li.textContent = displayInfo.userIntial + " - Score: " + displayInfo.userScore;
        ul.appendChild(li);        

    }
}