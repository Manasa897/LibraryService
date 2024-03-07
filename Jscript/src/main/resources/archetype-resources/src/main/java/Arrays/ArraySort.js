function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid input";
    }

    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]