'use strict';

// ============== Recursion =========================
// const driveC = {
//   Documents: {
//     'dyplom.docx': 53223,
//     'cv.docx': 34423,
//     'jobs_list.xlsx': 45534
//   },
//   Photos: {
//     'me.jpg': 3452,
//     'my_cat1.jpg': 563234,
//     'my_cat2.jpg': 563234,
//     'my_cat3.jpg': 563234,
//     'my_cat4.jpg': 563234,
//     'my_cat5.jpg': 563234,
//     'my_cat6.jpg': 563234,
//     'my_cat7.jpg': 563234,
//     'my_cat8.jpg': 563234,
//     'my_cat9.jpg': 563234,
//     'my_cat10.jpg': 563234,
//   },
//   Program_files: {
//     Games: {
//       'Need for Speed': {
//         'ea_games_logo.jpg': 34552,
//         'game.exe': 3434555,
//         'textures.txr': 56725522
//       }
//     }
//   },
//   Windows: {
//     system32: {
//       printer_drivers: {
//         'drv1.exe': 66732,
//         'drv2.exe': 66732,
//         'drv3.exe': 66732,
//         'drv4.exe': 66732,
//         'brother_logo.jpg': 63234
//       }
//     },
//     'some_file.exe': 454552,
//     'some_other_file.exe': 677434,
//   },
//   'autoexec.bat': 512,
//   'config.sys': 322
// }
//
// function findFile(folder, pattern) {
//   let keys = Object.keys(folder);
//   let result = [];
//
//   keys.forEach(function(name) {
//     if (typeof folder[name] === 'object' && !Array.isArray(folder[name])) {
//       // папка
//       console.log(`Йдемо глибше у папку ${name}`)
//       result.push(...(       findFile(folder[name], pattern)      ));
//       console.log(`--- Повернулися з папки ${name}`)
//     } else {
//       // файл
//       if (name.includes(pattern)) {
//         result.push(name);
//       }
//     }
//   })
//
//   return result;
// }
//
// console.log( findFile(driveC, '.jpg') );


// ================ Objects ======================

const baseAuto = {
  color: 'white',
  name: 'Audi',
  drive: function() {
    console.log('wrrrooooom');
  }
};

const myAuto = Object.create(baseAuto);
myAuto.color = 'red';

const neighbourAuto = Object.create(myAuto);
neighbourAuto.color = 'green';
neighbourAuto.spoiler = true;

console.log(myAuto.color);
console.log(neighbourAuto);

// Object.seal(myAuto); // Не можна додавати та видаляти свойства, можна змінювати
// Object.freeze(baseAuto); // Не можна додаватиб видаляти свойства, НЕ можна змінювати

// const myArr = [1,2,3,4,5,6];
// Object.freeze(myArr);
// myArr[2] = 5; // ERROR

// ==================== Copy =======================
const me = {
  name: 'Oleksii',
  age: 40,
  animal: 'Cat',
  address: {
    street: 'Shevch',
    house: 2
  }
}

const other = {
  name: 'Serhii',
  age: 16,
  hobby: 'bike'
}

//
// const friend = me;
// friend.name = 'Oleksandr';
//
// console.log(me); // Oleksandr

// const friend = Object.assign({}, me, other); // 1 спосіб - shallow copy - вложені обʼєкти не копіюються, а передаються по посиланню
const friend = { ...me, ...other }; // 2 спосіб - shallow copy
const me2 = JSON.parse(JSON.stringify(me)); // 3 спосіб - повноцінна копія
const me3 = structuredClone(me); // 4 спосіб - дуже нова штука - повноцінна копія



// Get Set ================================

const language = {
  set current(name) {
    this.log.push(name);
  },
  get latest() {
    return this.log[this.log.length - 1];
  },
  log: [],
};

language.current = 'EN';
language.current = 'FA';
language.current = 'UA';

console.log(language.latest);


















