function areAnagrams(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return "Invalid input";
    }

    // Remove non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Sort the characters of both strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
const result = areAnagrams(string1, string2);
console.log("Are the strings anagrams?", result); // Output: true