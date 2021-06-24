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
    correctAnswer: "<" ,
    incorrectAnswersArr: [".", "\\", "!"]
},
{
    question: "How to create a hyperlink in HTML?",
    correctAnswer: "<a href = \"www.javatpoint.com\"> javaTpoint.com <<a>",
    incorrectAnswersArr: ["<a url = \"www.javatpoint.com\" javaTpoint.com <a>", "<a link = \"www.javatpoint.com\"> javaTpoint.com <<a>", "<a> www.javatpoint.com <javaTpoint.com <a>"]
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
    incorrectAnswersArr: ["<Doctype HTML>", "<\Doctype html>", "<Doctype>"]
}]

/*
// example of the question object 
const exampleQuestionObj = {
    question: "What is CSS?",
    correctAnswer: "Cascading style sheet",
    incorrectAnswersArr: ["A JavaScript library","Creating C#","A type of browser"]
}

// example array of the posible aswers 
let exampleAnswerArr = ["Cascading style sheet", "A JavaScript library","Creating C#","A type of browser"]
*/

let playerScore = 0;
let timerValue = 90; //seconds
const startBtn = document.getElementById("start-btn");
const quizDiv = document.getElementById("quiz-box");
let currentQuestionIndex = 0;
let correctAnswerIndex;

function endGame(){
    //
}

function startTimer(){
    // 1000 ms = 1 second
    setInterval(decreaseTimer, 1000);
}
    


function getRandomIndex(numberOfIndexes){
    randomInd = Math.floor(Math.random() * numberOfIndexes);

    return randomInd;
}

function writeHTML(id, htmlToWrite){
    elToUpdate = document.getElementById(id);
    elToUpdate.innerHTML = htmlToWrite;
}

function getQuestion(){
  
    currentQuestionIndex  = getRandomIndex(questionsArr.length - 1);

    let questionObj = questionsArr[currentQuestionIndex];

    // remove current question from question array to
    // prevent repeating question
    questionsArr.splice(currentQuestionIndex, 1);

     return questionObj;
}


function prepareQuestionReturnAnswer(){
    
    let currentquestionObj = getQuestion();
    // create an array with correct 
    let answersArray = [];
    // create an array of incorrect answers
    let incorrectAnswersArr = currentquestionObj.incorrectAnswersArr

    // iterate over incorrect answers and add to answers array
    // leaving correct answer at index 0
    for (let i = 0; i < 4; i++){

        let currentIncorrectAnswerIndex = getRandomIndex(incorrectAnswersArr.length);
        let currentIncorrectAnwser = incorrectAnswersArr[currentIncorrectAnswerIndex];
        answersArray.push(currentIncorrectAnwser);
        incorrectAnswersArr.splice(currentIncorrectAnswerIndex, 1)
    }
    // place correct answer in random index
    // storing position in a global variable
    correctAnswerIndex = getRandomIndex(4);
    answersArray.splice(correctAnswerIndex, 0, currentquestionObj.correctAnswer)
    
    return answersArray;
    
}

function decreaseTimer(amount = 1){
    isTimerGreaterThenZero = timerValue > 0;
    // decrease timer
    if (!isTimerGreaterThenZero){
        writeHTML("timer", `time's up!`);
        endGame();
        return;
    }
    timerValue -= amount;
    writeHTML("timer", `${timerValue} second(s) left.`);
}


function changeScore(amountToChangeBy = 0){
    playerScore += amountToChangeBy;
    writeHTML("currentScore", `Current score: ${playerScore}`);

}
function saveScore(){
   // window.localStorage
}

function getHighScore(){
    highScore = 0; // access local storage window.localStorage
    return highScore;
}

function indexToLetter(index){
    let letter = "a";

    switch(index) {
        case 1 : 
            currentLetter = "b";
            break;
        case 2 : 
            currentLetter = "c";
            break;
        case 3 : 
            currentLetter = "d";
            break;

    }
    return letter;
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

function createQandAHTML(){
    //console.log("Called createQandAHTML")
    // startBtn.style.display = "none"; //to remove after testing
    //console.log(prepareQuestionReturnAnswer())
    let answerArr = prepareQuestionReturnAnswer();
    
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

function quizDivClicked(event){
    // answerSelected()
    console.log("quizDivClicked");
    console.log(event.target);
    splitId = event.target.id.split("-");
    console.log(splitId)
    

    if (splitId[0] == "letter" || splitId[0] == "string"){
        answerSelected(splitId[1])
    }
    
}

function answerSelected(letterClicked){

    //    createQandAHTML();
    // console.log("answerSelected", letterClicked)

    indexClicked = letterToIndex(letterClicked);
    console.log("index clickd", indexClicked);


    if (indexClicked == correctAnswerIndex){
        changeScore(1);
    }else{
        decreaseTimer(10);
    }
    


}

function startGame(){
    startBtn.style.display = "none";
    createQandAHTML();
    quizDiv.addEventListener("click", quizDivClicked)
    startTimer();
    changeScore();


}

startBtn.addEventListener("click", startGame);


