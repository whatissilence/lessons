
export const GENDERS = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other'
}


export default class Person {
  constructor(name) {
    this.name = name;
    this.gender = GENDERS.FEMALE;
  }

}

// export {
//   GENDERS,
//   Person
// }