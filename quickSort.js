function quickSort(collection, firstIndex, lastIndex) {
  if (firstIndex < lastIndex) {
    partitionIndex = partition(collection, firstIndex, lastIndex)

    quickSort(collection, firstIndex, partitionIndex - 1)
    quickSort(collection, partitionIndex + 1, lastIndex)
  }
  return collection
}

function partition(collection, firstIndex, lastIndex) {

}

//End of file
module.exports = quickSort;