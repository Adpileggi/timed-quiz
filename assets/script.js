var time = document.querySelector(".time");
var score = document.querySelector(".score");
var question = document.querySelector(".question");
var ans1 = document.querySelector(".answer-1");
var ans2 = document.querySelector(".answer-2");
var ans3 = document.querySelector(".answer-3");
var ans4 = document.querySelector(".answer-4");
var highScore = document.querySelector(".highscore");

// make timer


    // allowe 90 seconds for quiz
function countdown() {
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
