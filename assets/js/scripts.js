// An array of all the questions 
const questionsArr =[{
    question: "HTML stands for?",
    correctAnswer: "Hyper Text Markup Language",
    incorrectAnswersArr: ["High Text Markup Language", "Hyper Tabular Markup Language", "None of these"]
},
{
    question: "Which of the following tag is used to mark a beginning of paragraph?",
    correctAnswer: "&lt;P&gt;",
    incorrectAnswersArr: ["&lt;TD&gt;", "&lt;br&gt;", "&lt;TR&gt;"]
},
{
    question: "From which tag descriptive list starts?",
    correctAnswer: "&lt;DL&gt;",
    incorrectAnswersArr: ["&lt;DS&gt;", "&lt;LL&gt;", "&lt;DD&gt;"]
},
{
    question: "Correct HTML tag for the largest heading is",
    correctAnswer: "D&lt;h1&gt;",
    incorrectAnswersArr: ["&lt;head&gt;", "&lt;h6&gt;", "&lt;heading&gt;"]
},
{
    question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
    correctAnswer: "&lt;ul&gt;",
    incorrectAnswersArr: ["&lt;ol&gt;", "&lt;li&gt;", "&lt;i&gt;"]
},
{
    question: "Which character is used to represent the closing of a tag in HTML?",
    correctAnswer: "&lt;" ,
    incorrectAnswersArr: [".", "&bsol;", "!"]
},
{
    question: "How to create a hyperlink in HTML?",
    correctAnswer: "&lt;a href = &quot;www.javatpoint.com&quot;&gt; javaTpoint.com &lt;&lt;a&gt;",
    incorrectAnswersArr: ["&lt;a url = &quot;www.javatpoint.com&quot; javaTpoint.com &lt;a&gt;", "&lt;a link = &quot;www.javatpoint.com&quot;&gt; javaTpoint.com &lt;&lt;a&gt;", "&lt;a&gt; www.javatpoint.com &lt;javaTpoint.com &lt;a&gt;"]
},
{
    question: "How to create an ordered list (a list with the list items in numbers) in HTML?",
    correctAnswer: "&lt;ol&gt;",
    incorrectAnswersArr: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;i&gt;"]
},
{
    question: "How to insert an image in HTML?",
    correctAnswer: "&lt;img src = &quot;image.png&quot; &lt;&gt;",
    incorrectAnswersArr: ["&lt;img href = &quot;image.png&quot; &lt;&gt;", "&lt;img url = &quot;image.png&quot; &lt;&gt;", "&lt;img link = &quot;image.png&quot; &lt;&gt;"]
},
{
    question: "How to create a checkbox in HTML?",
    correctAnswer: "&lt;input type = &quot;checkbox&quot;&gt;",
    incorrectAnswersArr: ["&lt;input type = &quot;button&quot;&gt;", "&lt;checkbox&gt;", "&lt;input type = &quot;check&quot;&gt;"]
},
{
    question: "Which of the following is the paragraph tag in HTML?",
    correctAnswer: "&lt;p&gt;",
    incorrectAnswersArr: ["&lt;b&gt;", "&lt;pre&gt;", "None of these."]
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
    correctAnswer: "&lt;html&gt;",
    incorrectAnswersArr: ["&lt;body&gt;", "&lt;head&gt;", "&lt;title&gt;"]
},
{
    question: "In HTML5, which of the following tag is used to initialize the document type?",
    correctAnswer: "&lt;!DOCTYPE html&gt;",
    incorrectAnswersArr: ["&lt;Doctype HTML&gt;", "&lt;\Doctype html&gt;", "&lt;Doctype&gt;"]
}]

// example of the question object 
const exampleQuestionObj = {
    question: "What is CSS?",
    correctAnswer: "Cascading style sheet",
    incorrectAnswersArr: ["A JavaScript library","Creating C#","A type of browser"]
}

// example array of the posible aswers 
let exampleAnswerArr = ["Cascading style sheet", "A JavaScript library","Creating C#","A type of browser"]


let playerScore = 0;
let timerValue = 90; //seconds
const startBtn = document.getElementById("start-btn");
const quizDiv = document.getElementById("quiz-box");
let currentQuestionIndex = 0;

function endGame(){
    //
}

function startTimer(){
    // 1000 ms = 1 second
    setInterval(decreaseTimer, 1000);
}
    


function getRandomIndex(numberOfIndexes){
    randomInd = Math.floor(Math.random() * numberOfIndexes);

    return numberOfIndexes;
}

function writeHTML(id, htmlToWrite){
    elToUpdate = document.getElementById(id);
    elToUpdate.innerHTML = htmlToWrite;
}

function getQuestion(){
    currentQuestionIndex  = getRandomIndex(questionsArr.length);
    let questionObj = questionsArr[currentQuestionIndex];
    

    return questionObj;
}

function prepareQuestion(){


    
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

function createQandAHTML(){
    startBtn.style.display = "none"; //to remove after testing
    let question = exampleQuestionObj.question; 
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

    for (let i = 0; i < exampleAnswerArr.length && i < 4; i++){
        
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
        let currentAnswerString = exampleAnswerArr[i];
        let answerString = document.createElement("div");
        answerString.className = "answer-string";
        answerString.id = `string-${currentLetter.toLowerCase()}`
        answerString.textContent = currentAnswerString;
        currentAnswerContainer.appendChild(answerString);
    }

}

function displayQandA(){
    // update questions and posible answers
}

function startGame(){
    startBtn.style.display = "none";
    createQandAHTML();
    startTimer();
    changeScore();


}

startBtn.addEventListener("click", startGame);

