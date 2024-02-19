'use strict';

class User {
  car = 'no car';
  constructor(login, name, age) {
    this.login = login;
    this.name = name;
    this.age = age;

    if (!this.login || User.ADMIN_LOGINS.includes(this.login.toLowerCase())) {
      this.login = User.generateNewLogin();
    }
  }
  setCar(car){
    if (this.age >= 18) {
      this.car = car;
    }
  }

  static ADMIN_LOGINS = ['Oleksii', 'Dmytro', 'Silvan'].map(v => v.toLowerCase());
  static userNameCounter = 5;
  static generateNewLogin() {
    User.userNameCounter = User.userNameCounter + 1;
    return 'username_' + User.userNameCounter;
  }
}

let john = new User('oleksii', 'John', 22);
john.setCar('Toyota');
console.log(john);

let mary = new User('mary2007', 'Mary', 15);
mary.setCar('Toyota');
console.log(mary);

// ================================Try catch finally =======================
let currentUser;

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

try {
  // request на сервер, щоб отримати користувача
  currentUser = '';// тут начебто запрос на сервер -->

    throw new NetworkError('No network!');
  // throw new Error('Some error!');

  // якщо запрос звалився з помилкою, код в try далі не виконується
  // а якщо все добре, ми заповнюємо частину сайту з інформацією про користувача

} catch (error) {
  // натомість виконання коду переходить в catch

  // Ми можемо аналізувати помилку та показати користувачу більш детальну інформацію
  if (error instanceof NetworkError) {
    console.log('NetworkError catch: ', error.message);
  } else {
    console.log(error.message, error.name);
    // throw error; // Якщо це взагалі якась неочікувана помилка, ми її можемо викинути вище
  }

}
finally {
  // цей код виконується у кінці незалежно від того, чи була помилка, чи її не було
  console.log('Finally');
}

// Якщо сталася помилка, то увесь сайт не перестане працювати, але ця змінна залишиться неініціалізованою
if (!currentUser) {
  // redirectToLogin(); // і ми повернемо користувача на сторінку логіну
}

console.log('Hello developer!');