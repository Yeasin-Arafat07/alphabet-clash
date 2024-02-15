// function play(){
//     // hide the screen, add class hidden
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('plyer pressed', playerPressed);

    //play want to stop play
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedElement = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedElement);

    //check matched or not
    if(playerPressed === expectedElement){
        console.log('you got a point');

        const currentScore = getNumberElementById('current-score');
        const updateScore = currentScore + 1 ;
        setNumberElementById('current-score', updateScore);


        //----------------------------------------
        //update score
        //get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // //increase the score the one
        // const newScore = currentScore + 1;

        // //show the updated score
        // currentScoreElement.innerText = newScore;
        //start a new round
        removeBackgroundColorById(expectedElement)
        continueGame();
    }
    else{
        console.log('O no try again');
        const currentLife = getNumberElementById('current-life');
        const updatedLife = currentLife - 1;
        setNumberElementById('current-life', updatedLife);
        if(updatedLife === 0){
            gameOver()
        }

        //-------------------------------
        //get the current life score
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText); 
        // //reduce the new life
        // const newLife = currentLife - 1;
        // // display the updated life 
        // currentLifeElement.innerText = newLife
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random',alphabet);
    //random alphabet to show
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    //set background color
    setBackgroundColorById(alphabet)
}
function play(){
    //hide everything without playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    //reset score and life
    setNumberElementById('current-life', 5);
    setNumberElementById('current-score', 0);
    continueGame()
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //get finalResult
    const finalResult = getNumberElementById('current-score');
    console.log(finalResult);
    setNumberElementById('final-result', finalResult);

    //clear last highlighted alphabet
    const currentAlphabet = getElementTextId('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
