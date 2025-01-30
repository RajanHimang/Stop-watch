const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

// console.log(Date.now())

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const startTimer = function () {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);
};



const formatTime = function (elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    return (
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + "." +
      (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00"
      ) +
      "." +
      (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );

};

const stopTimer = function () {
  console.log("stop");
};
const resetTimer = function () {
  console.log("reset");
};

startButtonEl?.addEventListener("click", startTimer);
stopButtonEl?.addEventListener("click", stopTimer);
resetButtonEl?.addEventListener("click", resetTimer);
