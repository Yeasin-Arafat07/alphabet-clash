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