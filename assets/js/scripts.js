// An array of all the questions 
const questionsArr =[
    {question: "HTML stands for?",
    correctAnswer: "Hyper Text Markup Language",
    incorrectAnswersArr: ["High Text Markup Language", "Hyper Tabular Markup Language", "None of these"]
},
{
    question: "Which of the following tag is used to mark a beginning of paragraph?",
    correctAnswer: "<P>",
    incorrectAnswersArr: ["<TD>", "<br>", "<TR>"]
},
{
    question: "From which tag descriptive list starts?",
    correctAnswer: "<DL>",
    incorrectAnswersArr: ["<DS>", "<LL>", "<DD>"]
},
{
    question: "Correct HTML tag for the largest heading is",
    correctAnswer: "<h1>",
    incorrectAnswersArr: ["<head>", "<h6>", "<heading>"]
},
{
    question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
    correctAnswer: "<ul>",
    incorrectAnswersArr: ["<ol>", "<li>", "<i>"]
},
{
    question: "Which character is used to represent the closing of a tag in HTML?",
    correctAnswer: "/" ,
    incorrectAnswersArr: [".", "<", "!"]
},
{
    question: "How to create a hyperlink in HTML?",
    correctAnswer: "<a href = \"www.realalgorithm.co.uk/\"> realalgorithm.co.uk/ <a>",
    incorrectAnswersArr: ["<a url = \"www.realalgorithm.co.uk/\" realalgorithm.co.uk/ <a>", "<a link = \"www.realalgorithm.co.uk/\"> realalgorithm.co.uk/ <<a>", "<a> www.realalgorithm.co.uk/ <realalgorithm.co.uk/ <a>"]
},
{
    question: "How to create an ordered list (a list with the list items in numbers) in HTML?",
    correctAnswer: "<ol>",
    incorrectAnswersArr: ["<ul>", "<li>", "<i>"]
},
{
    question: "How to insert an image in HTML?",
    correctAnswer: "<img src = \"image.png\" >",
    incorrectAnswersArr: ["<img href = \"image.png\" >", "<img url = \"image.png\" >", "<img link = \"image.png\" >"]
},
{
    question: "How to create a checkbox in HTML?",
    correctAnswer: "<input type = \"checkbox\">",
    incorrectAnswersArr: ["<input type = \"button\">", "<checkbox>", "<input type = \"check\">"]
},
{
    question: "Which of the following is the paragraph tag in HTML?",
    correctAnswer: "<p>",
    incorrectAnswersArr: ["<b>", "<pre>", "None of these."]
},
{
    question: "A program in HTML can be rendered and read by -",
    correctAnswer: "Web browser",
    incorrectAnswersArr: ["Server", "Interpreter", "None of these"]
},
{
    question: "The tags in HTML are -",
    correctAnswer: "not case-sensitive",
    incorrectAnswersArr: ["in upper case", "case sensitive", "in lowercase"]
},
{
    question: "Which of the following is the root tag of the HTML document?",
    correctAnswer: "<html>",
    incorrectAnswersArr: ["<body>", "<head>", "<title>"]
},
{
    question: "In HTML5, which of the following tag is used to initialize the document type?",
    correctAnswer: "<!DOCTYPE html>",
    incorrectAnswersArr: ["<Doctype HTML>", "<\\Doctype html>", "<Doctype>"]
}]

// for testing
/*
let emptyQuestionObj = {
    question: "",
    correctAnswer: "",
    incorrectAnswersArr: ["", "", ""]
}
*/

// Declaring variables

let playerScore = 0;
let timerValue = 90; //seconds
const startBtn = document.getElementById("start-btn");
const quizDiv = document.getElementById("quiz-box");
let currentQuestionIndex;
let correctAnswerIndex;
let invervalTimer;
const highScoreDiv = document.getElementById("highscore");


function startTimer(){
    // 1000 ms = 1 second
   timerInterval = setInterval(decreaseTimer, 1000);
}

function stopTimer(){

    clearInterval(timerInterval);
}

function refreshQuiz() {
    location.reload();
}

function getRandomIndex(numberOfIndexes){
    randomInd = Math.floor(Math.random() * numberOfIndexes);

    return randomInd;
}

function writeHTML(id, htmlToWrite){
    elToUpdate = document.getElementById(id);
    elToUpdate.innerHTML = htmlToWrite;
}

