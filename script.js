const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const result = document.getElementById('result');
const questionContainer = document.getElementById('question-set');
const stage = document.getElementById('stage-name');

// function displayResult()

// option1.addEventListener('click', result)

// function nextStep(text) {
//     const elem = document.getElementById('result');
//     elem.textContent = text;
// }

// option1.addEventListener('click', nextStep(step2info));

option1.onclick = function() {
    stage.textContent = 'stage 2A';
    option1.textContent = 'option 3';
    // document.getElementById("stage2a").style.display="block";
}

option2.onclick = function() {
    result.textContent = "We have text ladies and gentlemen";
}