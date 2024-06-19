var prompt = document.getElementById("prompt");
var question = document.getElementById("question");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var percentage = getRandomInt(100)
var questionText = 'percentage equals:' + percentage
question.innerHTML = questionText;
if (percentage <= 75){
    promptText = 'HIT'
    prompt.innerHTML = promptText;
}
    
else{
    promptText = 'MISS'
    prompt.innerHTML = promptText;
}
        
