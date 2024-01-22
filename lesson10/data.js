function getDataFromServer() {
  return {
    president: [{ name: 'Bill', salary: 1000000 }],
    directors: [
      { name: 'Kate', salary: 100000 },
      { name: 'Leo', salary: 98999 },
    ],
    secretary: [
      { name: 'Kathy', salary: 10000 },
      { name: 'Sybille', salary: 9848 },
      { name: 'Billy', salary: 9755 },
    ],
    office: {
      staff: {
        documentation: [
          { name: 'Ithan', salary: 8755 },
          { name: 'Sybille', salary: 9453 },
          { name: 'Thomas', salary: 9453 },
        ],
        others: {
          maintenance: {
            techs: [
              {name: 'Rose', salary: 7452},
              {name: 'Jack', salary: 7455},
            ],
            support: {
              tier1: [
                { name: 'Lizzy', salary: 5734 },
                { name: 'Danny', salary: 5732 },
              ],
              tier2: [
                { name: 'Karina', salary: 7392 },
                { name: 'Danny', salary: 7452 },
              ],
              tier3: [
                { name: 'John', salary: 7392 },
                { name: 'Mary', salary: 7452 },
              ]
            }
          }
        }
      }
    }
  }
}