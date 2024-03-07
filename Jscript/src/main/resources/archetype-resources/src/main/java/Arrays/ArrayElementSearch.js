function linearSearch(arr, target) {
    if (!Array.isArray(arr)) {
        return "Invalid input";
    }

    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }

    return -1; // Return -1 if not found
}

// Example usage:
const numbers = [10, 20, 30, 40, 50, 60];
const target = 40;
const index = linearSearch(numbers, target);
if (index !== -1) {
    console.log("Element", target, "found at index", index);
} else {
    console.log("Element", target, "not found in the array");
}