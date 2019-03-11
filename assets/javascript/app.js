//Global variables
var questions = [
    quest1 = {
        question: "Which type of tree was planted in Philadelphia for the U.S. bicentennial?",
        option1: "Moon Tree",
        option2: "Rainbow Eucalyptus Tree",
        option3: "Angel Oak Tree",
        option4: "Cherry Tree",
        correctAnswer: "Moon Tree",
        userAnswer: "",
        alreadyUsed: false
    },
    quest2 = {
        question: "Who’s brain is on display at the mutter museum?",
        option1: "Sigmund Freud",
        option2: "Albert Einstein",
        option3: "Marie Curie",
        option4: "William Siddis",
        correctAnswer: "Albert Einstein",
        userAnswer: "",
        alreadyUsed: false
    },
    quest3 = {
        question: "In what year did the Eagles help make the world’s largest cheesesteak?",
        option1: "1956",
        option2: "1995",
        option3: "1988",
        option4: "1997",
        correctAnswer: "1988",
        userAnswer: "",
        alreadyUsed: false
    },
    quest4 = {
        question: "Referred to as the “Mural Capital of the USA”, Philly is home to over how many outdoor murals?",
        option1: "1500",
        option2: "1000",
        option3: "500",
        option4: "2000",
        correctAnswer: "2000",
        userAnswer: "",
        alreadyUsed: false
    },
    quest5 = {
        question: "Which of the following was Philadelphia NOT the first to establish in America?",
        option1: "Medical School",
        option2: "Zoo",
        option3: "Professional Sports Team",
        option4: "Daily Newspaper",
        correctAnswer: "Professional Sports Team",
        userAnswer: "",
        alreadyUsed: false
    },
    quest6 = {
        question: "Which of Philly’s theaters is the oldest continually running theater of all English speaking countries in the world?",
        option1: "Walnut Street Theater",
        option2: "Academy of Music",
        option3: "Kimmel Center",
        option4: "Fox Theater",
        correctAnswer: "Walnut Street Theater",
        userAnswer: "",
        alreadyUsed: false
    },
    quest7 = {
        question: "Born in Philly, how much did the first general-use computer weigh?",
        option1: "18 pounds",
        option2: "54 pounds",
        option3: "36 pounds",
        option4: "27 pounds",
        correctAnswer: "27 pounds",
        userAnswer: "",
        alreadyUsed: false
    },
    quest8 = {
        question: "What was Philly’s very first business?",
        option1: "Beneficial Bank",
        option2: "Philadelphia Brewing Company",
        option3: "Garfield Refining",
        option4: "Geno's Cheesesteaks",
        correctAnswer: "Philadelphia Brewing Company",
        userAnswer: "",
        alreadyUsed: false
    },
    quest9 = {
        question: "City Hall was the tallest building in America until what year?",
        option1: "1908",
        option2: "1954",
        option3: "1923",
        option4: "1967",
        correctAnswer: "1908",
        userAnswer: "",
        alreadyUsed: false
    },
    quest10 = {
        question: "Bartram's Garden, the oldest botanical garden in North America, consists of how many acres?",
        option1: "23",
        option2: "104",
        option3: "45",
        option4: "87",
        correctAnswer: "45",
        userAnswer: "",
        alreadyUsed: false
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
var time = 10;
var timerStarted = false;
var currentQues;
var totalQuestions = 0;
//Reset function
function resetGame() {
    gameStats.correct = 0;
    gameStats.incorrect = 0;
    gameStats.answered = 0;
    gameStats.unanswered = 0;
    totalQuestions = 0;
    timerStarted = false;
    time = 10;
    for (var i=0; i<questions.length; i++) {
        questions[i].alreadyUsed = false;
        questions[i].userAnswer = "";
    }
}
//Once DOM ready, button onclick function will start game
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
    generateQues();

}
//functions for timer per questions
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
        gameStats.unanswered++;
        totalQuestions++;
        checkGameOver();
        alert("Time's Up! The correct answer is "+currentQues.correctAnswer+".");
    }
}
//Generates & displays a random question from questions array
//Sets onclick functions for each multiple choice button clicked
function generateQues() {
    $("#heading").css("display","block");
    $(".currentQuestion").css("border", "none");
    clearInterval(intervalId);
    timerStarted = false;
    time = 10;
    startClock();
    ranNumber = Math.floor(Math.random() * 10);
    currentQues = questions[ranNumber];
    if (!currentQues.alreadyUsed) {
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
        currentQues.alreadyUsed = true;
    } else {
        generateQues();
    }
}
function option1() {
    $(".currentQuestion").css("border", "none");
    $("#option1").css("border", "1px solid #000");
    currentQues.userAnswer = currentQues.option1;
    checkAnswer();
}
function option2() {
    $(".currentQuestion").css("border", "none");
    $("#option2").css("border", "1px solid #000");
    currentQues.userAnswer = currentQues.option2;
    checkAnswer();
}
function option3() {
    $(".currentQuestion").css("border", "none");
    $("#option3").css("border", "1px solid #000");
    currentQues.userAnswer = currentQues.option3;
    checkAnswer();
}
function option4() {
    $(".currentQuestion").css("border", "none");
    $("#option4").css("border", "1px solid #000");
    currentQues.userAnswer = currentQues.option4;
    checkAnswer();
}
//Checks if user chose the correct answer & increases/decreases gameStats accordingly
function checkAnswer() {
    if (currentQues.userAnswer === currentQues.correctAnswer) {
        $("#heading").css("display","none");
        $(".currentQuestion").css("display","none");
       $("#result").text("You are correct!").css("display","block");
        gameStats.correct++;
        gameStats.answered++;
    } else {
        $("#heading").css("display","none");
        $(".currentQuestion").css("display","none");
        $("#result").text("Nice try. The correct answer is: " + currentQues.correctAnswer + ".").css("display", "block");
        gameStats.incorrect++;
        gameStats.answered++;
    }
    totalQuestions++;
    checkGameOver();
}
//Checks if game is over
function checkGameOver() {
    if (totalQuestions === 10) {
        alert("Game Over!");
        gameOver();
        clearInterval(intervalId);
        timerStarted = false;
    } else {
        clearInterval(intervalId);
        timerStarted = false;
        setTimeout(generateQues, 2000);
    }    
}
//Displays user's stats if game is over as well as a play again button to play again
function gameOver() {
    $("#correct").text("Correct Answers: "+gameStats.correct);
    $("#incorrect").text("Incorrect Answers: "+gameStats.incorrect);
    $("#unanswered").text("Unanswered: "+gameStats.unanswered);
    $(".playGame").css("display","none");
    $(".gameOver").css("display","block");
}