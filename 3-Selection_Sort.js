/**
 * This function implements the Selection Sort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function selectionSort(array) {
    // The length of the array
    let n = array.length;
    
    // One by one move boundary of unsorted subarray
    for(let index = 0; index < n; index++) {
        // Find the minimum element in unsorted array
        let min = index;
        for(let j = index+1; j < n; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        
        // Swap the found minimum element with the first element of the unsorted array
        let temp = array[min];
        array[min] = array[index];
        array[index] = temp;
    }
    
    // Return the sorted array
    return arr;
}

// Test the function
let arr = [64, 25, 12, 22, 11, 100, 101, 98, 88];
console.log(selectionSort(arr));
