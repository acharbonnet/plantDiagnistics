const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const result = document.getElementById('result');
const questionContainer = document.getElementById('question-set');
const question = document.getElementById('question');

// q: {text: '', answer1: {text: '', nextQuestion: ''}, answer2: {text: '', nextQuestion: ''}},

var qObject =
{
    q1: {text: 'Is your fruit sweet or sour?', answer1: {text: 'Sweet', nextQuestion: 'q2'}, answer2: {text: 'Sour', nextQuestion: 'q3'}},
    q2: {text: 'Is your fruit an apple', answer1: {text: 'Yes', nextQuestion: ''}, answer2: {text: 'No', nextQuestion: ''}},
    q3: {text: 'Is your fruit a lemon', answer1: {text: 'Yes', nextQuestion: ''}, answer2: {text: 'No', nextQuestion: ''}},
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
    setQuestion(qObject[currentQuestion].answer1.nextQuestion);
    currentQuestion = qObject[currentQuestion].answer1.nextQuestion;
}

option2.onclick = function() {
    setQuestion(qObject[currentQuestion].answer2.nextQuestion);
    currentQuestion = qObject[currentQuestion].answer2.nextQuestion;
}

/* option1.onclick = setQuestion(q2);
option2.onclick = setQuestion(q3); */