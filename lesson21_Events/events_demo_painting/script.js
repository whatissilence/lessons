'use strict';

let isPainting = false;
let isErasing = false;

function handleClick(tagName, event) {
  console.log('I see this event in ', tagName, event)
  // event.stopPropagation();
  event.preventDefault();
}

function paintBg(event) {
  event.target.classList.add('cursor');
  if (isPainting) {
    event.target.classList.add('painted');
  } else if (isErasing) {
    event.target.classList.remove('painted');
  }
}

function clearBg(event) {
  event.target.classList.remove('cursor');
}

function handleMouseDown(event) {
  console.log('mouseDown', event)
  event.preventDefault();
  event.stopPropagation();
  isPainting = event.which === 1;
  isErasing = event.which === 3;
  if (isPainting) {
    event.target.classList.add('painted');
  } else if (isErasing) {
    event.target.classList.remove('painted');
  }
}
function handleMouseUp(event) {
  event.preventDefault();
  isPainting = false;
  isErasing = false;
}




Array.from(document.getElementsByTagName('td')).forEach(el => el.addEventListener('click', event => handleClick('td', event)))
Array.from(document.getElementsByTagName('tr')).forEach(el => el.addEventListener('click', event => handleClick('tr', event)))
document.getElementsByTagName('table')[0].addEventListener('click', event => handleClick('table', event));

Array.from(document.getElementsByTagName('td')).forEach(el => el.addEventListener('mouseenter', paintBg))
Array.from(document.getElementsByTagName('td')).forEach(el => el.addEventListener('mouseleave', clearBg))

Array.from(document.getElementsByTagName('td')).forEach(el => el.addEventListener('mousedown', handleMouseDown))
Array.from(document.getElementsByTagName('td')).forEach(el => el.addEventListener('mouseup', handleMouseUp))

Array.from(document.getElementsByTagName('td')).forEach(el => el.addEventListener('contextmenu', ev => ev.preventDefault()))

