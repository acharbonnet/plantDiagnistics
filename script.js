const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const result = document.getElementById('result');

// function displayResult()

// option1.addEventListener('click', result)
const step2info1 = "It's text."
const step2info2 = "More text gracious"

// function nextStep(text) {
//     const elem = document.getElementById('result');
//     elem.textContent = text;
// }

// option1.addEventListener('click', nextStep(step2info));

option1.onclick = function() {
    result.textContent = step2info1;
}

option2.onclick = function() {
    result.textContent = step2info2;
}