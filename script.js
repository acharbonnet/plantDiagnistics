//const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const result = document.getElementById('result');
const questionContainer = document.getElementById('question-set');
const question = document.getElementById('question');
const startOver = document.getElementById("startOver");
const plantSelect = document.getElementById("plant-select");
//I can probably turn all these buttons into objects that hold plant type and then write one function about it.
const tropicalButton = document.getElementById("tropical");
const temperateButton = document.getElementById("temperate");
const succulentButton = document.getElementById("succulent");
const herbButton = document.getElementById("herb");
const declarePlant = document.getElementById("declare-plant");
let plantType = "";

// q: {text: '', answer1: {text: '', nextQuestion: ''}, answer2: {text: '', nextQuestion: ''}},

const underwateredSucc = "Succulents don't like to sit in moist soil, and prefer to dry out completely between watering. But even they like to get a good drink on a regular basis. If the potting mix is so dry that water beads up and rolls off, set the whole pot in a sink full of water. You may have to put something heavy on top to keep in submerged. Give it 30 minutes before letting it drain. You can water exactly like this every time. If the plant doesn't perk up after this, underwatering isn't your problem."


var currentPlant = {
    type: 0,
    schedule: true,
    currentMoisture: 0
}




var qObject =
{
    q1: {text: 'What issue does your plant have?', answer1: {text: "It's wilty", nextQuestion: 'q2'}, answer2: {text: 'Something else', nextQuestion: '', response: "This key may not be able to diagnose your issue. You can try posting to 'reddit.com/r/plantclinic'."}},
    q2: {text: "Does your plant perk up when you water it?", answer1: {text: 'Yes', nextQuestion: '', response: "Your plant is likely underwatered."}, answer2: {text: 'No', nextQuestion: 'q3'}},
    q3: {text: 'It seems as though your plant may be getting too much water. Does your pot have drainage?', answer1: {text: 'Yes', nextQuestion: '', response: "Water your plant when the top 2 inches of soil are dry."}, answer2: {text: 'No', nextQuestion: '', response: "Water your plant when it's amost completely dry."}},
    //I'm beginning to think I need to ask the user what kind of plant they have first.
}

var qTexts = [
    "Do you water on a schedule?",
    "Stick your finger in soil at least two inches. At what point do you feel moisture?",
    'It seems as though your plant may be getting too much water. Does your pot have drainage?'
]


var buttonArray = [
    "Completely Dry", "Wet about an inch down", "Completely wet"
]

let currentQuestion = 0;

function setQuestion(currentQuestion) {
    // Setting question 1 on page load
    question.textContent = qTexts[currentQuestion];
    $("#options").empty();
    switch(currentQuestion) {
        case 0:
            $("#options").append("<button value=0>Yes</button>");
            $("#options").append("<button value=1>No</button>");
            break;
        case 1:
            for (button in buttonArray) {
                $("#options").append("<button value="+button+">"+buttonArray[button]+"</button>")
            } 
        default:
            alert("I shouldn't be here!!!!")
    }

    
  }

function answerHandler(answer) {
    switch(currentQuestion) {
        case 0:
            if (answer == 0) {
                currentPlant.schedule = true;
                currentQuestion++;
                setQuestion(currentQuestion);
            } else {
                currentPlant.schedule = false;
                currentQuestion++;
                currentQuestion++;
                setQuestion(currentQuestion);
            }
    }
}

//I realize this isn't very dry, it's largely a proof of concept.



$('#plant-types').change(function() {
    currentPlant.type = $('#plant-types').val()
    alert(currentPlant.type)
})


setQuestion(currentQuestion);




$("#options button").click(function() {
    answerHandler($('#options button').attr("value"))
})


$("#startOver").click(function() {
    currentQuestion = 0;
    setQuestion(currentQuestion);
})

/* option1.onclick = setQuestion(q2);
option2.onclick = setQuestion(q3); */