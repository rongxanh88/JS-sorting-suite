function quickSort(collection, firstIndex, lastIndex) {
  if (firstIndex < lastIndex) {
    partitionIndex = partition(collection, firstIndex, lastIndex)

    quickSort(collection, firstIndex, partitionIndex - 1)
    quickSort(collection, partitionIndex + 1, lastIndex)
  }
  return collection
}

function partition(collection, firstIndex, lastIndex) {
  pivot = collection[lastIndex]

  index = firstIndex - 1
  for (let j = firstIndex; j <= lastIndex - 1; j++) {
    let element = collection[j]

    if (element <= pivot) {
      index++
      let temp = collection[j]
      collection[j] = collection[index]
      collection[index] = temp
    }
  }
  
  let temp = pivot
  collection[lastIndex] = collection[index + 1]
  collection[index + 1] = temp
  return index + 1
}

module.exports = quickSort;