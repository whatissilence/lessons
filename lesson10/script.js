'use strict';


// // З сайд еффектом - погано =================
function getHundred() {
  b = 100;
  console.log('In function', b)
}



let b = 5;
getHundred();
console.log('After all', b);
//
//
// // Без сайд еффекту - добре ==================
// function multiply20(param) {
//   param *= 20;
//   return param;
// }
//
//
//
// let a = 5;
// a = multiply20(20);
// console.log('After all', a);
//
// // =================================

function showMeConsole(text) {
  console.log(text);
}

function showMeAlert(text) {
  alert(text);
}


function showBigText(text, callback) {
  const bigText = text.toUpperCase();
  callback(bigText);
}

// const whereTo = Number(prompt('1 - console чи 2 - alert?'));

// let process = () => {}; // function() {}
// const arr = [1,2,3,4,5,6,7,8,9];
//
// if (whereTo === 1) {
//   process = showMeConsole;
// } else if (whereTo === 2) {
//   process = showMeAlert;
// }
//
// showBigText('Weeeeeee!', process);
// arr.forEach(process)

// // =================================
//
// function map(array, callback) {
//   const myArr = [];
//
//   for(let i = 0; i < array.length; i++) {
//     myArr.push( callback(array[i]) );
//   }
//
//   return myArr;
// }
//
//
// const arr = [1,2,3,4,5,6,7,8,9];
//
// const makeSpan = function (value) {
//   return `<span>${value}</span>`;
// }
//
// const spanArray = map(arr, makeSpan);
// console.log(spanArray);
//
// console.log(map(arr, v => `<b>${v}</b>` ));
// console.log(map(arr, v => `<strong>${v}</strong>` ));
// console.log(map(arr, v => `<div>${v}</div>` ));
//
//
// // arr.map( function (value) { return value * 5 } );
//
//
// // =================================
//
// function functionProducer(mult) {
//
//   return function(digit) {
//     return digit * mult;
//   };
//
// }
//
// const mult3 = functionProducer(3); // В mult3 лежить функція, яка приймає число і повертає число помножене на три
// const mult10 = functionProducer(10);
// const mult25 = functionProducer(25);
// const mult35 = functionProducer(35);
//
// console.log( mult3(5) );
// console.log( mult10(5)  );
//
// const mult20 = function(digit) {
//   return digit * 20;
// }
//
// const mult30 = function(digit) {
//   return digit * 30;
// }
//
// const mult40 = function(digit) {
//   return digit * 40;
// }
//
// const mult50 = function(digit) {
//   return digit * 50;
// }
//
// const mult60 = function(digit) {
//   return digit * 60;
// }
//
// const mult70 = function(digit) {
//   return digit * 70;
// }


// =================================
// Рекурсія

function makeStep(cellCount) {
  console.log('I made', cellCount);
}

makeStep(2)

const dataFromServer = getDataFromServer();

function showPerson(data, level=1) {
  console.log('LEVEL', level)
  if (Array.isArray(data)) {
    data.forEach(elem => console.log(elem));
  } else {
    console.log('Object!', data);
    Object.keys(data).forEach(key => {
      showPerson(data[key], level + 1);
    });
  }
}

showPerson(dataFromServer);


function factorial(num) {
  if (num === 1 || num < 1) {
    return num;
  }

  return num * factorial(num - 1);
}

console.log( factorial(4) );

































