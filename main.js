const again = document.querySelector('.again')
const number = document.querySelector('.number')
const guess = document.querySelector('.guess')
const check = document.querySelector('.check')
const message = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const highScore = document.querySelector('.highscore')
const bgLoserModal = document.querySelector('.bg-loser-modal')
const modalWinWrapper = document.querySelector('.modal-win-wrapper')
const loserBtn = document.querySelector('.loser-btn')
const winBtn = document.querySelector('.winner-btn')
guess.focus()




let score = 20
let highscore = 0
let gameOver = true

// RANDOM

let random = Math.floor(Math.random() * 20 + 1)
console.log(random);

// EVENT
check.addEventListener('click', () => {
    guess.focus()
    if(score < 1){
        loseModal()
        let loseMusic = new Audio('lose.mp3')
        loseMusic.play()
    }else{
        if (guess.value && gameOver) {
            let inputValue = +guess.value
            if (inputValue === random) {
                gameOver = false
                message.textContent = 'You are win !!!';
                number.textContent = random
                winModal()
                let winnerMusic = new Audio('winner.mp3')
                winnerMusic.play()
                if (score > highscore) {
                    highscore = score
                    highScore.textContent = highscore
                }
                document.querySelector('body').style.background = '#60b347'
            } else if (inputValue > random) {
                message.textContent = 'to High';
                score--
                scoreEl.textContent = score
            } else if (inputValue < random) {
                message.textContent = 'to Low';
                score--
                scoreEl.textContent = score
            }
            guess.value = ''
        }else{
            message.textContent = 'No Number ?'
        }

    }
})
function loseModal(){
    bgLoserModal.classList.remove('hidden')
}

again.addEventListener('click', refresh)

function refresh(){
    score = 20
    scoreEl.textContent = '20'
    document.querySelector('body').style.background = '#222'
    message.textContent = 'Start guessing...'
    number.textContent = '?'
    guess.value = ''
    gameOver = true
    random = Math.floor(Math.random() * 20 + 1)
    console.log(random);
    modalWinWrapper.classList.add('hidden')
    bgLoserModal.classList.add('hidden')
}

// MODAL Events
function winModal(){
    modalWinWrapper.classList.remove('hidden')
}



loserBtn.addEventListener('click', refresh)
winBtn.addEventListener('click', refresh)
