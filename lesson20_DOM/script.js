'use strict';

// document.getElementById('test')
// let programmeLists = document.getElementsByClassName('programme-list__item'); // ПСЕВДОмасив
// let programmeListsArray = Array.from(programmeLists);
// document.querySelectorAll('.programme-list__item');

// const div = document.getElementsByTagName('div')[0];
// div.textContent = 'Hello from Group';
//
// let firstItem = document.getElementsByClassName('programme-list__item')[0];
// firstItem.classList.remove('programme-list__item');
// firstItem.classList.add('programme-list__item');

// let firstItem = document.getElementsByClassName('programme-list__item')[0];
// let parent = firstItem.parentElement;
// parent.removeChild(firstItem);
// parent.appendChild(firstItem);
// parent.removeChild(firstItem);
// parent.prepend(firstItem);

// let divs = document.getElementsByTagName('div');
// divs[0].innerHTML = '<strong>AAAAA</strong>';
//
// let divs = document.getElementsByTagName('div');
//
// let handleClick = function (event) {
//   event.target.style.color = 'red';
// }
//
// divs[0].addEventListener('click', handleClick);


// ==============================
// let divs = document.getElementsByTagName('div');
//
// let handleMouseOver = function (bzzzz) {
//   bzzzz.target.style.color = 'red';
// }
//
// let handleMouseOut = function (event) {
//   event.target.style.color = 'blue';
// }
//
// Array.from(divs).forEach( elem => {
//     elem.addEventListener('mouseover', handleMouseOver);
//     elem.addEventListener('mouseout', handleMouseOut);
//
//   }
// )

// =================================
let divs = document.getElementsByTagName('div');

let handleMouse = function (event) {
  if (event.type === 'mouseover') {
    event.target.style.color = 'red';
  } else if (event.type === 'mouseout') {
    event.target.style.color = 'blue';
  }
}

Array.from(divs).forEach( elem => {
    elem.addEventListener('mouseover', handleMouse);
    elem.addEventListener('mouseout', handleMouse);

  }
)

divs[0].removeEventListener('mouseover', handleMouse);
divs[4].addEventListener('mouseover', function(event) {console.log(event)});
divs[4].addEventListener('click', function() {
  document.body.style.backgroundColor = 'lightblue';
})