function letterToIndex(letter){
    let index;

    switch(letter) {
        case "a":
            index = 0;
            break;
        case "b" : 
            index = 1;
            break;
        case "c" : 
            index = 2;
            break;
        case "d" : 
            index = 3;
            break;
        default:
            break;
    }
    return index;
}

function openSaveBox(){

    // clear div
    quizDiv.innerHTML = "";

    // give player their final score
    let saveH1 = document.createElement("h1");
    saveH1.textContent = `You scored ${playerScore}
    would you like to save?`
    quizDiv.append(saveH1);

    //container for answer to save or not
    let contYesNo = document.createElement("div");
    contYesNo.id= "container-y-n";
    quizDiv.appendChild(contYesNo);

    // button to load form to save score
    let btnSave = document.createElement("button");
    btnSave.id= "save-score";
    btnSave.textContent = "Yes"
    contYesNo.appendChild(btnSave);

    // refeshesh the page / quiz
    let btnRefresh = document.createElement("button");
    btnRefresh.id= "btn-refresh";
    btnRefresh.textContent = "No"
    contYesNo.appendChild(btnRefresh);

    
    btnSave.addEventListener("click", openRecordScore);
    btnRefresh.addEventListener("click", refreshQuiz);

}

function endGame(){

    openSaveBox();
    stopTimer();

}

function saveScore(event){
    
    event.preventDefault();

    let highScoresArr = getHighScores();
    let playerInitals = document.getElementById("intials").value;

    // add to begining of array so later when iterating the last score interated over (with increasing index) will
    // be the oldest therefore if 2 high scores are the same the oldest will be kept
    highScoresArr.unshift([playerScore, playerInitals]);

    // using local storage to store string representing an array of high scores.
    localStorage.setItem("highScores", JSON.stringify(highScoresArr));


    refreshQuiz();

    
}
    
function openRecordScore(){

    // Create amend append
    // new main div
    let mainDiv = document.getElementById("main");
    mainDiv.innerHTML = "";

    // new container for form
    let divRecordIntials = document.createElement("div")
    divRecordIntials.setAttribute("id", "div-record-highscore")
    mainDiv.appendChild(divRecordIntials);
    
    // new form to take input for players initials
    let recordScoreForm = document.createElement("form");
    recordScoreForm.setAttribute("action", "#")
    divRecordIntials.appendChild(recordScoreForm);

    // label of input for players initials
    let recordScoreLabel = document.createElement("label");
    recordScoreLabel.setAttribute("for", "intials");
    recordScoreLabel.textContent = "Please enter you intials";
    recordScoreForm.appendChild(recordScoreLabel)

    // label of input for players initials
    let recordScoreInput = document.createElement("input");
    recordScoreInput.setAttribute("id", "intials");
    recordScoreInput.setAttribute("name", "intials");
    recordScoreInput.setAttribute("type", "text");
    recordScoreInput.setAttribute("maxlength", "3");
    recordScoreForm.appendChild(recordScoreInput);

    // submit button for form
    let recordScoreButton = document.createElement("input");
    recordScoreButton.setAttribute("type", "submit");
    recordScoreButton.setAttribute("id", "intitals-submit");
    recordScoreButton.setAttribute("value", "Submit");
    recordScoreForm.appendChild(recordScoreButton);

    recordScoreForm.addEventListener("submit", saveScore);
}

function setQuestion(){
    // remove last question to stop repeating questions
    questionsArr.splice(currentQuestionIndex, 1);
    
    //select a random question
    currentQuestionIndex  = getRandomIndex(questionsArr.length - 1);

    // leave on in array to prevent bugs on calls made after last question removed
    if (questionsArr.length == 1){
        endGame();

    }  
}

function prepareQuestionReturnAnswer(){

    setQuestion()
    let currentquestionObj = questionsArr[currentQuestionIndex];
    // create an array with correct 
    let answersArray = [];
    // create an array of incorrect answers
    let incorrectAnswersArr = currentquestionObj.incorrectAnswersArr

    // iterate over incorrect answers and add to answers array
    // leaving correct answer at index 0
    for (let i = 0; i < 3; i++){

        answersArray.unshift(incorrectAnswersArr[i])
        
    }
    // place correct answer in random index
    // storing position in a global variable
    correctAnswerIndex = getRandomIndex(4);
    answersArray.splice(correctAnswerIndex, 0, currentquestionObj.correctAnswer)

    return answersArray;
    
}

