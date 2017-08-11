function mergeSort(numbers) {
  if (numbers.length === 1) {
    return numbers
  }
  let midpoint = Math.ceil(numbers.length/2)
  let leftSide = numbers.slice(0, midpoint)
  let rightSide = numbers.slice(midpoint, numbers.length)
  let leftResult = mergeSort(leftSide)
  let rightResult = mergeSort(rightSide)
  return merge(leftResult, rightResult)
}

function merge(left, right) {
  let mergedNumbers = []
  let index = 0
  while (left.length > 0 && right.length > 0) {
    if (left[index] < right[index]) {
      mergedNumbers.push(left.shift())
    } else {
      mergedNumbers.push(right.shift())
    }
  }

  while (left.length > 0) {
    mergedNumbers.push(left.shift())
  }

  while (right.length > 0) {
    mergedNumbers.push(right.shift())
  }
  return mergedNumbers
}

module.exports = mergeSort