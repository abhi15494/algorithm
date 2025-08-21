function fibonacci(n) {
    if(n < 2) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(12));
console.log(fibonacci(6));
console.log(fibonacci(17));

// here 2^n
