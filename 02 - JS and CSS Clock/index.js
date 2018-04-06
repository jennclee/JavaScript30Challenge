const setDate = () => {
  const now = new Date();

  // Seconds hand
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  const secondHand = document.querySelector('.second-hand');
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  // Minutes hand
  const minute = now.getMinutes();
  const minuteDegree = ((minute / 60) * 360) + 90;
  const minuteHand = document.querySelector('.min-hand');
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  // Hours hand
  const hour = now.getHours();
  const hourDegree = ((hour / 60) * 360) + 90;
  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);