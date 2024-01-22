'use strict';

let we = ['Oleksii', 'Aleksander', 'Kateryna', 'Nikolay', 'Maks' ];

we.forEach(function(name) {
  console.log(name.toUpperCase());
})

let bigWe = we.map(function(elem) {
  return elem.toUpperCase();
});

// =================== Functions

const makeFirstLetterBig = function (str) {
  return str[0].toUpperCase() + str.slice(1);
}

function greeting(name) {
  console.log(`Welcome, ${ makeFirstLetterBig(name) }!`);
}

const allLettersBig = phrase => phrase.toUpperCase();

const person = {
  name: 'Oleksii',
  age: 40,
  introduce: function() {
    console.log('My name is Oleksii, age: 40');
  }
}


greeting('natalia');
greeting('alex');
greeting('egor');
console.log(allLettersBig('Alexey'));

person.introduce();

// ===========================


const chess = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];
function makeMove(fromA, fromB, toA, toB) {
  chess[toA][toB] = chess[fromA][fromB];
  chess[fromA][fromB] = ' ';
}


/*
board[4][4] = board[6][4];
board[6][4] = " ";
*/

makeMove(6,4, 4,4);

// ===========================


function extendedGreetings(name, welcomeText = 'Welcome,') {
  console.log(`${welcomeText} ${name}!`);
}

extendedGreetings('Nikolay');
extendedGreetings('Alex', 'Hello,');
extendedGreetings('Kateryna');
extendedGreetings(); // Welcome, undefined!

let otherText = 'Hate you,';
extendedGreetings('Oleksii', otherText);

function argExample() {
  // псевдомасив, має ленгс, можна ходити фором, але не можна мапом,
  // спеціальне слово, старе, не раджу користуватися!!!
  console.log(arguments);
}

function example(arr) {
  console.log(arr)
}
example([2,3,4,5,6,7,8,9,3,5,2,6,7]);
function argExampleES6(student, ...marks) { // повноцінний масив, все вміє
  console.log(student, Array.isArray(marks), marks.map(v => v));
}

// argExample(3,4,6,8,34,88,33,66,88,0,44,22);
argExampleES6('Oleksii', 3, 4, 6, 8, 34, 88, 33, 66, 88, 0, 44, 22, 44, 55, 22);
argExampleES6('Oleg' );






