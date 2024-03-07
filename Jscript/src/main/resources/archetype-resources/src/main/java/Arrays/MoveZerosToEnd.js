function moveZerosToEnd(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid input";
    }

    let nonZeroIndex = 0;

    // Move all non-zero elements to the front of the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

// Example usage:
const numbers = [0, 1, 0, 3, 12];
const result = moveZerosToEnd(numbers);
console.log("Result:", result); // Output: [1, 3, 12, 0, 0]