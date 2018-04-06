const setDate = () => {
  const now = new Date();
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  // Seconds hand
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  if (secondsDegree === 90) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = '';
  }

  // Minutes hand
  const minute = now.getMinutes();
  const minuteDegree = ((minute / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  if (minuteDegree === 90) {
    minuteHand.style.transition = 'none';
  } else {
    minuteHand.style.transition = '';
  }

  // Hours hand
  const hour = now.getHours();
  const hourDegree = ((hour / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  if (hourDegree === 90) {
    hourHand.style.transition = 'none';
  } else {
    hourHand.style.transition = '';
  }
}

setInterval(setDate, 1000);