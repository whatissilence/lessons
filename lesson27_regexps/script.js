'use strict';

const str = 'The quick brown fox jumps over the lazy dog. It barked.';
const str2 = `asdasdAAada448844ddAAasdasdasAA. asdasd <strong id='27' class="abbrev">AA</strong> sa5dasd <div>AA</div> sdasd--=5asdAA

asdasdAA Aa aa as d33asdad aa <b>77asdasd176767asdAA99</b> asdasda CC DD AA BB`;

let reg = /[A-Z]+/g;
console.log(str.replace(reg, '1'));

let reg2 = new RegExp('[A-Z]+', 'g');
console.log(str.replace(reg2, '2'));

// console.log('test', reg.test(str)); // true чи false
console.log('exec', reg.exec(str)); // T
console.log('exec', reg.exec(str)); // I
console.log('exec', reg.exec(str)); // null

console.log('match:', str.match(reg)); // ['T', 'I']
console.log('search:', str.search(reg)); // 0 - індекс першого входження
console.log('replace:', str.replace(reg, '4')); // 4he quick brown fox jumps over the lazy dog. 4t barked.
console.log('split:', str.split(reg)); // ['', 'he quick brown fox jumps over the lazy dog. ', 't barked.']

let reg3 = /^[A-Z]+/gi;
console.log('match:', str.match(reg3));

console.log(str2.match(/[A-Z]{2}$/g));

console.log('match:', str2.match(/[a-z][0-9]+[a-z]/g));

// ============================================

let symbolsToSearch = ['AA', 'BB', 'QQ'];
let regString = `(${['AA', 'BB', 'QQ'].join('|')})`;
let symbolsReg = new RegExp(regString, 'g');
let result = str2.match(symbolsReg);

console.log('regString: ', regString);
console.log('result: ', result);
// ============================================
let htmlParseReg = /(<[^\/]{1}[\s\S]*?>)(.*?)(<[\s\S]+?>)/g;

// Завдяки дужкам, ми можемо отримати не тільки сам тег з тим, що всередені, але й частки
// якщо ми покладемо кожен виклик htmlParseReg.exec(str2) в змінну, ми на кожному кроку парсінгу отримаємо масив - розділення тегу:
//              повний результат пошуку                      відкриваючий тег             всередені     закриваючий тег
// ['<strong id='27' class=\"abbrev\">AA</strong>', '<strong id='27' className=\"abbrev\">', 'AA', '</strong>']

console.log('Html pasring: ', htmlParseReg.exec(str2));
console.log('Html pasring: ', htmlParseReg.exec(str2));
console.log('Html pasring: ', htmlParseReg.exec(str2));
console.log('Html pasring: ', htmlParseReg.exec(str2));





