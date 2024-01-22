'use strict';

// Чому краще використовувати string literals
// let a = 10;
// let b = 30;
// console.log(`Результат: ${a + b}`);

Math.round(45.37); // 46
Math.ceil(45.37); // 46
Math.floor(45.99); // 45

Math.pow(3, 4) // 81
Math.sqrt(81) // 9
Math.abs(-4) // 4

Math.min(3,6,9,2,8,3,2,-11) // -11
Math.max(3,6,9,2,8,3,2,-11) // 9

Math.min(...[3,6,9,2,8,3,2,-11])

Math.random() * 100 // Від 0 (включно) до 100 (виключно)

// ===================================
String
'asdfdggfhfgh'.toUpperCase().length;
'ASDFDGGFHFGH'.toLowerCase(); // asdfdggfhfgh
'         ASDFDG  GFHFGH     '.trim() // 'ASDFDG  GFHFGH'
'    quick brown fox jumps over the lazy dog     '.trimEnd() // + trimStart()
'quick brown fox jumps over the lazy dog'.split(' '); // ['quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
'quick brown fox jumps over the lazy dog'.slice(6, 11); // 'brown'
'quick brown fox jumps over the lazy dog'.substring(11, 6); // 'brown'
'quick brown fox jumps over the lazy dog'[6]
'quick brown fox jumps over the lazy dog'[99] // undefined
let str = '77.33'.slice(0,2);
let domain = 'https://google.com'.slice(8);

'quick brown fox jumps over the lazy dog'.indexOf('brown') // 6
'quick brown fox jumps over the lazy dog'.indexOf('brownqqqq') // -1

let domain = 'https:/google.com'.split('://');
console.log(domain.length > 1 ? domain[1] : '');

'quick brown fox jumps over the lazy dog'.search('brown'); // 6
'quick brown fox.jumps over the lazy dog'.search('.') // 0, бо крапка - це регулярний вираз

'quick brown fox jumps over the lazy dog'.includes('fox') // true пошук
'quick brown fox jumps over the lazy dog'.startsWith('quick') // true
'quick brown fox jumps over the lazy dog'.endsWith('over the lazy dog') // true

'quick brown fox jumps over the lazy dog'.replace('brown', 'red')
'quick 33333 fox jumps over 33333 lazy dog'.replace('33333', '*****')
'quick 33333 fox jumps over 33333 lazy dog'.replaceAll('33333', '*****')

// ===================================
(8 / 0) === Number.POSITIVE_INFINITY
Number.parseInt('68.33asdasdasd'); // 68
Number.parseFloat('68.33asdasdasd'); // 68.33
(555).toString();

let a = 555;
a.toExponential(5); // '5.55000e+2'

(455.34446).toFixed(4); // '455.3445'
(2234).toPrecision(5); // 2234.0'

console.log(3434 + ''); // '3434'
(455).toString() //'455'
String(455) // '455'

//  ==================================
new Date(2024,0,7,20,12,35,755);
Number(new Date()) // milliseconds from 1 січня 1970
(new Date()).getTimezoneOffset(); // -120 хвилин треба відняти щоб отримати UTC

