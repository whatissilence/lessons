'use strict';

// let textInput = document.getElementById('text-input');
// textInput.onclick = function() {
//   console.log('Click from function');
// }
//
// textInput.onclick = function() {
//   console.log('Click from other function');
// }
//
// textInput.addEventListener('click', function (event) { // callback
//   console.log('Hi from addEventListener', event);
// })
//
// function test(element, eventParam) {
//   console.log('Hello from test', element, eventParam);
// }
//
// console.log(event)

// ===================================================
// const table = document.getElementsByTagName('table')[0];
// table.addEventListener('click', handleClick);
// table.removeEventListener('click', handleClick);


// ===================================================
//
// function handleClick(elementName, event) {
//   console.log(`handleClick. I see this event on ${elementName} level`, event);
// }
//
// function handleTdClick(elementName, event) {
//   console.log(`handleClick. I see this event on ${elementName} level`, event);
//   event.target.style.backgroundColor = 'lightblue';
// }
//
// function handleTdMouseMove(elementName, event) {
//   console.log(`handleTdMouseMove. I see this event on ${elementName} level`, event);
// }
//
// function handleLinkClick(elementName, event) {
//   console.log(`handleClick. I see this event on ${elementName} level`, event);
//   event.stopPropagation();
//   // event.stopImmediatePropagation();
//   event.preventDefault();
// }
//
// const table = document.getElementsByTagName('table')[0];
// const trArray = Array.from(document.getElementsByTagName('tr'));
// const tdArray = Array.from(document.getElementsByTagName('td'));
//
// table.addEventListener('click', (event) => {
//   handleClick('table', event.target.parentElement);
// })
//
// trArray.forEach(element => element.addEventListener('click', ev => {
//   handleClick('tr', ev);
// }))
//
// tdArray.forEach(element => element.addEventListener('click', ev => {
//   handleTdClick('td', ev);
// }))
//
// document.addEventListener('click', (event) => {
//   handleClick('document', event.target.parentElement);
// })
//
// // Links
//
// // let hrefArray = Array.from(document.getElementsByClassName('link'));
// // hrefArray.forEach(elem => elem.addEventListener('click', ev => {
// //   handleLinkClick('link', ev);
// // }))
//
//
// tdArray.forEach(element => element.addEventListener('mousemove', ev => {
//   handleTdMouseMove('td', ev);
// }))
//
//
// // концепти - методи фільтрації багатьох івентів
// // debounce - чекає поки івент не завершиться і викликає у кіньці обробник
// // throttle - запускає в перший раз, а потім чекає визначений час і запускає ще раз якщо івенти ще приходять і знову чекає

// ===============================================


function handleTdMouseDown(event) {
  console.log(event);
}


const tdArray = Array.from(document.getElementsByTagName('td'));

tdArray.forEach(element => element.addEventListener('mousedown', ev => {
  handleTdMouseDown(ev);
}))

tdArray.forEach(element => element.addEventListener('mouseover', ev => {
  const element = ev.target;
  element.classList.add('cursor');
}))

tdArray.forEach(element => element.addEventListener('mouseout', ev => {
  const element = ev.target;
  element.classList.remove('cursor');
}))

tdArray.forEach(element => element.addEventListener('contextmenu', ev => {
  ev.preventDefault();
}))

