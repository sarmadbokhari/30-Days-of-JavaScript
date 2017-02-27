const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function hightlightLink() {
  const linkCoords = this.getBoundingClientRect();

  // Add the amount scrolled on page to the top (scrollY) and left (scrollX for horizontal scroll)
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }

  highlight.style.width = linkCoords.width + 'px';
  highlight.style.height = linkCoords.height + 'px';
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

triggers.forEach(a => a.addEventListener('mouseenter', hightlightLink));
