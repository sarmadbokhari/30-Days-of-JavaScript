const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling
}

button.addEventListener('click', () => {
  console.log('click');
}, {
  once: true
})

divs.forEach(div => div.addEventListener('click', logText, {
  // runs the function on the way down
  capture: false,
  // listen for click once and unbind itself
  once: true
}));

// unbinding equivalent to:
// div.removeEventListener('click', logText)
