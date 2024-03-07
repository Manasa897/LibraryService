function fibonacciSeries(n) {
    let fib = [0, 1];
    let i = 2;

    while (i < n) {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    }

    return fib.slice(0, n).join(' ');
}

// Test the function
const N = 10;
console.log(fibonacciSeries(N)); // Output: 0 1 1 2 3 5 8 13 21 34