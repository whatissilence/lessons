
export const GENDERS = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other'
}


export class Person {
  constructor(name) {
    this.name = name;
    this.gender = GENDERS.FEMALE;
    this.alive = true;
  }

}

// export {
//   GENDERS,
//   Person
// }