const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; //100px

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;

  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = x + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px       ${yWalk}px 0 red,
    ${xWalk * -1}px  ${yWalk}px 0 green,
    ${xWalk}px       ${yWalk * -1}px 0 blue,
    ${xWalk * -1}px  ${yWalk * -1}px 0 yellow
  `;
}

hero.addEventListener('mousemove', shadow);
