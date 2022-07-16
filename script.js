const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const result = document.getElementById('result');
const questionContainer = document.getElementById('question-set');
const question = document.getElementById('question');

// q: {text: '', answer1: {text: '', nextQuestion: ''}, answer2: {text: '', nextQuestion: ''}},

var qObject =
{
    q1: {text: 'What issue does your plant have?', answer1: {text: "It's wilty", nextQuestion: 'q2'}, answer2: {text: 'Something else', nextQuestion: '', response: "This key may not be able to diagnose your issue. You can try posting to 'reddit.com/r/plantclinic'."}},
    q2: {text: "Does your plant perk up when you water it?", answer1: {text: 'Yes', nextQuestion: '', response: "Your plant is likely underwatered."}, answer2: {text: 'No', nextQuestion: 'q3'}},
    q3: {text: 'Does your pot have drainage?', answer1: {text: 'Yes', nextQuestion: '', response: "Water your plant when the top 2 inches of soil are dry."}, answer2: {text: 'No', nextQuestion: '', response: "Water your plant when it's amost completely dry."}},
}

function setQuestion(questionNumber) {
    // Setting question 1 on page load
    question.textContent = qObject[questionNumber].text;
    option1.textContent  = qObject[questionNumber].answer1.text;
    option2.textContent  = qObject[questionNumber].answer2.text;
  }
  

setQuestion('q1');
let currentQuestion = 'q1';


option1.onclick = function() {
    if (qObject[currentQuestion].answer1.response) {
        questionContainer.style.visibility = 'hidden';
        result.textContent = qObject[currentQuestion].answer1.response;
    } else {
        setQuestion(qObject[currentQuestion].answer1.nextQuestion);
        currentQuestion = qObject[currentQuestion].answer1.nextQuestion;
    }  
}

option2.onclick = function() {
    if (qObject[currentQuestion].answer2.response) {
        questionContainer.style.visibility = 'hidden';
        result.textContent = qObject[currentQuestion].answer2.response;
    } else {
        setQuestion(qObject[currentQuestion].answer2.nextQuestion);
        currentQuestion = qObject[currentQuestion].answer2.nextQuestion;
    } 
}

/* option1.onclick = setQuestion(q2);
option2.onclick = setQuestion(q3); */