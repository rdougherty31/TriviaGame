// var questions = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10];
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
var questionsUsed = [];
var correct = 0;
var incorrect = 0;
var unaswered = questions.length-(correct + incorrect);
var timerStarted = false;
var time = 30;
var intervalId;
var ranNumber;

//create a "Play" button to begin game
$(document).ready(

//play game button onclick fxn
function buttonClick() {
    $("#playButton").click(playGame);
});

//game function
function playGame() {
    $("#playButton").css("display","none");
    
    //generate timer that counts down from 30 seconds & display on UI
    $("#timer").append(time+" seconds").css("display","block");
    startClock();

    //generate random question to display with 4 choices
    generateQues();
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
    if (!timerStarted) {
        intervalId = setInterval(countDown, 1000);
        timerStarted = true;
    }
}
function countDown() {
    if (time>0) {
        time--;
        $("#timer").text("Time Remaining: "+time+" seconds")
    }
}
function generateQues() {
    console.log("generating question");
    ranNumber = Math.floor(Math.random()*10);
    var currentQues = questions[ranNumber];
    console.log(currentQues);
    console.log(currentQues.question);
    $(".currentQuestion").css("display","block");
    $("#question").text(currentQues.question);
    $("#option1").text(currentQues.option1);
    $("#option2").text(currentQues.option2);
    $("#option3").text(currentQues.option3);
    $("#option4").text(currentQues.option4);
    $("#option1").click(function() {
        $(".currentQuestion").css("border","none");
        $("#option1").css("border","1px solid #000");
        currentQues.userAnswer = "A";
        console.log(currentQues.userAnswer);
        console.log(currentQues);
    });
    $("#option2").click(function() {
        $(".currentQuestion").css("border","none");
        $("#option2").css("border","1px solid #000");
        currentQues.userAnswer = "B";
        console.log(currentQues.userAnswer);
        console.log(currentQues);
    });
    $("#option3").click(function() {
        $(".currentQuestion").css("border","none");
        $("#option3").css("border","1px solid #000");
        currentQues.userAnswer = "C";
        console.log(currentQues.userAnswer);
        console.log(currentQues);
    });
    $("#option4").click(function() {
        $(".currentQuestion").css("border","none");
        $("#option4").css("border","1px solid #000");
        currentQues.userAnswer = "D";
        console.log(currentQues.userAnswer);
        console.log(currentQues);
    });
    console.log(currentQues);
    if (currentQues.userAnswer === currentQues.correctAnswer) {
        $("#result").text("You are correct!");
        correct++;
    } else {
        $("#result").text("Nice try. The correct answer is: " +currentQues.correctAns+".");
        incorrect--;
    }
    currentQues.alreadyAnswered = true;
}