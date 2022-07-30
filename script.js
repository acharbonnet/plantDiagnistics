const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const result = document.getElementById('result');
const questionContainer = document.getElementById('question-set');
const question = document.getElementById('question');
const startOver = document.getElementById("startOver");
const plantSelect = document.getElementById("plant-select");
//I can probably turn all these buttons into objects that hold plant type and then write one function about it.

// const tropicalButton = document.getElementById("tropical");
// const temperateButton = document.getElementById("temperate");
// const succulentButton = document.getElementById("succulent");
// const herbButton = document.getElementById("herb");
// const declarePlant = document.getElementById("declare-plant");
let plantType = "";

function createPlantType(plantType, waterNeeds, waterInstructions) {
    return {
        plantType: plantType,
        waterNeeds: waterNeeds,
        waterInstructions: waterInstructions,
        getButton() {
            return document.getElementById(plantType);
        }
    }
}

const tropical = createPlantType("tropical", "more", "Water when the top inch or two of potting mix is dry.",)
const temperate = createPlantType("temperate", "more", "Water when the top 2-3 inches of potting mix are dry.")
const succulent = createPlantType("succulent", "less", "Water when the potting mix is completely dry.")
const herb = createPlantType("herb", "more","Water when the top 2-3 inches of potting mix are dry.")


// q: {text: '', answer1: {text: '', nextQuestion: ''}, answer2: {text: '', nextQuestion: ''}},

const underwateredSucc = "Succulents don't like to sit in moist soil, and prefer to dry out completely between watering. But even they like to get a good drink on a regular basis. If the potting mix is so dry that water beads up and rolls off, set the whole pot in a sink full of water. You may have to put something heavy on top to keep in submerged. Give it 30 minutes before letting it drain. You can water exactly like this every time. If the plant doesn't perk up after this, underwatering isn't your problem."




var qObject =
{
    q1: {text: 'What issue does your plant have?', answer1: {text: "It's wilty", nextQuestion: 'q2'}, answer2: {text: 'Something else', nextQuestion: '', response: "This key may not be able to diagnose your issue. You can try posting to 'reddit.com/r/plantclinic'."}},
    q2: {text: "Does your plant perk up when you water it?", answer1: {text: 'Yes', nextQuestion: '', response: "Your plant is likely underwatered."}, answer2: {text: 'No', nextQuestion: 'q3'}},
    q3: {text: 'It seems as though your plant may be getting too much water. Does your pot have drainage?', answer1: {text: 'Yes', nextQuestion: '', response: "Water your plant when the top 2 inches of soil are dry."}, answer2: {text: 'No', nextQuestion: '', response: "Water your plant when it's amost completely dry."}},
    //I'm beginning to think I need to ask the user what kind of plant they have first.
}

function setQuestion(questionNumber) {
    // Setting question 1 on page load
    question.textContent = qObject[questionNumber].text;
    option1.textContent  = qObject[questionNumber].answer1.text;
    option2.textContent  = qObject[questionNumber].answer2.text;

  }

function setPlantType()

//I realize this isn't very dry, it's largely a proof of concept.
// temperateButton.onclick = function() {
//     declarePlant.innerHTML = "Your plant is <b>Temperate</b>"
//     plantType = "More water";
//     alert(plantType);
// }
// tropicalButton.onclick = function() {
//     declarePlant.innerHTML = "Your plant is <b>Tropical</b>"
//     plantType = "More water";
//     alert(plantType);
// }
// succulentButton.onclick = function() {
//     declarePlant.innerHTML = "Your plant is <b>Succulent</b>"
//     plantType = "Less water";
//     alert(plantType);
// }
// herbButton.onclick = function() {
//     declarePlant.innerHTML = "Your plant is <b>an Herb</b>"
//     plantType = "More water";
//     alert(plantType);
// }
let plantTypeSelection = "";

function plantUserInput() {

};


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

startOver.onclick = function() {
    questionContainer.style.visibility = "visible";
    currentQuestion = "q1";
    setQuestion(currentQuestion);
}

/* option1.onclick = setQuestion(q2);
option2.onclick = setQuestion(q3); */