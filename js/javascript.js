let timer;
let timers = [
  { title: "Inicio", time: "01:00" },
  { title: "Abrir Culto", time: "05:00" },
  { title: "Alabanza y Adoración", time: "40:00" },
  { title: "Tiempo de Regalos", time: "05:00" },
  { title: "Ministracion de Ofrendas", time: "05:00" },
  { title: "Predica", time: "60:00" },
  { title: "Predica ayuno", time: "30:00" },
  { title: "Extra", time: "06:00" },
];
let currentTimer = 0;

function startTimer(){
  clearInterval(timer);
  const display = document.getElementById('display');
  const title = document.getElementById('title');
  let time = timers[currentTimer].time.split(':');
  let minutes = parseInt(time[0], 10);
  let seconds = parseInt(time[1], 10);
  title.innerHTML = timers[currentTimer].title;

  timer = setInterval(function() {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        display.classList.add('red');
        display.innerHTML = "00:00";
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    if (minutes < 0) {
      display.classList.add('red');
      display.innerHTML = '-' + (Math.abs(minutes) < 10 ? '0' + Math.abs(minutes) : Math.abs(minutes)) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    } else {
      display.classList.remove('red');
      display.innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }
  }, 1000);
}

function nextTimer() {
  clearInterval(timer);
  const display = document.getElementById('display');
  const title = document.getElementById('title');
  display.classList.remove('red');
  currentTimer = (currentTimer + 1) % timers.length;
  title.innerHTML = timers[currentTimer].title;
  display.innerHTML = timers[currentTimer].time;
}

document.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'ArrowLeft':
      prevTimer();
      break;
    case 'ArrowRight':
      nextTimer();
      break;
    case 'ArrowTop':
      startTimer();
      break;
    default:
      break;
  }
});
document.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'ArrowLeft':
      prevTimer();
      break;
    case 'ArrowRight':
      nextTimer();
      break;
    case 'Enter':
      startTimer();
      break;
    case 'ArrowBottom':
      pauseTimer();
      break;
    case 'Backspace':
      backToPreviousTimer();
      break;
    default:
      break;
  }
});

function pauseTimer() {
  clearInterval(timer);
}

function backToPreviousTimer() {
  clearInterval(timer);
  currentTimer = (currentTimer - 1 + timers.length) % timers.length;
  const display = document.getElementById('display');
  const title = document.getElementById('title');
  display.classList.remove('red');
  title.innerHTML = timers[currentTimer].title;
  display.innerHTML = timers[currentTimer].time;
}

function startTimer(){
  clearInterval(timer);
  const display = document.getElementById('display');
  const title = document.getElementById('title');
  let time = timers[currentTimer].time.split(':');
  let minutes = parseInt(time[0], 10);
  let seconds = parseInt(time[1], 10);
  title.innerHTML = timers[currentTimer].title;

  timer = setInterval(function() {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        display.classList.add('red');
        display.innerHTML = "00:00";
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    if (minutes < 0) {
      display.classList.add('red');
      display.innerHTML = '-' + (Math.abs(minutes) < 10 ? '0' + Math.abs(minutes) : Math.abs(minutes)) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    } else {
      display.classList.remove('red');
      if (minutes === 0 && seconds <= 5 && timers[currentTimer].time !== "05:00") {
        display.classList.add('red');
      }
      display.innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }
  }, 1000);
}