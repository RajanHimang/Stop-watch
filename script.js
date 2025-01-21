const timerEl = document.getElementById('timer')
const startButtonEl = document.getElementById('start')
const stopButtonEl = document.getElementById('stop')
const resetButtonEl = document.getElementById('reset')


const startTimer = function() {
    console.log('start')
}
const stopTimer = function() {
    console.log('stop')
}
const resetTimer = function() {
    console.log('reset')
}

startButtonEl?.addEventListener('click',  startTimer)
stopButtonEl?.addEventListener('click',  stopTimer)
resetButtonEl?.addEventListener('click',  resetTimer)