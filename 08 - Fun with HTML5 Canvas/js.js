const canvas   = document.querySelector('#draw');
const context  = canvas.getContext('2d');
// set width and height of canvas to full window w&h
canvas.width   = window.innerWidth;
canvas.height  = window.innerHeight;

context.strokeStyle = '#F15B41';
context.lineJoin    = 'round';
context.lineCap     = 'round';
context.lineWidth   = 100;

let isDrawing = false;
let lastX     = 0;
let lastY     = 0;
let hue       = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) { return; } // stop fx if user hasn't clicked down to draw
  console.log(e);

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`
  context.beginPath();
  context.moveTo(lastX, lastY);

  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;

  // increment through all possible hues
  hue++;
  // reset hue to 0 after getting to 360
  if (hue >= 360) {
    hue = 0;
  }

  // switch up size of lineWidth increment/decrement after reaching 100 and 1
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;

  lastX = e.offsetX;
  lastY = e.offsetY;
});

// draw to canvas on mousdown
canvas.addEventListener('mousemove', draw);

// disable draw() on mousup or mouseout
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
