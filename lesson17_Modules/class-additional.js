class Person {
  name = 'Anonymous';
  gender = 'male';

  static GENDERS = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other'
  }

  setName(name) {
    this.name = name;
  }

  walk() {
  }

  speak() {
  }

  sleep() {
  }

  static makeBaby(father, mother) {
    if (father.gender === Person.GENDERS.MALE && mother.gender === Person.GENDERS.FEMALE) {
      const baby = new Person();
      baby.setName('');
      return baby;
    }

    console.log('Sorry. No baby');
    return null;
  }
}


class Driver extends Person {

  drive() {
    console.log('Me driving');

  }
}



const me = new Driver();
me.setName('Oleksii')
console.log(me.drive());

const someGirl = new Person();

const newBorn = Person.makeBaby(me, someGirl);

console.log(Person.GENDERS.FEMALE);




/*
клас суперМаз
  метод чек
    приймає обʼєкт { X, Y, Znak}
    питає корист
      - викликає калк
      - викликає інпут

  метод інпут
    3 промти, цифри та знак
    калк

  метод калк
    рахує та вертає результат
 */





