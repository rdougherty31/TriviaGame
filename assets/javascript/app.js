var questions = [
    quest1 = {
        question: "Question 1",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "A",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest2 = {
        question: "Question 2",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "B",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest3 = {
        question: "Question 3",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "C",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest4 = {
        question: "Question 4",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "D",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest5 = {
        question: "Question 5",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "A",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest6 = {
        question: "Question 6",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "B",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest7 = {
        question: "Question 7",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "C",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest8 = {
        question: "Question 8",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "D",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest9 = {
        question: "Question 9",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "A",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest10 = {
        question: "Question 10",
        option1: "A",
        option2: "B",
        option3: "C",
        option4: "D",
        correctAnswer: "B",
        userAnswer: "",
        alreadyAnswered: false
    }
];
var gameStats = {
    correct: 0,
    incorrect: 0,
    answered: 0,
    unanswered: questions.length
};
var intervalId;
var ranNumber;
var time = 30;
var correct = 0;
var incorrect = 0;
var timerStarted = false;
var currentQues;


// function resetGame() {
//     gameStats.correct = 0;
//     gameStats.incorrect = 0;
//     gameStats.answered = 0;
//     gameStats.unanswered = questions.length;
//     timerStarted = false;
//     time = 30;
// }
//create a "Play" button to begin game
$(document).ready(
    //play game button onclick fxn
    function buttonClick() {
        $("#playButton").click(playGame);
});
//game function
function playGame() {
    console.log("playGame fxn starting");
    //hide play button
    // resetGame();
    $("#playButton").css("display", "none");
    $(".gameOver").css("display","none");
    $(".playGame").css("display","block");
    //generate timer that counts down from 30 seconds & display on UI
    $("#timer").append(time + " seconds").css("display", "block");
    startClock();
    generateQues();
    // $("#playAgain").click(playGame);
    //generate random question to display with 4 choices
    //onclick of choice checks if userAnswer === correctAnswer
    //if correct, increases correct variable by 1
    //if incorrect, increases incorrect variable by 1
    //repeats this until time runs out
    //when time runs out, finds the number of unaswered questions and 
    //displays it on the UI along with the correct # answered & incorrect # answered

    //new game button appears
    // $("#playButton").css("display","block");
}
function startClock() {
    console.log("startClock fxn starting");
    if (!timerStarted) {
        intervalId = setInterval(countDown, 1000);
        timerStarted = true;
    }
}
function countDown() {
    if (time > 0 && gameStats.answered < 10) {
        time--;
        $("#timer").text("Time Remaining: " + time + " seconds");
    } else if (time === 0) {
        clearInterval(intervalId);
        alert("Time's Up!");
        gameOver();
        console.log(gameStats);
    }
}
function generateQues() {
    console.log("generating question");
    $(".currentQuestion").css("border", "none");
    ranNumber = Math.floor(Math.random() * 10);
    currentQues = questions[ranNumber];
    if (!currentQues.alreadyAnswered) {
       console.log("NOT ALREADY ANSWERED");
       console.log(currentQues);
       console.log(currentQues.question);
       console.log(currentQues.userAnswer);
        $("#result").css("display", "none");
        $(".currentQuestion").css("display", "block");
        $("#question").text(currentQues.question);
        $("#option1").text(currentQues.option1);
        $("#option2").text(currentQues.option2);
        $("#option3").text(currentQues.option3);
        $("#option4").text(currentQues.option4);
        $("#option1").unbind("click").click(option1);
        $("#option2").unbind("click").click(option2);
        $("#option3").unbind("click").click(option3);
        $("#option4").unbind("click").click(option4);
        console.log(currentQues);
    } else {
       console.log("ALREADY ANSWERED THIS QUESTION");
        generateQues();
    }
}
function option1() {
    $(".currentQuestion").css("border", "none");
    $("#option1").css("border", "1px solid #000");
    currentQues.userAnswer = "A";
    currentQues.alreadyAnswered = true;
    checkAnswer();
   console.log(currentQues.userAnswer);
   console.log(currentQues);
}
function option2() {
    $(".currentQuestion").css("border", "none");
    $("#option2").css("border", "1px solid #000");
    currentQues.userAnswer = "B";
    currentQues.alreadyAnswered = true;
    checkAnswer();
   console.log(currentQues.userAnswer);
   console.log(currentQues);
}
function option3() {
    $(".currentQuestion").css("border", "none");
    $("#option3").css("border", "1px solid #000");
    currentQues.userAnswer = "C";
    currentQues.alreadyAnswered = true;
    checkAnswer();
   console.log(currentQues.userAnswer);
   console.log(currentQues);
}
function option4() {
    $(".currentQuestion").css("border", "none");
    $("#option4").css("border", "1px solid #000");
    currentQues.userAnswer = "D";
    currentQues.alreadyAnswered = true;
    checkAnswer();
   console.log(currentQues.userAnswer);
   console.log(currentQues);
}
function checkAnswer() {
    console.log("checkAnswer fxn starting");
    if (currentQues.userAnswer === currentQues.correctAnswer) {
        $("#result").text("You are correct!");
       console.log("correct guess");
        gameStats.correct++;
        gameStats.answered++;
        gameStats.unanswered--;
       console.log(gameStats);
    } else {
        $("#result").text("Nice try. The correct answer is: " + currentQues.correctAnswer + ".").css("display", "block");
       console.log("wrong guess");
        gameStats.incorrect++;
        gameStats.answered++;
        gameStats.unanswered--;
       console.log(gameStats);
    }
    checkGameOver();
}
function checkGameOver() {
    if (gameStats.answered === 10) {
        var playTime = 30 - time;
        alert("Great Job! You answered every question in "+playTime+" seconds!");
        gameOver();
       console.log(gameStats);
    } else {
        setTimeout(generateQues, 1000);
    }    
}
function gameOver() {
    $("#correct").append(gameStats.correct);
    $("#incorrect").append(gameStats.incorrect);
    $("#unanswered").append(gameStats.unanswered);
    $(".playGame").css("display","none");
    $(".gameOver").css("display","block");
}
