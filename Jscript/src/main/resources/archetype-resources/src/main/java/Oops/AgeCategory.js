function determineAgeCategory(age) {
    if (age < 13) {
        return "kid";
    } else if (age >= 13 && age <= 19) {
        return "teen";
    } else {
        return "adult";
    }
}

// Test the function
console.log(determineAgeCategory(10)); // Output: kid
console.log(determineAgeCategory(16)); // Output: teen
console.log(determineAgeCategory(25)); // Output: adult