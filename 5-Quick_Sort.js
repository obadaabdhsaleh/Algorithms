/**
 * A quick sort implementation in JavaScript.
 * @param {number[]} array - The array to be sorted.
 * @param {number} start - The starting index of the array segment to be sorted.
 * @param {number} end - The ending index of the array segment to be sorted.
 * @returns {number[]} The sorted array.
 */
function quickSort(array, start = 0, end = array.length - 1) {
    // Base case: If the start index is less than the end index, there's work to do.
    if (start < end) {
        // Choosing the pivot element from the end of the array segment.
        let pivot = array[end];
        // This will track the final pivot position.
        let swap = start;

        // Iterate over the array segment.
        for (let index = start; index < end; index++) {
            // If the current element is less than the pivot, it needs to be swapped.
            if (array[index] < pivot) {
                // Swapping elements to ensure all elements less than pivot are before it.
                [array[swap], array[index]] = [array[index], array[swap]];
                // Move the swap pointer forward.
                swap++;
            }
        }
        // Swap the pivot element to its correct position.
        [array[end], array[swap]] = [array[swap], array[end]];

        // Recursively apply the same logic to the left sub-array.
        quickSort(array, start, swap - 1);
        // Recursively apply the same logic to the right sub-array.
        quickSort(array, swap + 1, end);
    }

    // Return the sorted array.
    return array;
}

// Test the function with an example array.
let array = [64, 25, 12, 22, 11, 100, 101, 98, 88];
// Output the result of the quickSort function.
console.log(quickSort(array));
