let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
  let now     = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours   = now.getHours();
  let secDeg  = ((seconds / 60) * 360) + 90;
  let minDeg  = ((minutes / 60) * 360) + 90;
  let hourDeg = ((hours / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minuteHand.style.transform = 'rotate(' + minDeg + 'deg)';
  hourHand.style.transform   = 'rotate(' + hourDeg + 'deg)';

  console.log(hours, minutes, seconds);
}

setInterval(setDate, 1000);

setDate();
