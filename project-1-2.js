var prompt = document.getElementById("prompt");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }
 switch(getRandomInt(2)) {
    case 0:
        var prompt = document.getElementById("prompt");
        prompt.innerHTML = "zero";
        break;
    case 1:
        var prompt = document.getElementById("prompt");
        prompt.innerHTML = "one";
        break;
 }