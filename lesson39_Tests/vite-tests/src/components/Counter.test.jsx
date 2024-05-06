import {describe, it, expect, beforeEach, beforeAll} from 'vitest';
import { render, screen } from '@testing-library/react'
import Counter from './Counter.jsx';

describe('Counter', () => {
  it('should be rendered', () => {
    render(<Counter initialValue={0} />)
    // screen.debug(); // prints out the jsx in the App component unto the command line
    screen.getByText('Counter: 0');
    })

  it('should be rendered with zero without props.initialValue', () => {
    render(<Counter />)

    screen.getByText('Counter: 0');
  })

})




// function sum(arg1, arg2) {
//   return Number(arg1) + Number(arg2);
// }

// describe('Sum function ', () => {
//   beforeAll(() => {
//
//   })
//
//   afterAll(() => {
//
//   })
//
//   beforeEach(() => {
//
//   })
//
//   afterEach(() => {
//     console.log('==== after each worked ====')
//   })
//
//   it('should return sum of 2 digits', () => {
//     const sumVar = sum(2,3)
//     expect(sumVar).to.equal(5);
//   })
//
//   it('should return sum of 2 text that can be converted', () => {
//     const sumVar = sum('2','3');
//     expect(sumVar).to.equal(5);
//   })
//
//   it('should return NaN if some text cannot be converted', () => {
//     const sumVar = sum('qqqqq',3);
//     expect(sumVar).to.be.NaN;
//   })
// })
