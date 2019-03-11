var questions = [
    quest1 = {
        question: "Which type of tree was planted in Philadelphia for the U.S. bicentennial?",
        option1: "Moon Tree",
        option2: "Rainbow Eucalyptus Tree",
        option3: "Angel Oak Tree",
        option4: "Cherry Tree",
        correctAnswer: "Moon Tree",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest2 = {
        question: "Who’s brain is on display at the mutter museum?",
        option1: "Sigmund Freud",
        option2: "Albert Einstein",
        option3: "Marie Curie",
        option4: "William Siddis",
        correctAnswer: "Albert Einstein",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest3 = {
        question: "In what year did the Eagles help make the world’s largest cheesesteak?",
        option1: "1956",
        option2: "1995",
        option3: "1988",
        option4: "1997",
        correctAnswer: "1988",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest4 = {
        question: "Referred to as the “Mural Capital of the USA”, Philly is home to over how many outdoor murals?",
        option1: "1500",
        option2: "1000",
        option3: "500",
        option4: "2000",
        correctAnswer: "2000",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest5 = {
        question: "Which of the following was Philadelphia NOT the first to establish in America?",
        option1: "Medical School",
        option2: "Zoo",
        option3: "Professional Sports Team",
        option4: "Daily Newspaper",
        correctAnswer: "Professional Sports Team",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest6 = {
        question: "Which of Philly’s theaters is the oldest continually running theater of all English speaking countries in the world?",
        option1: "Walnut Street Theater",
        option2: "Academy of Music",
        option3: "Kimmel Center",
        option4: "Fox Theater",
        correctAnswer: "Walnut Street Theater",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest7 = {
        question: "Home to the first general-use computer, how much did this Philly-born device weigh?",
        option1: "18 pounds",
        option2: "54 pounds",
        option3: "36 pounds",
        option4: "27 pounds",
        correctAnswer: "27 pounds",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest8 = {
        question: "What was Philly’s very first business?",
        option1: "Beneficial Bank",
        option2: "Philadelphia Brewing Company",
        option3: "Garfield Refining",
        option4: "Geno's Cheesesteaks",
        correctAnswer: "Philadelphia Brewing Company",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest9 = {
        question: "City Hall was the tallest building in America until what year?",
        option1: "1908",
        option2: "1954",
        option3: "1923",
        option4: "1967",
        correctAnswer: "1908",
        userAnswer: "",
        alreadyAnswered: false
    },
    quest10 = {
        question: "Bartram's Garden, the oldest botanical garden in North America, consists of how many acres?",
        option1: "23",
        option2: "104",
        option3: "45",
        option4: "87",
        correctAnswer: "45",
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
var timerStarted = false;
var currentQues;

function resetGame() {
    gameStats.correct = 0;
    gameStats.incorrect = 0;
    gameStats.answered = 0;
    gameStats.unanswered = questions.length;
    timerStarted = false;
    time = 30;
    for (var i=0; i<questions.length; i++) {
        questions[i].alreadyAnswered = false;
        questions[i].userAnswer = "";
    }
}
$(document).ready(
    function buttonClick() {
        $("#playButton").click(playGame);
        $("#playAgain").click(playGame);
});
//game function
function playGame() {
    resetGame();
    $("#playButton").css("display", "none");
    $(".gameOver").css("display","none");
    $(".playGame").css("display","block");
    $("#timer").append(time + " seconds").css("display", "block");
    startClock();
    generateQues();
}
function startClock() {
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
    }
}
function generateQues() {
    $(".currentQuestion").css("border", "none");
    ranNumber = Math.floor(Math.random() * 10);
    currentQues = questions[ranNumber];
    if (!currentQues.alreadyAnswered) {
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
    } else {
        generateQues();
    }
}
function option1() {
    $(".currentQuestion").css("border", "none");
    $("#option1").css("border", "1px solid #000");
    currentQues.userAnswer = currentQues.option1;
    currentQues.alreadyAnswered = true;
    checkAnswer();
}
function option2() {
    $(".currentQuestion").css("border", "none");
    $("#option2").css("border", "1px solid #000");
    currentQues.userAnswer = currentQues.option2;
    currentQues.alreadyAnswered = true;
    checkAnswer();
}
function option3() {
    $(".currentQuestion").css("border", "none");
    $("#option3").css("border", "1px solid #000");
    currentQues.userAnswer = currentQues.option3;
    currentQues.alreadyAnswered = true;
    checkAnswer();
}
function option4() {
    $(".currentQuestion").css("border", "none");
    $("#option4").css("border", "1px solid #000");
    currentQues.userAnswer = currentQues.option4;
    currentQues.alreadyAnswered = true;
    checkAnswer();
}
function checkAnswer() {
    if (currentQues.userAnswer === currentQues.correctAnswer) {
       $("#result").text("You are correct!").css("display","block");
        gameStats.correct++;
        gameStats.answered++;
        gameStats.unanswered--;
    } else {
        $("#result").text("Nice try. The correct answer is: " + currentQues.correctAnswer + ".").css("display", "block");
        gameStats.incorrect++;
        gameStats.answered++;
        gameStats.unanswered--;
    }
    checkGameOver();
}
function checkGameOver() {
    if (gameStats.answered === 10) {
        var playTime = 30 - time;
        alert("Great Job! You answered every question in "+playTime+" seconds!");
        gameOver();
        clearInterval(intervalId);
    } else {
        setTimeout(generateQues, 1000);
    }    
}
function gameOver() {
    $("#correct").text("Correct Answers: "+gameStats.correct);
    $("#incorrect").text("Incorrect Answers: "+gameStats.incorrect);
    $("#unanswered").text("Unanswered: "+gameStats.unanswered);
    $(".playGame").css("display","none");
    $(".gameOver").css("display","block");
}