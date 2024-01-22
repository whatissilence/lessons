// let a = [1,2,3,'aaa',true,6,7];
// let b = new Array(10);
// let c = new Array(10,11,22,33,44,55,66);
//
// let u = [1,2,3,undefined,5,6];
// u[u.length - 1] // Last element
// u.length = 11;
//
// const arr = ['aaa','bbb','ccc'];
// arr[3] = 'ddd'; // Ok
// arr = [] // ERROR!

Array.isArray(arr) // true
if (Array.isArray(arr) && arr.length) {}

arr.join(' ')

let q = 'quick brown fox jumps over the lazy dog';
q.split('o').join('0'); // 'quick br0wn f0x jumps 0ver the lazy d0g'
q.split(' ').join('_'); // 'quick_brown_fox_jumps_over_the_lazy_dog'

const myArr = [4,7,3,0,2,6,3,8];
const mynewArr = myArr.concat(['aaa','bbb','ccc'], 333,444,555,666,'i dont know'); // поверне НОВИЙ масив
q.split('').reverse().join(''); // 'god yzal eht revo spmuj xof nworb kciuq'

const myArr = [4,7,3,0,2,6,3,8];
myArr.reverse(); // Змінює даний йому масив

let ages = [
  [17, 18, 19],
  [21, 22, 19],
  [23, 23, 22]
];

const flattedArr = ages.flat();  // [17, 18, 19, 21, 22, 19, 23, 23, 22]

const a = ['aaa','bbb','ccc','ddd','eee'];
let a2 = a.splice(1,2); //  поверне ['bbb', 'ccc'], масив стане ['aaa', 'ddd', 'eee']
a.splice(2,0, 'qqq','www','eee'); // поверне [], масив стане ['aaa', 'bbb', 'qqq', 'www', 'eee', 'ccc', 'ddd', 'eee']

a.push('fff');
a.pop();
a.shift();
a.unshift('aaa');

if( a.includes('ccc') ) {}
// ======================================

let b = [1, 2, 3, 4, 5, 6, 7, 8, 99, 3, 5, 8, 2, 99, 44];
function isBigger40(elem, index, arr) {
  console.log('elem:', elem, ' index:', index, !isNaN(elem), elem > 40, elem < 50);
  return !isNaN(elem) && elem > 40 && elem < 50;
}

b.find(isBigger40);
b.findIndex(isBigger40);

function isBitween4and5(elem, index, arr) {
  return !isNaN(elem) && elem >= 4 && elem < 8;
}

b.filter(isBitween4and5);

function iter(elem, index, arr) {
  console.log(elem, elem >= 4, elem < 8)
  return elem >= 0 && elem < 100;
}

b.every(iter); // true - Чи всі елементи відповідають вимогам?
b.some(iter); // true - Чи хоча б один елемент відповідає вимогам?

// ======================================

function showMe(elem, index, arr) {
  console.log(elem * elem);
}

b.forEach(showMe);

// =====================================
function getSquare(elem) {
  return elem * elem;
}

const bSquare = b.map(getSquare); // вертає новий масив, трансформуючи старий
console.log(bSquare)

// =====================================

function sum(accumulator, element) {
  return accumulator + element;
}

console.log(   b.reduce(sum, 0)   );

// Це є тим же самим, що й оце:

let sum = 0;
for (let i = 0; i < b.length; i++) {
  sum = sum + b[i];
}

console.log(sum);





























