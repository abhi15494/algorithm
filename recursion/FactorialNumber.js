function factorial(n) {
    if(n < 2) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(4));
console.log(factorial(10));
console.log(factorial(20));

