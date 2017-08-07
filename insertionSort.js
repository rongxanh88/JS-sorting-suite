function insertionSort(numbers) {
  let sortedArray = [];
  let temp = 0;
  numbers.forEach(function(number) {
    let index = 0;
    let element = sortedArray[index] || Number.NEGATIVE_INFINITY;
    if (number > element) {
      while (number > element) {
        index++;
        element = sortedArray[index] || Number.POSITIVE_INFINITY;
      }
    }
    sortedArray.splice(index, 0, number);
  });
  return sortedArray;
};

module.exports = insertionSort;