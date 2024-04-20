/**
 * Swap two elements in an array.
 * @param {Array} array - The array.
 * @param {number} i - The index of the first element.
 * @param {number} j - The index of the second element.
 */
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

/**
 * Find the index of the minimum element in a subarray.
 * @param {Array} array - The array.
 * @param {number} start - The start index of the subarray.
 * @returns {number} - The index of the minimum element.
 */
function findmin(array, start) {
    let min = start;
    for(let index = start + 1; index < array.length; index++) {
        if(array[index] < array[min]) {
            min = index;
        }
    }
    return min;
}

/**
 * Recursive Selection Sort.
 * @param {Array} array - The array to be sorted.
 * @param {number} start - The start index of the subarray to be sorted.
 * @returns {Array} - The sorted array.
 */
function recursiveSelectionSort(array, start = 0) {
    // Base case: if the start index reaches the end of the array, return the array.
    if(start >= array.length - 1) {
        return array;
    }

    // Find the minimum element in the unsorted subarray and swap it with the first element of the subarray.
    swap(array, start, findmin(array, start));

    // Recursively sort the rest of the array.
    return recursiveSelectionSort(array, start + 1);
}

// Test the function
let array = [64, 25, 12, 22, 11, 100, 101, 98, 88];
console.log(recursiveSelectionSort(array));
