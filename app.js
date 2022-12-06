let playerOneScore = document.querySelector('#playerOneScore');
let playerTwoScore = document.querySelector('#playerTwoScore');

const playerOnePoint = document.querySelector('#playerOnePoint');
const playerTwoPoint = document.querySelector('#playerTwoPoint');
const resetScore = document.querySelector('#resetScore');

let maxScore = document.querySelector('input');

playerOnePoint.addEventListener('click', () => {
    maxScore.setAttribute('disabled', true);
    let score = parseInt(playerOneScore.innerHTML);
    score++;
    playerOneScore.innerHTML = score;
    if(score === parseInt((maxScore).value)){
        playerOneScore.style.color = 'rgb(90, 204, 90)';
        playerTwoScore.style.color = 'rgb(219, 54, 54)';
        playerOnePoint.setAttribute('disabled', true);
        playerTwoPoint.setAttribute('disabled', true);
        playerOnePoint.classList.remove('active');
        playerTwoPoint.classList.remove('active');
    }
})

playerTwoPoint.addEventListener('click', () => {
    maxScore.setAttribute('disabled', true);
    let score = parseInt(playerTwoScore.innerHTML);
    score++;
    playerTwoScore.innerHTML = score;
    if(score === parseInt((maxScore).value)){
        playerTwoScore.style.color = 'rgb(90, 204, 90)';
        playerOneScore.style.color = 'rgb(219, 54, 54)';
        playerTwoPoint.setAttribute('disabled', true);
        playerOnePoint.setAttribute('disabled', true);
        playerOnePoint.classList.remove('active');
        playerTwoPoint.classList.remove('active');
    }
})

resetScore.addEventListener('click', () => {
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    playerOneScore.style.color = 'black';
    playerTwoScore.style.color = 'black';
    playerOnePoint.removeAttribute('disabled');
    playerTwoPoint.removeAttribute('disabled');
    maxScore.removeAttribute('disabled');
    playerOnePoint.classList.add('active');
    playerTwoPoint.classList.add('active');
})
