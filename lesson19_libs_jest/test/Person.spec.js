import { Person, GENDERS } from "./Person.js";

describe('Person tests', () => {
  test('Person constructor work fine', () => {
    const someGirl = new Person('Martha');

    expect(someGirl.name).toBe('Martha');
    expect(someGirl.gender).toBe(GENDERS.FEMALE);
  });

  test('Person is alive by default', () => {
    const someGirl = new Person('Martha');

    expect(someGirl.alive).toBeTruthy();
  });
})
