function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getNumberElementById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const Value = parseInt(elementText);
    return Value;
}
function setNumberElementById (elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getElementTextId(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet (){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet  = alphabetString.split('');
    // console.log(alphabet);
    //get random number 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    
    const alpha = alphabet [index];
    // console.log(index, alpha);
    return alpha;
}