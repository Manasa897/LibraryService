function reverseNumber(number) {
    // Convert the number to a string to manipulate its digits
    let numString = number.toString();

    // Split the string into an array of characters, reverse it, and join it back into a string
    let reversedString = numString.split('').reverse().join('');

    // Parse the reversed string back to a number
    let reversedNumber = parseInt(reversedString);

    return reversedNumber;
}

// Test the function
let inputNumber = 12345;
let reversed = reverseNumber(inputNumber);
console.log("Input:", inputNumber);
console.log("Reversed:", reversed);