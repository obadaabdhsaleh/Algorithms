/**
 * This function performs a binary search on a sorted array.
 * @param {number[]} array - The array to search.
 * @param {number} e - The element to find.
 * @returns {Object} - An object containing a status property (true if the element was found, false otherwise) and an index property (the index of the found element in the array, if found).
 */
let performBinarySearch = function (array, e) {
  let start = 0, end = array.length - 1;

  // Continue searching as long as start is less than or equal to end
  while (start <= end) {

    // Calculate the middle
    let middle = Math.floor((start + end) / 2);

    // If the middle element is the target, return its
    if (array[middle] === e)
      return { status: true, index: middle };

    // If the middle element is less than the target, adjust the start
    else if (array[middle] < e)
      start = middle + 1;

    // If the middle element is greater than the target, adjust the end
    else
      end = middle - 1;
  }

  // If the loop completes without finding the element, return false, means "Element Not found"
  return { status: false };
}

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(performBinarySearch(numberArray, 1)); // Searching for 1 in the array
console.log(performBinarySearch(numberArray, 5)); // Searching for 5 in the array
console.log(performBinarySearch(numberArray, 7)); // Searching for 7 in the array
console.log(performBinarySearch(numberArray, 11)); // Searching for 11 in the array
