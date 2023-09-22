let message = document.querySelector('.message')
let numberInput = document.querySelector('.numberInput')
let secretNum = Math.trunc(Math.random()*20)+1
let scoreElem = document.querySelector('.score')
document.querySelector('.check').addEventListener('click', 
function() {
    const userNum = Number(numberInput.value)
    let score = Number(scoreElem.textContent)
    console.log(score);
    if(score>=1 && score<=5 && userNum!==secretNum) {
        score--
        console.log(score);
        scoreElem.textContent = score
    }
    if(score===0 && userNum!==secretNum) {
        message.textContent = 'Game over'
        numberInput.setAttribute('readonly', 'readonly')
        message.style = 'color: red;'
    }
    if(userNum<1 || userNum>20) {
        message.textContent = 'Type a number within the range'
        message.style = 'color: red;'
    }
    else if(userNum===secretNum) {
        document.querySelector('.display').textContent = `${secretNum}`
        message.textContent = `You won`
        document.body.style.backgroundColor = "green"
        numberInput.setAttribute('readonly', 'readonly')
        message.style = 'color: white;'
    }
    else if(userNum<secretNum) {
        message.textContent = 'More'
    }
    else if(userNum>secretNum) {
        message.textContent = 'Less'
    }
    if(userNum===secretNum) {
        document.querySelector('.best').textContent = score
    }
})

document.querySelector('.restart').addEventListener('click', 
function() {
    secretNum = Math.trunc(Math.random()*20)+1
    numberInput.value = ''
    scoreElem.textContent = 5
    document.body.style.backgroundColor = "black"
    message.style = 'color: white;'
    numberInput.removeAttribute('readonly')
    message.textContent = 'Guess'
    document.querySelector('.display').textContent = `???`
    if (score>Number(document.querySelector('.best').textContent)) {
        document.querySelector('.best').textContent = score
    }
})