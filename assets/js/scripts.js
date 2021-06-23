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

//example of the question object 
const exampleQuestionObj = {
    question: "What is CSS?",
    correctAnswer: "Cascading style sheets",
    incorrectAnswersArr: ["A JavaScript library","Creating C#","A type of browser"]
}

let playerScore = 0;
let timerValue = 90; //seconds

function endGame(){
    //
}

function startTimer(){
    //while loop for timer
    while(timerValue > 0){
        setInterval(decreaseTimer, 1000);
    }
    endGame();
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
    let questionIndex = getRandomIndex(questionsArr.length);
    let questionObj = questionsArr[questionIndex];

    return questionObj;
}

function prepareQuestion(){
    
}

function decreaseTimer(amount = 1){
    // decrease timer
    timerValue -= amount;
    writeHTML("timer", `${timerValue} seconds left.`)
}


function changeScore(amountToChangeBy){
    playerScore += amountToChangeBy;
}
function saveScore(){
   // window.localStorage
}

function getHighScore(){
    highScore = 0; // access local storage window.localStorage
    return highScore;
}

function createQandAHTML(){
    // create, ammend, append
}

function displayQandA(){
    // update questions and posible answers
}




