function bubbleSort(numbers) {
  let temp = 0;
  let firstNum = 0;
  let secondNum = 0;

  for(let i = 0; i < numbers.length; i++) {
    let swapped = false;
    for(let j = 1; j < numbers.length; j++) {
      firstNum  = numbers[j-1];
      secondNum = numbers[j];
      if (firstNum > secondNum) {
        temp         = secondNum;
        numbers[j]   = firstNum;
        numbers[j-1] = secondNum;
        swapped = true;
      }
      console.log(numbers);
    }
    if (swapped === false) { break; }
  }
  return numbers;
};

module.exports = bubbleSort;