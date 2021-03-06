const assert     = require('chai').assert
const mergeSort = require('../mergeSort')

describe('Merge Sort', () => {
  it('sorts three numbers', () => {
    let numbers = [4,2,1]
    assert.deepEqual(mergeSort(numbers), [1,2,4])
  })

  it('sorts five numbers', () => {
    let numbers = [1,4,9,2,5]
    assert.deepEqual(mergeSort(numbers), [1,2,4,5,9])
  })
})