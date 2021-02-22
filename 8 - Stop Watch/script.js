var seconds = 00;
var minutes = 00;
var interval = 0;

var appendSeconds = document.getElementById("clock-seconds");
var appendMinutes = document.getElementById("clock-minutes");
var buttonStart = document.getElementById("buttonStart");
var buttonStop = document.getElementById("buttonStop");
var buttonReset = document.getElementById("buttonReset");

function startClock() {
  minutes++;
  if (minutes < 9) {
    appendMinutes.innerHTML = "0" + minutes;
  }
  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
  if (minutes > 10) {
    seconds++;
    appendSeconds.innerHTML + "0" + seconds;
    minutes = 0;
    appendMinutes.innerHTML = "0" + 0;
  }
  if (seconds > 99) {
    appendSeconds.innerHTML = seconds;
  }
}

buttonStart.onclick = function () {
  interval = setInterval(startClock);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function(){
    clearInterval(interval);
    minutes = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds
    appendMinutes.innerHTML = minutes
}
