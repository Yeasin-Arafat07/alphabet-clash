// function play(){
//     // hide the screen, add class hidden
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random',alphabet);
    //random alphabet to show
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    //set background color
    setBackgroundColorById(alphabet)
}