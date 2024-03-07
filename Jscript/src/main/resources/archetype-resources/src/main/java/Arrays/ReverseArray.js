function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid input";
    }

    const reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log("Original Array:", originalArray); // Output: [1, 2, 3, 4, 5]
console.log("Reversed Array:", reversedArray); // Output: [5, 4, 3, 2, 1]