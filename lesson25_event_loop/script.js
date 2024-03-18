

let num = 0;

function showExclamation() {
  console.log('!!!!!!!!!!!!!');
}

function showQuestion() {
  console.log('???????????');
}

function showName () {
  let name = generateName(); // Викличеться другим - Call stack
  console.log(name);

}

function generateName() {
  let rand = Math.random(); // Викличеться третім - Call stack
  return 'asdasdasd' + rand;
}


setTimeout(showExclamation, 0); // showExclamation попадає першим у чергу
setTimeout(showQuestion, 0);

queueMicrotask(() => console.log('Мені тільки спитати!')); // функція без імені - черга для мікротасків

showName(); // Викличеться першим, попаде в Call stack

console.log('AFTER SHOWNAME!!!');

document.addEventListener('click', () => {
  console.log('CLICK!!!!');
})



// Heap - купа
// Call stack - стек викликів
// Callback Queue - Черга колбеків
// Event loop - цикл подій