function decreaseTimer(amount = 1){

    // decrease to zero when timer to deducted is greater than current time left

    if (amount > timerValue){
        timerValue = 0;
    }else{
    timerValue -= amount;
    }

    isTimerGreaterThenZero = timerValue > 0;
    // decrease timer
    
    if (!isTimerGreaterThenZero){
        writeHTML("timer", `time's up!`);
        endGame();
        return;
    }
    writeHTML("timer", `${timerValue} second(s) left.`);
}

function changeScore(amountToChangeBy = 0){

    playerScore += amountToChangeBy;
    writeHTML("currentScore", `Current score: ${playerScore}`);

}

function getHighScores(){

    // get high scores from local storage
    let highScores = JSON.parse(localStorage.getItem("highScores"));

    // check to see if score has been saved previously
    // if not set to an empty array
    if (!highScores){

        highScores = [];
        localStorage.setItem("highScores", JSON.stringify(highScores)); 
        
    }
  
    return highScores;
}

function createQandAHTML(){
 
    let answerArr = prepareQuestionReturnAnswer();
    // clear previous question
    quizDiv.innerHTML = "";
    
    let question = questionsArr[currentQuestionIndex].question; 
    // create, ammend, append

    // question
    questionH1 = document.createElement("h1");
    questionH1.textContent = question;
    quizDiv.appendChild(questionH1);

    // answers

    // div to contain all the containers for the answers
    answersDiv =  document.createElement("div");
    answersDiv.id = "answers-div";
    quizDiv.appendChild(answersDiv);
    currentAnswersDiv = document.getElementById("answers-div");
    // loop for each answer
    // Limit to 4 answers

    for (let i = 0;/* i < answerArr.length &&*/ i < 4; i++){
        
        // Answer letter depending on i

        let currentLetter = "A";

        switch(i) {
            case 1 : 
                currentLetter = "B";
                break;
            case 2 : 
                currentLetter = "C";
                break;
            case 3 : 
                currentLetter = "D";
                break;

        }

        // Add the container for the answers
        let answerContainer = document.createElement("div");
        answerContainer.className = "answer-container";
        answerContainer.id = `answer-container-${currentLetter.toLowerCase()}`;
        currentAnswersDiv.appendChild(answerContainer);

        // create referance to newest container
        currentAnswerContainer = document.getElementById(`answer-container-${currentLetter.toLowerCase()}`);

        // Answers letter div
        let answerLetter = document.createElement("div");
        answerLetter.className = "answer-letter shadow";
        answerLetter.id = `letter-${currentLetter.toLowerCase()}`
        answerLetter.textContent = currentLetter;
        currentAnswerContainer.appendChild(answerLetter);

        // Answers string div
        let currentAnswerString = answerArr[i];
        let answerString = document.createElement("div");
        answerString.className = "answer-string";
        answerString.id = `string-${currentLetter.toLowerCase()}`
        answerString.textContent = currentAnswerString;
        currentAnswerContainer.appendChild(answerString);
    }
    

}

function answerSelected(letterClicked){

    indexClicked = letterToIndex(letterClicked);

    if (indexClicked == correctAnswerIndex){
        changeScore(1);
    }else{
        decreaseTimer(10);
    }
    
    createQandAHTML()


}

function quizDivClicked(event){

    splitId = event.target.id.split("-");

    if (splitId[0] == "letter" || splitId[0] == "string") {
        answerSelected(splitId[1])
    }
    // bug fix click on incorrect answer after timer hit 0
    if (timerValue <= 0){
        endGame();
    }
    
}

function updateCurrentHighScore(){

    highScoresArr = getHighScores();
    let tempHighScore = 0;
    let tempHighScorePlayer = "";
    if (highScoresArr.length != 0){
        for (let i in highScoresArr){
            if (highScoresArr[i][0] >= tempHighScore){
                tempHighScore = highScoresArr[i][0];
                tempHighScorePlayer = highScoresArr[i][1];
            }
        }

        highScoreDiv.innerHTML = `High score: ${tempHighScore} recorded by ${tempHighScorePlayer}`;
    }
}

function startGame(){

    startBtn.style.display = "none";
    createQandAHTML();
    
    quizDiv.addEventListener("click", quizDivClicked)
    startTimer();
    changeScore();


}

updateCurrentHighScore();
startBtn.addEventListener("click", startGame);


