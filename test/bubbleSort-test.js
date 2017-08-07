const assert     = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('Bubble Sort', function() {
  it('sorts three numbers', function() {
    let numbers = [4,2,1];
    assert.deepEqual(bubbleSort(numbers), [1,2,4]);
  });

  it('sorts five numbers', function() {
    let numbers = [1,4,9,2,5];
    assert.deepEqual(bubbleSort(numbers), [1,2,4,5,9]);
  })
});