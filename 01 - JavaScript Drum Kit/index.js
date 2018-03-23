window.addEventListener('keydown', (e) => {
  let key = e.keyCode;
  let audioEl = document.querySelector(`audio[data-key='${key}']`);
  let keyEl = document.querySelector(`div[data-key='${key}']`);
  if (keyEl !== null) {
    keyEl.classList.add('playing');
    audioEl.play();
  }
});

window.addEventListener('keyup', (e) => {
  let key = e.keyCode;
  let keyEl = document.querySelector(`div[data-key='${key}']`);
  if (keyEl !== null) {
    keyEl.classList.remove('playing');
  }
});