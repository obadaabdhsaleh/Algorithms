/**
* This function performs a binary search on a sorted array using recursion.
* @param {number[]} array - The array to search.
* @param {number} e - The element to find.
* @param {number} start - The starting index for the search.
* @param {number} end - The ending index for the search.
* @returns {boolean} - Returns true if the element was found, false otherwise.
*/
let recursiveBinarySearch = function (array, e, start, end) {

	// Base Condition
	if (start > end) return { status: false };

	// Find the middle index
	let middle = Math.floor((start + end) / 2);

	// Compare middle element with given key x
	if (array[middle] === e) return { status: true, index: middle };

	// If element at middle is greater than x,
	// search in the left half of middle
	if (array[middle] > e)
		return recursiveBinarySearch(array, e, start, middle - 1);
	else

		// If element at middle is smaller than x,
		// search in the right half of middle
		return recursiveBinarySearch(array, e, middle + 1, end);
}
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(recursiveBinarySearch(numberArray, 1, 0, numberArray.length - 1)); // Searching for 1 in the array
console.log(recursiveBinarySearch(numberArray, 5, 0, numberArray.length - 1)); // Searching for 5 in the array
console.log(recursiveBinarySearch(numberArray, 7, 0, numberArray.length - 1)); // Searching for 7 in the array
console.log(recursiveBinarySearch(numberArray, 11, 0, numberArray.length - 1)); // Searching for 11 in the array