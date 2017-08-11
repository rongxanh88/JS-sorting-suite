const assert     = require('chai').assert
const quickSort = require('../quickSort')

describe('Quick Sort', function() {
  it('sorts three numbers', function() {
    let numbers = [4,2,1];
    assert.deepEqual(quickSort(numbers), [1,2,4]);
  });

  it('sorts five numbers', function() {
    let numbers = [1,4,9,2,5];
    assert.deepEqual(quickSort(numbers), [1,2,4,5,9]);
  })
});