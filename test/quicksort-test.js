const assert     = require('chai').assert
const quickSort = require('../quickSort')

describe('Quick Sort', () => {
  it('sorts three numbers', () => {
    let numbers = [4,2,1]
    assert.deepEqual(quickSort(numbers, 0, 2), [1,2,4])
  })

  it('sorts five numbers', () => {
    let numbers = [1,4,9,2,5]
    assert.deepEqual(quickSort(numbers, 0, 4), [1,2,4,5,9])
  })
})