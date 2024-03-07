function printPattern() {
    for (let i = 4; i >= 0; i--) {
        let str = '+'.repeat(i) + '-'.repeat(6 - i);
        console.log(str);
    }
}

// Test the function
printPattern();